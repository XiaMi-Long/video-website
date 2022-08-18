<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-18 14:56:40
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 14:59:56
-->
<script setup lang="ts"></script>

<template>
  <div>
    <span class="title"> <slot></slot> </span>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-weight: bold;

  color: #2080f0;

  font-size: 18px;

  cursor: pointer;
}
</style>
