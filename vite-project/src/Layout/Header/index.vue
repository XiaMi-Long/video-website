<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 22:22:24
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-17 12:40:59
-->
<script setup lang="ts">
import FunctionIconView from "./FunctionIcon/index.vue"
import TitleView from "./Title/index.vue"
import UserView from "./User/index.vue"
</script>

<template>
  <div class="layout-header">
    <div class="function-icon">
      <FunctionIconView></FunctionIconView>
    </div>
    <div class="website-logo common-flex-center">
      <TitleView></TitleView>
    </div>
    <div class="user">
      <UserView></UserView>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-header {
  display: flex;

  height: 40px;

  border-bottom: 1px solid #bab8b8;

  padding: 5px 30px;

  .function-icon {
    width: 40%;

    display: flex;
    align-items: center;
  }

  .website-logo {
    width: 20%;
  }

  .user {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
