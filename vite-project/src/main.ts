/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:29:20
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-05 15:55:33
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './axios/index'

import './style/normalize.css'
import './style/common.css'
import './style/globals.scss'
import './style/config.css'

createApp(App).use(store).use(router).mount('#app')
