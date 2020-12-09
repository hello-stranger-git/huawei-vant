<template>
  <div class="check">
    <NavBar></NavBar>
    <!-- 摄像头button区域 -->
    <div class="camera">
      <div
        :class="`cameraButton  ${defaultStyle ? 'defaultStyle' : ''}`"
        @click="btn"
      >
        <van-button v-for="(item, i) of cameraData" :key="i">{{
          item
        }}</van-button>
      </div>
      <!-- 视屏 -->
      <div class="video">
        <img :src="video" />
      </div>
      <!-- 日期选择区域 -->
      <div class="detaButton">
        <i class="iconfont iconxiala-yuan-tianchong" />
        <van-button v-for="(item, i) of detas" :key="i" type="default">{{
          item
        }}</van-button>
      </div>
      <!-- 时间轴 -->
      <div class="timeAxis">
        <TimeAxis></TimeAxis>
      </div>
      <div class="checkBtn">
        <van-button to="CheckItem">点检</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/layout/components/navBar'
import TimeAxis from '@/components/check/timeAxis.vue' // 时间轴
export default {
  components: {
    NavBar,
    TimeAxis
  },
  data() {
    return {
      // tab选项默认选中项
      defaultStyle: true,
      // 摄像头数据
      cameraData: [
        '大厅摄像头',
        '主厅摄像头',
        '副厅摄像头',
        '摄像头1',
        '大厅摄像头背后1',
        '主厅摄像头背后6'
      ],
      // 视屏数据
      video: require('@/assets/screenImage/videoImage.png'),
      detas: ['11-22', '11-23', '11-24', '前天', '昨天', '今天', '现在']
    }
  },
  methods: {
    // 清除默认选中属性
    btn() {
      this.defaultStyle = false
    }
  }
}
</script>

<style lang="less" scoped>
.check {
  background-color: #eeeeee;
}
.camera {
  margin: 15px 15px 0;
  padding-top: 15px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
// 摄像头button区域样式
.cameraButton {
  display: flex;
  overflow-y: scroll;
}
.cameraButton::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.cameraButton > .van-button {
  flex-shrink: 0;
  font-size: 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.van-button:hover {
  border-bottom: 0;
  color: #409eff;
}
.defaultStyle > .van-button:first-child {
  border-bottom: 0;
  color: #409eff;
}

// 视屏区域样式
.video {
  margin: 15px 0;
}
.video > img {
  width: 100%;
}
// 日期选择样式
.detaButton {
  display: flex;
  justify-content: space-between;
}
.detaButton > .van-button {
  font-size: 12px;
  padding: 0 8px;
  height: 32px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

// 阿里图标样式
.iconxiala-yuan-tianchong {
  color: #4490d2;
  font-size: 28px;
  margin-left: 9px;
}
// 时间轴样式
.timeAxis {
  margin: 40px 0 62px;
  background-color: #777777;
}
// 点检样式
.checkBtn {
  background-color: #eff2f5;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkBtn > .van-button {
  width: 120px;
  height: 120px;
  // border: 1px solid red;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #d4cdcd;
  color: #3c9dff;
  outline: none;
  font-size: 30px;
  color: #3c9dff;
}
</style>
