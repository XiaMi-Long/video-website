/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:29:20
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 16:12:33
 */
import { createApp } from "vue"
import App from "./App.vue"
import { router } from "./router"
import store from "./store"
import "./axios/index"

import "./style/normalize.css"
import "./style/common.css"
import "./style/var.css"

createApp(App).use(store).use(router).mount("#app")
