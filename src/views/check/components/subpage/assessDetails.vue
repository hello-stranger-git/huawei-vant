<template>
  <div class="assessDetails">
    <!-- 头部区域 -->
    <TopMessage></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <!-- 点检屏幕区域 -->
    <VideoImage></VideoImage>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import VideoImage from '@/components/check/subpage/videoImage.vue' // 点检截图

export default {
  components: {
    TopMessage,
    Notice,
    VideoImage
  }
}
</script>
