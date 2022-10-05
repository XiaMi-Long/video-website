<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-19 16:10:44
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-05 16:04:28
-->
<script setup lang="ts">
const imgUrlArray: Array<string> = [
  '/src/assets/images/swiper-img/1.png',
  '/src/assets/images/swiper-img/2.png',
  '/src/assets/images/swiper-img/3.jpg',
  '/src/assets/images/swiper-img/4.jpg',
]
</script>

<template>
  <div class="home-swiper-view">
    <n-carousel show-arrow autoplay :interval="2000">
      <img class="carousel-img" :src="item" v-for="(item, index) of imgUrlArray" :key="index" />
    </n-carousel>
  </div>
</template>

<style scoped lang="scss">
@import './style/index.scss';
</style>
