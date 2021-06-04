<template>
  <div class="transition duration-300 ease-in-out max-w-screen-lg flex-auto todo-viewer rounded-2xl bg-gray-200 shadow-md hover:shadow-xl dark:bg-gray-700 flex flex-col m-3 lg:w-full">
    <div class="shadow-sm">
    <input class="self-center font-sans font-bold w-2/3 md:max-w-sm text-gray-900 dark:text-gray-300 bg-transparent text-4xl mt-6 mx-6 text-center border-transparent hover:dark:border-white hover:border-gray-400 border-b" v-model="todo_title" placeholder="Title" @input="changed = true"/>
    <input class="self-center font-sans font-light w-2/3 md:w-5/6 text-gray-400 bg-transparent text-2xl mt-2 mx-4 mb-4 text-center border-transparent hover:dark:border-white hover:border-gray-400 border-b" v-model="todo_desc" placeholder="Description..." @input="changed = true"/>
    </div>
    <div class="w-full pt-2">
      <template v-for="[index, item] in items.entries()" :key="index">
        <TodoObject :div_id="'todo-object-'+index" :text="item.message" :checked="item.checked" @remove-event="remove_todo" @add-next-event="add_todo_key"/>
      </template>
      <NewTodoObject @click="add_todo"/>
    </div>
    <div class="h-full"></div>
    <div class="shadow-inner shadow-2xl p-4 flex">
    <button v-clipboard:copy="'https://todo-vue-gray.vercel.app/todo/'+(id ? id : todo_id)" v-clipboard:success="onCopy" v-clipboard:error="onError" class="transition duration-300 ease-in-out bg-gray-300 dark:bg-gray-500 rounded-full w-max p-2 shadow-md hover:shadow-lg material-icons" :class="{ 'md-dark' : !darkmode, 'md-light': darkmode }">{{ copied ? "done": "link" }}</button>
    <button class="transition duration-300 ease-in-out bg-gray-300 dark:bg-gray-500 rounded-full w-max p-2 ml-2 shadow-md hover:shadow-lg flex" @click="togglePrivate">
      <span class="material-icons ml-1" :class="{ 'md-dark' : !darkmode, 'md-light': darkmode }">{{ todo_private ? "lock": "people" }}</span>
      <label class="ml-2 mr-2 text-gray-600 dark:text-gray-200">{{ todo_private ? "Private": "Public" }}</label>
    </button>
    <div class="w-full"></div>
    <label id="saving-text" class="self-end w-min flex">
      <label for="saving-text" class="material-icons mr-2 h-6 w-6" :class="{ 'animate-spin': changed, 'md-dark' : !darkmode, 'md-light': darkmode }">{{ changed ? "sync" : "cloud_done"}}</label>
      <label class="text-gray-600 dark:text-gray-200">{{ changed ? "Saving..." : "Autosaved"}}</label>
    </label>
    </div>
  </div>
</template>

<script>
import TodoObject from './TodoObject.vue'
import NewTodoObject from './NewTodoObject.vue'

export default {
  components: { TodoObject, NewTodoObject },
  name: 'TodoViewer',
  props: {
    id: String,
  },
  computed: {
    todo_id: {
      get () {
        return this.$store.state.id
      },
      set (value) {
        this.$store.commit('setID', value)
      }
    },
    todo_title: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.$store.commit('setTitle', value)
      }
    },
    todo_desc: {
      get () {
        return this.$store.state.desc
      },
      set (value) {
        this.$store.commit('setDesc', value)
      }
    },
    todo_private: {
      get () {
        return this.$store.state.private
      },
      set (value) {
        this.$store.commit('setPrivate', value)
      }
    },
    changed: {
      get () {
        return this.$store.state.changed
      },
      set (value) {
        this.$store.commit('setChanged', value)
      }
    },
    items: {
      get () {
        return this.$store.state.items
      },
      set (value) {
        this.$store.commit('setItems', value)
      }
    },
    darkmode: {
      get () {
        return this.$store.state.darkmode
      },
      set (value) {
        this.$store.commit('setDarkmode', value)
      }
    },
  },
  data() {
    return {
      copied: false
    }
  },
  mounted() {
    this.todo_id = this.id

    if (!this.id) {
      let self = this
      var taskList = []
      this.items.forEach(element => {
        taskList.push({ body: element.message, done: element.checked })
      });

      fetch("https://todo-node-soumitradev.herokuapp.com/api/v1/todo/", {
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        },
        "body": JSON.stringify({
          "title": this.todo_title,
          "desc": this.todo_desc,
          "private": this.todo_private,
          "tasks": taskList
        }),
        "method": "POST",
        "mode": "cors"
      }).then(async function (res) {
        var json = await res.json()
        self.todo_id = json._id
      })
    } else {
      let self = this
      fetch("https://todo-node-soumitradev.herokuapp.com/api/v1/todo/" + this.id, {
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        },
        "method": "GET",
        "mode": "cors"
      }).then(async function (res) {
        var json = await res.json()
        self.todo_id = json.id
        self.todo_title = json.title
        self.todo_desc = json.desc
        self.todo_private = json.private
        let temp = []
        json.tasks.forEach(element => {
          temp.push({ message: element.body, checked: element.done })
        });
        self.items = temp
      })
    }

    window.setInterval(() => {
      this.autosave()
    }, 5000)
  },
  methods: {
    add_todo(event) {
      // `event` is the native DOM event
      if (event) {
        this.items.push({ message: '', checked: false })
        this.changed = true
        this.$nextTick(function() {
          document.getElementById('todo-object-' + (this.items.length - 1) + '-text').focus()
        })
      }
    },
    add_todo_key(event) {
      // `event` is the native DOM event
      if (event){
        this.items.splice(parseInt(event.id) + 1, 0, { message: '', checked: false })
        this.changed = true
        this.$nextTick(function() {
          document.getElementById('todo-object-' + (parseInt(event.id) + 1) + '-text').focus()
        })
      }
    },
    onCopy() {
      this.copied = true
      var self = this
      setTimeout(function() { self.copied = false }, 5000);
    },
    onError(err) {
      console.log(err)
    },
    togglePrivate() {
      this.todo_private = !this.todo_private
      this.changed = true
    },
    autosave() {
      if (this.changed) {
        var taskList = []
        this.items.forEach(element => {
          taskList.push({ body: element.message, done: element.checked })
        });

        fetch("https://todo-node-soumitradev.herokuapp.com/api/v1/todo/", {
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({
            title: this.todo_title,
            desc: this.todo_desc,
            private: this.todo_private,
            id: this.id,
            tasks: taskList
          }),
          method: "PUT",
          mode: "cors"
        })
        
        this.changed = false
      }
    },
    remove_todo(event) {
      // `event` is the native DOM event
      if (event) {
        this.changed = true
        this.items.splice(event.id, 1)
      }
    },
  }
}
</script>
