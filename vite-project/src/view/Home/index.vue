<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 23:47:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-04 00:31:21
-->
<script setup lang="ts">
import RecommendView from './Recommend/index.vue'
import SwiperView from './Swiper/index.vue'
</script>

<template>
  <div class="body-container">
    <!-- 推荐栏 -->
    <n-grid x-gap="12" class="top">
      <n-gi :span="16">
        <!-- 首页轮播 -->
        <SwiperView></SwiperView>
      </n-gi>
      <n-gi :span="8">
        <!-- 首页推荐列表 -->
        <RecommendView></RecommendView>
      </n-gi>
      <n-gi :span="0">4</n-gi>
    </n-grid>
  </div>
</template>

<style scoped lang="scss">
@import './style/index.scss';
</style>
