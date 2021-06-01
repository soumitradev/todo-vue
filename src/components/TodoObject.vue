<template>
  <div>
    <div class="flex gap-6 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-2xl todo-object min-w-full">
      <input type="checkbox" class="self-center form-checkbox rounded ml-4 text-blue-500 dark:text-blue-600 todo-checkbox">
      <label class="text-gray-900 dark:text-white place-self-start todo-text">{{text}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoObject',
  props: {
    text: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
