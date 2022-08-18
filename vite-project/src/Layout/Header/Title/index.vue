<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-17 12:30:49
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 14:59:42
-->
<script setup lang="ts">
import LogoTextView from "/src/components/LogoText/index.vue"
</script>

<template>
  <div class="layout-header-title-view">
    <span class="title">
      <LogoTextView> VIDEO </LogoTextView>
    </span>
  </div>
</template>

<style scoped lang="scss">
.layout-header-title-view {
  .title {
    font-weight: bold;

    color: #2080f0;

    font-size: 18px;

    cursor: pointer;
  }
}
</style>
