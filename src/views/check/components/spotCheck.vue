<template>
  <div class="spotCheck ">
    <div class="camera">
      <!-- 视屏 -->
      <div class="video">
        <!-- 返回按钮 -->
        <div class="return" @click="backOff">
          <img :src="jiantou" />
        </div>
        <!-- 视屏 -->
        <img :src="video" />
      </div>
      <!-- 摄像头button区域 -->
      <CameraOption :cameraData="cameraData"></CameraOption>
      <!-- 日期选择区域 -->
      <div :class="`detaButton ${datestyle ? 'datestyle' : ''}`" @click="tade">
        <div class="calendar" @click="show = true">
          <img :src="calendar" />
        </div>
        <!-- 日期按钮 -->
        <van-button
          v-for="(item, i) of detas"
          :key="i"
          type="default"
          @click="changeDate(i)"
          :class="{ activeDate: i === activeDateIndex ? true : false }"
          >{{ item }}</van-button
        >
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
      video: require('@/assets/screenImage/videoImage.png'), // 视屏
      jiantou: require('@/assets/icon/customerInfo/jiantou.png'), // 返回箭头图标
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
      // 日期选择数据
      detas: [],
      date: '', // 接收选择日期
      show: false,
      calendar: require('@/assets/icon/check/rili.png'),
      activeDateIndex: 0
    }
  },
  created() {
    this.onConfirm(new Date())
  },
  methods: {
    changeDate(i) {
      this.activeDateIndex = i
    },
    // 清除时间默认选中属性
    tade() {
      this.datestyle = false
    },
    // 日历事件
    onConfirm(date) {
      this.activeDateIndex = 0
      this.show = false
      const time = new Date(date)
      console.log(date.getTime())
      console.log(date.toLocaleString())
      this.detas = []
      for (let i = 0; i < 7; i++) {
        const month = new Date(Number(time) - 86400000 * i).getMonth() + 1
        const day = new Date(Number(time) - 86400000 * i).getDate()
        this.detas.push(month + '-' + day)
      }
    },
    // 触发事件返回上一页
    backOff() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.spotCheck {
  height: 100%;
  background-color: #fff;
}
.camera {
  // padding-top: 16px;
  background-color: #fff;
  overflow: hidden;
}
// 摄像头button区域样式
.cameraOption {
  margin: 24px 0 19px;
  // border: 1px solid red;
}
// 视屏区域样式
.video {
  height: 206px;
  overflow: hidden;
  position: relative;
  .return {
    position: absolute;
    top: 7px;
    left: 7px;
    img {
      width: 26px;
      height: 26px;
    }
  }
}
.video > img {
  width: 100%;
}
// 日期选择样式
.detaButton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 18px;
  padding: 0 12px 0 9px;
  .activeDate {
    opacity: 1;
    color: #fff !important;
    background-color: #4a92ff;
    border: none;
  }
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
  padding: 102px 0;
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
.defaultStyle > .van-button:first-child {
  opacity: 1;
  color: #fff;
  background-color: #4a92ff;
  border: none;
}
</style>
