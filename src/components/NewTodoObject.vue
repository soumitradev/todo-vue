<template>
  <div>
    <div class="flex gap-6 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-2xl todo-object min-w-full">
      <button id="new-todo-button" class="text-center rounded ml-4 bg-transparent new-todo-button material-icons">add</button>
      <label class="text-left new-todo-label text-gray-400 dark:text-gray-400 bg-transparent w-full p-1">List item</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTodoObject',
  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (document.documentElement.classList.contains('dark')) {
      document.getElementById('new-todo-button').classList.add('md-light');
    } else {
      document.getElementById('new-todo-button').classList.add('md-dark');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

</style>