/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-18 22:06:52
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 22:04:46
 */
import { StoreOptions } from "vuex"
const getters = {
  getIsAuthor: (state: { user: { isAuth: boolean } }) => state.user.isAuth
}

export default getters
