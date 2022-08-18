<!--
 * @Descripttion: 首页推荐列表
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-18 10:53:54
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 12:04:35
-->
<script setup lang="ts">
const videoList: Array<Object> = [
  {
    id: 1,
    videoUrl: "/src/assets/images/one-1.png",
    videoTitle:
      "东京应该还没下雪吧，虽然我已经搬家了，但老习惯难改，看天气预报时总会连东京也看。",
    videoUpdateTime: new Date().getTime(),
    videoReadCount: 999,
    videoTime: "04:32"
  },
  {
    id: 2,
    videoUrl: "/src/assets/images/one-2.jpg",
    videoTitle:
      "想到这已不再是想见面就可以乘电车相见的距离，还是有点，有那么点寂寞。",
    videoUpdateTime: new Date().getTime(),
    videoReadCount: 999,
    videoTime: "00:53"
  },
  {
    id: 3,
    videoUrl: "/src/assets/images/one-3.png",
    videoTitle:
      "那一瞬间，我仿佛领悟到了什么是永远，心灵和灵魂之所在，我感觉到与她分享了这十三年生命中所有的一切",
    videoUpdateTime: new Date().getTime(),
    videoReadCount: 999,
    videoTime: "03:59"
  },
  {
    id: 4,
    videoUrl: "/src/assets/images/one-4.jpg",
    videoTitle:
      "远野对我很温柔，非常地温柔，但是，他一直注视着的，却是我身后无限远处的某样东西，我对远野的感情是注定没有结果的",
    videoUpdateTime: new Date().getTime(),
    videoReadCount: 999,
    videoTime: "03:24"
  },
  {
    id: 5,
    videoUrl: "/src/assets/images/one-5.jpg",
    videoTitle:
      "我清楚地感觉到，我们以后的日子还是无法一直在一起，横亘在我们面前的是那沉重的人生与漫长的时间，让人望而却步",
    videoUpdateTime: new Date().getTime(),
    videoReadCount: 999,
    videoTime: "100+"
  }
]
</script>

<template>
  <div class="home-recommend-view">
    <div class="video-list">
      <div
        class="video-list-item"
        v-for="(item, index) of videoList"
        :key="index"
      >
        <n-grid x-gap="12">
          <n-gi :span="10">
            <div class="item-video-box">
              <img
                :src="item.videoUrl"
                :alt="item.videoTitle"
                class="item-image"
                lazy
              />
              <div class="video-time">{{ item.videoTime }}</div>
            </div>
          </n-gi>
          <n-gi :span="14">
            <div class="item-info-box">
              <div class="item-title">
                <n-ellipsis :line-clamp="2">
                  {{ item.videoTitle }}
                </n-ellipsis>
              </div>
              <n-space justify="space-between">
                <span class="update-time">
                  <n-time :time="item.videoUpdateTime" format="yyyy-MM-dd" />
                </span>
                <span class="read-count">
                  {{ item.videoReadCount }}
                </span>
              </n-space>
            </div>
          </n-gi>
        </n-grid>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-recommend-view {
  .video-list-item {
    margin: {
      bottom: 20px;
    }

    .item-video-box {
      position: relative;

      .item-image {
        width: 100%;

        border-radius: 4px;
      }

      .video-time {
        opacity: 0;

        min-width: 40px;

        background-color: black;

        border-radius: 2px;

        color: white;

        display: inline-block;

        position: absolute;

        bottom: 10px;
        right: 5px;

        font-size: 12px;

        text-align: center;

        transition: opacity 0.4s;
      }

      &:hover .video-time {
        opacity: 1;
      }
    }

    .item-info-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;

      .item-title {
        font: {
          weight: bold;
          size: 13px;
        }

        cursor: pointer;
      }

      $font-size: 12px;
      $color: var(--grey-color-font);

      .update-time {
        font-size: $font-size;

        color: $color;
      }

      .read-count {
        font-size: $font-size;

        color: $color;
      }
    }
  }
}
</style>
