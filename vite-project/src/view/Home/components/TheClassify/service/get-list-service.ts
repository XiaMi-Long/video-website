/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-10-06 10:52:02
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-16 21:27:32
 */
import { Ref } from 'vue'

/* 视频返回结果结构 */
export interface ListStructure {
  url: string
  videoTitle: string
  videoTime: string
  author: string
  readCount: string
  authorImg: string
  time: string
}
interface ResultLabel {
  /* 视频列表结果 */
  list: Ref<Array<ListStructure>>
}

export function getListService(): ResultLabel {
  const list = ref<Array<ListStructure>>([
    {
      url: '/src/assets/images/video-card-components-img/1.jpg',
      videoTitle: '今日环法正式开赛！',
      videoTime: '99:23',
      author: '小白',
      authorImg: '',
      readCount: '100万次观看',
      time: '2021-01-20',
    },
  ])
  const testArray: Array<ListStructure> = [
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
  ]
  setTimeout(() => {
    testArray.forEach((item) => list.value.push(item))
  }, 2000)

  return {
    list,
  }
}
