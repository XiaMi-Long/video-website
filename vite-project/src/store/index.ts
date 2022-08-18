/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:56:02
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 22:10:15
 */
import { createStore } from "vuex"
import getters from "./getters"

export default createStore({
  state: {
    user: {
      isAuth: false
    }
  },
  getters,
  mutations: {
    /* 修改是否已经认证标识 */
    SET_AUTH_IS_AUTH(state, value: boolean) {
      state.user.isAuth = value
    }
  },
  actions: {},
  modules: {}
})
