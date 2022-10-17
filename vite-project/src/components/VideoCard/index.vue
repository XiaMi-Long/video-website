<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-10-05 20:48:00
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-16 21:20:42
-->
<script setup lang="ts">
import { Ref, unref } from 'vue'
import { ListStructure } from '@/view/Home/components/TheClassify/service/get-list-service'

const testArray: Array<any> = [
  {
    url: '/src/assets/images/video-card-components-img/1.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
  {
    url: '/src/assets/images/video-card-components-img/3.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
  {
    url: '/src/assets/images/video-card-components-img/4.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
  {
    url: '/src/assets/images/video-card-components-img/5.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
  {
    url: '/src/assets/images/video-card-components-img/5.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
  {
    url: '/src/assets/images/video-card-components-img/5.jpg',
    videoTitle: '今日环法正式开赛！',
    videoTime: '99:23',
    author: '小白',
    authorImg: '',
    readCount: '100万次观看',
    time: '2021-01-20',
  },
]
interface Props {
  list: Array<ListStructure>
}

const props = defineProps<Props>()
console.log(unref(props.list))
</script>

<template>
  <div class="video-card-components-container">
    <div class="video-list-box" v-for="(item, index) of list" :key="index">
      <!-- 图片区域 -->
      <div class="top">
        <img :src="item.url" alt="图片" class="img" />
        <div class="video-time">
          {{ item.videoTime }}
        </div>
      </div>
      <!-- 视频信息区域 -->
      <div class="bottom">
        <!-- 视频标题 -->
        <div class="video-title">
          <n-ellipsis :line-clamp="2">
            {{ item.videoTitle }}
          </n-ellipsis>
        </div>
        <!-- 播放量 -->
        <div class="read-count">
          <n-ellipsis :line-clamp="1">
            {{ item.readCount }}
          </n-ellipsis>
        </div>
        <!-- 视频作者信息 -->
        <div class="author">
          <!-- 作者头像 -->
          <div class="left">
            <img src="/src/assets/images/video-card-components-img/2.jpg" alt="作者头像" class="author-img" />
            <!-- 作者名称 -->
            <div class="author-name">
              <n-ellipsis :line-clamp="1">
                {{ item.author }}
              </n-ellipsis>
            </div>
          </div>
          <!-- 发布时间 -->
          <div class="right">
            <n-ellipsis :line-clamp="1">
              {{ item.time }}
            </n-ellipsis>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style/index.scss';
</style>
