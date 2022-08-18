<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 23:47:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 10:59:45
-->
<script setup lang="ts">
import RecommendView from "./Recommend/index.vue"
</script>

<template>
  <div class="body-container">
    <n-grid x-gap="12">
      <n-gi :span="6">
        <!-- 首页推荐列表 -->
        <RecommendView></RecommendView>
      </n-gi>
      <n-gi :span="12">2</n-gi>
      <n-gi :span="6">4</n-gi>
    </n-grid>
  </div>
</template>

<style scoped lang="scss"></style>
