<template>
  <div class="spotCheck ">
    <div class="camera">
      <!-- 摄像头button区域 -->
      <CameraOption :cameraData="cameraData"></CameraOption>
      <!-- 视屏 -->
      <div class="video">
        <img :src="video" />
      </div>
      <!-- 日期选择区域 -->
      <div :class="`detaButton ${datestyle ? 'datestyle' : ''}`" @click="tade">
        <div class="calendar" @click="show = true">
          <img :src="calendar" />
        </div>
        <van-button v-for="(item, i) of detas" :key="i" type="default">{{
          item
        }}</van-button>
      </div>
      <!-- 日历开始 -->
      <van-calendar v-model="show" :show-confirm="false" @confirm="onConfirm" />
      <!-- 日历结束 -->
      <!-- 时间轴 -->
      <div class="timeAxis">
        <TimeAxis></TimeAxis>
      </div>
      <!-- 点检 -->
      <div class="checkBtn">
        <van-button to="CheckItem">点检</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import CameraOption from '@/components/check/cameraOption .vue' // 摄像头选项
import TimeAxis from '@/components/check/timeAxis.vue' // 时间轴

export default {
  components: {
    CameraOption,
    TimeAxis
  },
  data() {
    return {
      // tab选项区域默认选中项
      active: 0,
      // 摄像头数据
      cameraData: [
        '大厅-进门摄像头',
        '大厅-人脸识别摄像头',
        '大厅-进门摄像头',
        '摄像头1',
        '大厅摄像头背后1',
        '主厅摄像头背后6'
      ],
      // 时间
      datestyle: true,

      // 视屏数据
      video: require('@/assets/screenImage/videoImage.png'),
      // 日期选择数据
      detas: ['11-22', '11-23', '前天', '昨天', '零时', '今天', '现在'],
      date: '', // 接收选择日期
      show: false,
      calendar: require('@/assets/icon/check/rili.png')
    }
  },
  methods: {
    // 清除时间默认选中属性
    tade() {
      this.datestyle = false
    },
    // 日历事件
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    }
  }
}
</script>
<style lang="less" scoped>
.camera {
  padding-top: 16px;
  background-color: #fff;
  overflow: hidden;
}
// 视屏区域样式
.video {
  height: 206px;
  overflow: hidden;
  margin-top: 18px;
}
.video > img {
  width: 100%;
}
// 日期选择样式
.detaButton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding: 0 12px 0 9px;
  .calendar > img {
    width: 30px;
    height: 30px;
  }
  .van-button {
    font-size: 12px;
    width: 42px;
    height: 20px;
    border-radius: 4px;
    opacity: 0.7;
    color: #959595;
  }
  .van-button--normal {
    padding: 0;
  }
}
// 时间轴样式
.timeAxis {
  margin-top: 35px;
  background-color: #5c5c5c;
}
// 点检样式
.checkBtn {
  padding: 52px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkBtn > .van-button {
  width: 150px;
  height: 150px;
  background-color: #4a92ff;
  border-radius: 50%;
  box-shadow: 0px 0px 22px rgba(74, 146, 255, 0.51);
  color: #3c9dff;
  outline: none;
  font-size: 20px;
  color: #fff;
  letter-spacing: 5px;
}
// 按钮点击效果
.cameraButton,
.detaButton {
  .van-button:hover {
    opacity: 1;
    color: #fff;
    background-color: #4a92ff;
    border: none;
  }
}
.defaultStyle > .van-button:first-child,
.datestyle > .van-button:last-child {
  opacity: 1;
  color: #fff;
  background-color: #4a92ff;
  border: none;
}
</style>
