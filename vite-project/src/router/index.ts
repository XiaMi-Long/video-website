/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:30:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-16 21:53:55
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: () => import("../view/Home/HomeView.vue"),
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export { router }
