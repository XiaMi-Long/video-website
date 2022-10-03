/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-19 16:01:25
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:03:13
 */
import request from "../../axios"

/**
 * @name: wwy
 * @msg: 用户登出
 * @return {*}
 */
export const signoutRequest = function (): Promise<any> {
  return request({
    url: "/api/v1/user/logout",
    method: "DELETE"
  })
}
