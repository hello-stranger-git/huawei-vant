<template>
  <div class="videoRegion">
    <!-- 视频区域 -->
    <div class="screen">
      <!-- 视频 -->
      <div class="video">
        <img :src="screen" />
      </div>
      <!-- 视频按钮 -->
      <div class="button_top">
        <div><img :src="voice" /></div>
        <div><img :src="fullScreen" /></div>
      </div>
      <div class="button_content"><img :src="play" /></div>
      <div class="button_bottom">
        <div>
          <button>标清</button>
        </div>
        <div>
          <button>0.5X</button>
          <button>1X</button>
          <button>2X</button>
          <button>4X</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      screen: this.video, // 点检图
      voice: require('@/assets/icon/check/checkItem/voice.png'), // 音量图标
      fullScreen: require('@/assets/icon/check/checkItem/fullScreen.png'), // 全屏图标
      play: require('@/assets/icon/check/checkItem/play.png') // 播放图标
    }
  }
}
</script>
<style lang="less" scoped>
// 视屏样式
.screen {
  position: relative;
  .video {
    height: 205px;
    img {
      width: 100%;
    }
  }

  // 视频按钮样式
  .button_top,
  .button_bottom {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
  }
  .button_top {
    top: 0px;
    div {
      width: 33px;
      height: 33px;
      margin: 4px 12px;
      img {
        width: 100%;
      }
    }
  }
  .button_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .button_bottom {
    bottom: 0px;
    div {
      margin: 0px 12px 8px 0px;
      button {
        border-radius: 5px;
        color: #fff;
        width: 32px;
        height: 19px;
        font-size: 10px;
        line-height: 19px;
        margin-left: 10px;
        padding: 0;
        background: initial;
        border: 1px solid rgb(223, 223, 223);
        outline: none;
      }
      button:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
}
</style>
