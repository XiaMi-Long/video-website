/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:29:20
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-16 22:04:36
 */
import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { router } from "./router"
import store from "./store"

createApp(App).use(store).use(router).mount("#app")
