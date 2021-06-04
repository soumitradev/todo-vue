<template>
  <div id="nav" class="row header bg-gray-50 dark:bg-gray-800 flex flex-wrap">
    <div class="flex flex-col w-full items-center">
      <a href="/" class="text-gray-900 dark:text-gray-300 lg:w-full max-w-screen-lg text-left p-4 pb-2 font-sans font-bold text-3xl">The inconveniently simple Todo app</a>
      <button id="dark-toggle-button" class="dark-toggle m-4 transition duration-300 ease-in-out bg-gray-300 dark:bg-gray-500 rounded-full w-max p-2 shadow-md hover:shadow-lg material-icons" :class="{ 'md-dark' : !darkmode, 'md-light': darkmode }" @click="toggleDark">{{ darkmode ? "dark_mode": "light_mode" }}</button>
    </div>
  </div>
  <router-view/>
</template>


<script>
export default {
  name: 'Nav',
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
  beforeMount() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    this.darkmode = darkModeMediaQuery.matches
    darkModeMediaQuery.matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    

    darkModeMediaQuery.addEventListener('change', (e) => {
      const darkModeOn = e.matches;
      darkModeOn ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
      this.darkmode = darkModeOn
    });
  },
  methods: {
    toggleDark() {
      this.darkmode = !this.darkmode
      this.darkmode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  height: 100%;
  margin: 0;
}

.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.box .row.header {
  flex: 0 1 auto;
}

.dark-toggle {
  position: absolute;
  top: 0px;
  right: 0px;
}

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

</style>