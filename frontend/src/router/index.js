import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Dashboard from "../components/Dashboard.vue";
import AdminMenu from "../views/AdminMenu.vue";
import Book from "../views/BookingForm.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutUs.vue"),
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },  
  {
    path: "/adminMenu",
    component: AdminMenu,
  },
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
