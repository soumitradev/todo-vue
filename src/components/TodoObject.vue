<template>
  <div :id="div_id" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="transition duration-300 ease-in-out flex gap-6 hover:shadow-md p-3 todo-object min-w-full">
      <input :id="div_id+'-checkbox'" v-if="checked" type="checkbox" class="self-center form-checkbox rounded ml-4 text-blue-500 dark:text-blue-600 todo-checkbox" v-model="todo_checked" @change="updateEmitter" checked>
      <input :id="div_id+'-checkbox'" v-else type="checkbox" class="self-center form-checkbox rounded ml-4 text-blue-500 dark:text-blue-600 todo-checkbox" v-model="todo_checked" @change="updateEmitter">
      <input :id="div_id+'-text'" @keydown.enter="addNext" class="place-self-start todo-text text-gray-400 dark:text-gray-400 bg-transparent w-full" v-model="todo_text" @input="updateEmitter"/>
      <button :id="div_id+'-button'" @click="removeSelf" v-show="hover" class="text-center rounded ml-4 bg-transparent remove-todo-button material-icons" :class="{ 'md-dark' : !darkmode, 'md-light': darkmode }">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoObject',
  props: {
    div_id: String,
    text: String,
    checked: Boolean,
  },
  computed: {
    todo_text: {
      get () {
        return this.$store.state.items[parseInt(this.div_id.replace("todo-object-", ""))].message
      },
      set (value) {
        var curItems = this.$store.state.items
        curItems[parseInt(this.div_id.replace("todo-object-", ""))].message = value
        this.$store.commit('setItems', curItems)
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
    todo_checked: {
      get () {
        return this.$store.state.items[parseInt(this.div_id.replace("todo-object-", ""))].checked
      },
      set (value) {
        var curItems = this.$store.state.items
        curItems[parseInt(this.div_id.replace("todo-object-", ""))].checked = value
        this.$store.commit('setItems', curItems)
      }
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  mounted() {
  },
  methods: {
    removeSelf(event) {
      // `event` is the native DOM event
      if (event) {
        this.$emit('removeEvent', { id: this.div_id.replace("todo-object-", "") })
      }
    },
    updateEmitter(event) {
      // `event` is the native DOM event
      if (event) {
        this.$store.commit('setChanged', true)
      }
    },
    addNext(event) {
      // `event` is the native DOM event
      if (event) {
        this.$emit('addNextEvent', { id: this.div_id.replace("todo-object-", "") })
      }
    },
  }
}
</script>
