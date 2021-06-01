<template>
<div class="min-h-screen bg-white dark:bg-gray-800 flex flex-wrap justify-center">
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
  <TodoViewer title="June 1, 2021" desc="The Industrial Revolution and its consequences have been a disaster for the human race."/>
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
  methods: {
    mounted () {
      this.id = this._uid
    }
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
