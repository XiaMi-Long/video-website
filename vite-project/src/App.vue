<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 21:29:20
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 15:25:11
-->
<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#2080f0"
  }
  // Button: {
  //   textColor: "#2080f0",
  //   textColorHover: "#2080f0",
  //   textColorPressed: "#2080f0",
  //   textColorFocus: "#2080f0",
  //   borderHover: "#2080f0",
  //   borderPressed: "#2080f0",
  //   borderFocus: "#2080f0"
  // }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
