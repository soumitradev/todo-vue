<template>
<div class="min-h-screen bg-white dark:bg-gray-800 flex flex-wrap justify-center">
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
</div>
</template>

<script>
import TodoViewer from './components/TodoViewer.vue'

export default {
  name: 'App',
  components: {
    TodoViewer
  },
  beforeMount() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'
    
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
    
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
