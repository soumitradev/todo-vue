<template>
<div class="flex-grow bg-gray-50 dark:bg-gray-800 flex flex-wrap justify-center">
  <div class="flex flex-col w-full items-center">
    <h1 class="text-gray-900 dark:text-gray-300 lg:w-full max-w-screen-lg text-left p-4 pb-2 font-sans font-medium text-3xl">404: Resource "{{ $route.params.pathMatch[0] }}" Not Found</h1>
  </div>
</div>
</template>

<script>

export default {
  name: 'NotFound',
}
</script>
