<template>
  <div class="transition duration-300 ease-in-out max-w-screen-lg flex-auto todo-viewer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl dark:bg-gray-700 flex flex-col m-3 items-center">
    <h1 class="font-sans font-bold max-w-md text-gray-900 dark:text-white text-4xl mt-6 mx-6">{{ title }}</h1>
    <p class="font-sans font-light max-w-md text-gray-400 dark:text-gray-400 text-2xl mt-2 mx-4 mb-6">{{ desc }}</p>
    <div class="w-full divide-y-2 dark:divide-gray-600">
      <TodoObject text="Destroy industrial society as it exists today"/>
      <TodoObject text="Do your mom"/>
    </div>
  </div>
</template>

<script>
import TodoObject from './TodoObject.vue'

export default {
  components: { TodoObject },
  name: 'TodoViewer',
  props: {
    title: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
