/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-19 15:51:04
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:06:10
 */
import { localStorageUtil } from "/src/utils/localStorageUtil"
import { signoutRequest } from "/src/api/Exit"

export function useLogoOut(store: any, localStorageUtil: localStorageUtil) {
  const message = useMessage()

  /**
   * @name: wwy
   * @msg: 用户退出
   * @return {*}
   */
  async function handleExit() {
    const res = await signoutRequest()
    console.log(res)
    localStorageUtil.removeItem("auth")
    store.commit("SET_AUTH_IS_AUTH", false)
    message.success("退出成功")
  }

  return {
    handleExit
  }
}
