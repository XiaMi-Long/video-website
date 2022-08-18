/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 16:10:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 17:09:47
 */
import axios from "axios"
import { AxiosRequestConfig } from "axios"

axios.defaults.baseURL = "http://121.36.81.39:3000"

/**
 * @name: wwy
 * @msg: 
 * @param {AxiosRequestConfig} param
 * url: param.url,
    method: param.method,
    baseURL: param.baseURL,
    headers: param.headers,
    params: param.params,
    data: param.data,
    timeout: param.timeout,
    responseType: param.responseType
 * @return {*}
 */
const request = function (param: AxiosRequestConfig): Promise<any> {
  if (import.meta.env.MODE === "development") {
    if (param.method === "GET") {
      console.log("本次 GET 请求参数为:", param.params)
    }
    if (param.method === "POST") {
      console.log("本次 POST 请求参数 params 为", param.params)
      console.log("本次 POST 请求参数 POST 为", param.data)
    }
  }
  return axios.request(param)
}

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
