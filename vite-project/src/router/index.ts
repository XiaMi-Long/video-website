/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:30:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-16 23:49:14
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const homeRoutes: Array<RouteRecordRaw> = []

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../view/index.vue"),
    children: [
      {
        path: "home",
        components: {
          "layout-header": () => import("../Layout/Header/index.vue"),
          "layout-container": () => import("../view/Home/index.vue"),
          "layout-footer": () => import("../Layout/Footer/index.vue")
        },
        children: homeRoutes
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export { router }
