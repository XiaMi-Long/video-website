<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-10-05 16:59:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-06 13:04:15
-->
<script setup lang="ts">
import SplitLineView from '/src/components/SplitLine/index.vue'
import VideoCardView from '/src/components/VideoCard/index.vue'
import { getListService } from './service/get-list-service'

const { list } = getListService()
console.log(list)
</script>

<template>
  <div>
    <SplitLineView></SplitLineView>
    <VideoCardView :list="list"></VideoCardView>
  </div>
</template>

<style scoped lang="scss">
@import './style/index.scss';
</style>
