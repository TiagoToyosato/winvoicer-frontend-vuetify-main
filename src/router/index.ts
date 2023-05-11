import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
import accountRoutes from "./account.routes"
import { useAlertStore, useAuthStore } from "../stores/index.js"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
]

accountRoutes.forEach(accountRoute => {
  routes.push(accountRoute)
});

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router