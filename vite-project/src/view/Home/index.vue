<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-16 23:47:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:21:40
-->
<script setup lang="ts">
import RecommendView from "./Recommend/index.vue"
import SwiperView from "./Swiper/index.vue"
</script>

<template>
  <div class="body-container">
    <n-grid x-gap="12" class="">
      <n-gi :span="6">
        <!-- 首页推荐列表 -->
        <RecommendView></RecommendView>
      </n-gi>
      <n-gi :span="12">
        <!-- 首页轮播 -->
        <SwiperView></SwiperView>
      </n-gi>
      <n-gi :span="6">4</n-gi>
    </n-grid>
  </div>
</template>

<style scoped lang="scss"></style>
