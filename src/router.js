import New from './pages/New.vue'
import Edit from './pages/Edit.vue'
import NotFound from './pages/404.vue'
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
    {
      path: '/:pathMatch(.*)*',
      name: "404",
      component: NotFound,
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
