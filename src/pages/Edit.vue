<template>
<div class="flex-grow bg-gray-50 dark:bg-gray-800 flex flex-wrap justify-center">
  <div class="flex flex-col w-full items-center">
    <h1 class="text-gray-900 dark:text-gray-300 lg:w-full max-w-screen-lg text-left p-4 pb-2 font-sans font-medium text-xl">Edit/View Todo</h1>
    <h1 v-if="isNotFound" class="text-gray-900 dark:text-gray-300 lg:w-full max-w-screen-lg text-left p-4 pb-2 font-sans font-medium text-3xl">404: Not Found</h1>
    <TodoViewer :id="this.$route.params.id" v-else/>
  </div>
</div>
</template>

<script>
import TodoViewer from '../components/TodoViewer.vue'

export default {
  name: 'Edit',
  components: {
    TodoViewer,
  },
  computed: {
    isNotFound: {
      get () {
        return this.$store.state.isNotFound
      },
      set (value) {
        this.$store.commit('setIsNotFound', value)
      }
    },
  }
}
</script>
