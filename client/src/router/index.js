import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Master from "../views/Master.vue";
import Blog from "../views/Blog.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/master",
    name: "Master",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Master,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
