<template>
  <div class="transition duration-300 ease-in-out max-w-screen-lg flex-auto todo-viewer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl dark:bg-gray-700 flex flex-col m-3 items-center">
    <input class="font-sans font-bold max-w-sm text-gray-900 dark:text-white bg-transparent text-4xl mt-6 mx-6 text-center" :value="title" placeholder="Title"/>
    <input class="font-sans font-light w-5/6 text-gray-400 dark:text-gray-400 bg-transparent text-2xl mt-2 mx-4 mb-6 text-center" :value="desc" placeholder="Description..."/>
    <div class="w-full divide-y-2 dark:divide-gray-600">
      <template v-for="[index, item] in items.entries()" :key="item.message">
        <TodoObject :div_id="'todo-object-'+index" :text="item.message" :checked="item.checked" @remove-event="remove_todo"/>
      </template>
      <NewTodoObject @click="add_todo"/>
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
    title: String,
    desc: String
  },
  data() {
    return {
      items: [{ message: 'Foo', checked: false }, { message: 'Bar', checked: true }],
    }
  },
  methods: {
    add_todo(event) {
      // `event` is the native DOM event
      if (event) {
        this.items.push({ message: '', checked: false })
      }
    },
    remove_todo(event) {
      // `event` is the native DOM event
      if (event) {
        this.items.splice(event.id, 1)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
