import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router.js'
import './assets/tailwind.css'
import VueClipboard from 'vue3-clipboard'

const store = createStore({
  state() {
    let today = new Date();
    let mnthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = today.getFullYear();
    let mnth = mnthNames[today.getMonth()];
    let dat = today.getDate();

    return {
      id: null,
      title:  mnth + " " + dat + ", " + year,
      desc: "",
      private: false,
      items: [],
      changed: false,
      darkmode: true,
    }
  },
  mutations: {
    setID(state, ID) {
      state.id = ID
    },
    setTitle(state, newTitle) {
      state.title = newTitle
    },
    setDesc(state, newDesc) {
      state.desc = newDesc
    },
    setPrivate(state, isPrivate) {
      state.private = isPrivate
    },
    setChanged(state, isChanged) {
      state.changed = isChanged
    },
    setItems(state, newItems) {
      state.items = newItems
    },
    setDarkmode(state, bool) {
      state.darkmode = bool
    },
  }
})

const app = createApp(App)

app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})
app.use(store)
app.use(router)

app.mount('#app')
