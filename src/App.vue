<template>
  <TodoViewer msg="Test"/>
</template>

<script>
import TodoViewer from './components/TodoViewer.vue'

export default {
  name: 'App',
  components: {
    TodoViewer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
