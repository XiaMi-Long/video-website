<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 22:28:02
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 23:47:17
-->
<script setup lang="ts">
import { useGettersService } from "/src/store/service/getters-service"
import { localStorageUtil } from "/src/utils/localStorageUtil"

const { isAuth, store } = useGettersService()

inspectStorageToken()
isAuthTrue()

/**
 * @name: wwy
 * @msg: 检验token
 * @return {*}
 */
function inspectStorageToken() {
  if (localStorageUtil.getItem("auth")) {
    store.commit("SET_AUTH_IS_AUTH", true)
  }
}

/**
 * @name: wwy
 * @msg: 检查登录状态
 * @return {*}
 */
function isAuthTrue(): void {
  if (isAuth.value) {
    console.log("认证通过")
  } else {
    console.log("你需要登录")
  }
  console.log(isAuth.value)
}
</script>

<template>
  <div>
    <router-view name="layout-header"></router-view>
    <router-view name="layout-container"></router-view>
    <router-view name="layout-footer"></router-view>
  </div>
</template>

<style scoped></style>
