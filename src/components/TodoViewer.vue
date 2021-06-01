<template>
  <div class="todo-viewer">
    <p class="font-sans">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoViewer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
