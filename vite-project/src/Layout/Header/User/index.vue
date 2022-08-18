<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-17 12:36:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 10:45:14
-->
<script setup lang="ts"></script>

<template>
  <div class="layout-header-user-view">
    <div class="option-button">
      <n-avatar round size="medium" src="/src/assets/images/p.jpg" />
      <n-button color="#0f4b80"> Sign in </n-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-header-user-view {
  .option-button {
    display: flex;
    flex-flow: row wrap;
    gap: 8px 12px;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
