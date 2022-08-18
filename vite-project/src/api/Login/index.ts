/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 16:37:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 17:15:38
 */
import request from "../../axios"
import { FormUser } from "/src/view/Login/service/login-service"

/**
 * @name: wwy
 * @msg: 登录接口
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @return {*}
 */
export const userLoginRequest = function (
  userName: FormUser,
  password: FormUser
): Promise<any> {
  return request({
    url: "/api/v1/user/login",
    method: "POST",
    data: {
      user_name: userName,
      password
    }
  })
}
