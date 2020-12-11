<template>
  <div class="videoItem">
    <img
      :class="[status == 'offLine' ? 'offline' : '', 'videoImage']"
      :src="videoImage"
    />
    <div class="videoTitle">
      <div :class="status === 'Line' ? 'on' : 'off'"></div>
      <span class="videoTitleSpan">{{ videoTitle }}</span>
      <span :class="[status == 'offLine' ? 'offlineVideoTime' : '', 'time']">{{
        time
      }}</span>
    </div>
    <div class="offLineSpan" v-if="status == 'offLine'">
      <!-- <span>设备离线</span> -->
      <van-icon :name="videoOffline" size="34" />
      <span>设备离线</span>
    </div>
    <div class="offLineSpan" v-else>
      <van-icon :name="videoPlay" size="34" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 视频图片
    videoImage: {
      type: String
    },
    // 视频名称
    videoTitle: {
      type: String
    },
    // 视频是否在线：offLine（离线），Line（在线，默认）
    status: {
      type: String,
      default: 'Line'
    },
    // 视频时间
    time: {
      type: String
    }
  },
  data() {
    return {
      videoPlay: require('@/assets/videoImage/videoPlay.png'),
      videoOffline: require('@/assets/videoImage/videoOffline.png')
    }
  }
}
</script>

<style lang="less" scoped>
.videoItem {
  position: relative;
  margin-bottom: 12px;
}
.videoTitle {
  position: absolute;
  font-size: 10px;
  bottom: 4px;
  left: 0;
  width: 159px;
  height: 20px;
  line-height: 20px;
  background-color: #fff;
  color: #000;
  border-radius: 0 0 5px 5px;
  opacity: 0.8;
}
.videoImage {
  width: 159px;
  height: 106px;
  border-radius: 8px;
}

.on {
  display: inline-block;
  opacity: 1;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4a92ff;
  margin: 0 6px 0 11px;
}
.off {
  display: inline-block;
  opacity: 1;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #e60012;
  margin: 0 6px 0 11px;
}
.point {
  width: 10px;
  display: inline-block;
  height: 10px;
  border-radius: 50%;
  margin-left: 8px;
}
.line {
  background-color: #5683ff;
}
.offline {
  opacity: 0.5;
}
.offlineVideoTime {
  color: #000;
}
.time {
  float: right;
  padding-right: 6px;
  font-size: 10px;
}
.offLineSpan {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  text-align: center;
  color: #e60012;
  span {
    display: block;
    line-height: 14px;
    // width: 40px;
  }
}
</style>
