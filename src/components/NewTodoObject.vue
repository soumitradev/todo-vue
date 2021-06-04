<template>
  <div>
    <div class="transition duration-300 ease-in-out flex gap-6 hover:shadow-md p-2 todo-object min-w-full">
      <button id="new-todo-button" class="text-center rounded ml-5 bg-transparent new-todo-button material-icons" :class="{ 'md-dark' : !darkmode, 'md-light': darkmode }">add</button>
      <label class="text-left new-todo-label text-gray-400 dark:text-gray-400 bg-transparent w-full p-1">List item</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTodoObject',
  computed: {
    darkmode: {
      get () {
        return this.$store.state.darkmode
      },
      set (value) {
        this.$store.commit('setDarkmode', value)
      }
    },
  },
}
</script>
