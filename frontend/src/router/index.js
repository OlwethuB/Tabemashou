import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Dashboard from "../components/Dashboard.vue";
import AdminMenu from "../views/AdminMenu.vue";
import AdminRes from "../views/AdminRes.vue";
import AdminUsers from "../views/AdminUsers.vue";
import Book from "../views/BookingForm.vue";
import Confirm from "../views/BookingConf.vue"; 

import About from "../views/AboutUs.vue";
import Contact from "../views/ContactForm.vue";
import Menu from "../views/MenuView.vue";
import SingleUser from "../views/SingleUser.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/singleUser",
    name: "Single User",
    component: SingleUser
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },  
  {
    path: "/adminMenu",
    name: "Menu's Admin",
    component: AdminMenu,
  },
  {
    path: "/adminUsers",
    name: "User's Admin",
    component: AdminUsers,
  },
  {
    path: "/adminRes",
    name: "Res's Admin",
    component: AdminRes,
  },
  {
    path: "/book",
    name: "book",
    component: Book,
  },
  {
    path: "/confirm",
    name: "confirm",
    component: Confirm,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  guards: {
    beforeRouteLeave: authenticateUser,
  },
});

function authenticateUser(to, from, next) {
  if (to.name !== 'login') {
    return next();
  }

  // Check if the user is authenticated
  if (localStorage.getItem('token')) {
    next();
  } else {
    // Redirect to the login page
    router.push('/login');
  }
}
export default router;
