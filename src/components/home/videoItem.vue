<template>
  <div class="videoItem">
    <img
      :class="[status == 'offLine' ? 'offline' : '', 'videoImage']"
      :src="videoImage"
    />
    <div class="videoTitle">
      <span class="videoTitleSpan">{{ videoTitle }}</span>
      <span :class="[status == 'offLine' ? 'offlineVideoTime' : '', 'time']">{{
        time
      }}</span>
    </div>
    <div class="offLineSpan" v-if="status == 'offLine'">
      <span>设备离线</span>
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
  }
}
</script>

<style lang="less" scoped>
.videoItem {
  position: relative;
}
.videoTitle {
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  width: 100%;
  background-color: #30313382;
  color: #fff;
  border-radius: 0 0 5px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.videoImage {
  width: 100%;
  border-radius: 10px;
}
.videoTitleSpan {
  padding-left: 12px;
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
  background-color: #fd3939;
  opacity: 0.5;
}
.offlineVideoTime {
  color: #000;
}
.time {
  float: right;
  padding-right: 10px;
  font-size: 12px;
}
.offLineSpan {
  color: #fd3939;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 800;
}
</style>
