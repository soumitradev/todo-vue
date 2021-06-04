import New from './pages/New.vue'
import Edit from './pages/Edit.vue'
import { createWebHistory, createRouter } from "vue-router"
import './assets/tailwind.css'

const routes = [
    {
      path: "/",
      name: "New",
      component: New,
    },
    {
      path: "/todo/:id",
      name: "Edit",
      component: Edit,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
