<template>
  <div :id="div_id" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="flex gap-6 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-2xl todo-object min-w-full">
      <input v-if="checked" type="checkbox" class="self-center form-checkbox rounded ml-4 text-blue-500 dark:text-blue-600 todo-checkbox" checked>
      <input v-else type="checkbox" class="self-center form-checkbox rounded ml-4 text-blue-500 dark:text-blue-600 todo-checkbox">
      <input class="place-self-start todo-text text-gray-400 dark:text-gray-400 bg-transparent w-full" :value="text"/>
      <button @click="doTheThing" v-show="hover" class="text-center rounded ml-4 bg-transparent remove-todo-button material-icons">remove</button>
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
  data() {
    return {
      hover: false,
    }
  },
  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (document.documentElement.classList.contains('dark')) {
      document.getElementsByClassName('remove-todo-button').forEach(element => {
        element.classList.add('md-light');
      })
    } else {
      document.getElementsByClassName('remove-todo-button').forEach(element => {
        element.classList.add('md-dark');
      })
    }
  },
  methods: {
    doTheThing(event) {
      // `event` is the native DOM event
      if (event) {
        this.$emit('removeEvent', { id: this.div_id.replace("todo-object-", "") })
      }
    },
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