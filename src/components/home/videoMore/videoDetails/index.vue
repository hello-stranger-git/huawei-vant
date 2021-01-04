<template>
  <div class="videoDetails">
    <div class="videoItem" v-for="(item, index) in videoData" :key="index">
      <div class="video">
        <!-- 返回箭头 -->
        <span @click="onClickLeft">
          <img :src="jiantou" />
        </span>
        <!-- 视屏 -->
        <img :src="item.line ? video : videoOff" width="375px" height="205px" />
      </div>
      <div class="dataSelect">
        <!-- 日期选择区域 -->
        <div
          :class="`detaButton ${datestyle ? 'datestyle' : ''}`"
          @click="tade"
        >
          <div class="calendar" @click="show = true">
            <img :src="calendar" />
          </div>
          <van-button v-for="(item, i) of detas" :key="i" type="default">{{
            item
          }}</van-button>
        </div>
        <!-- 日历开始 -->
        <van-calendar
          v-model="show"
          :show-confirm="false"
          @confirm="onConfirm"
        />
        <!-- 日历结束 -->
      </div>
      <div class="timeAxisDiv">
        <TimeAxis></TimeAxis>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAxis from '@/components/check/timeAxis.vue' // 时间轴
export default {
  data() {
    return {
      quadrangle: require('@/assets/icon/home/video/quadrangle.png'),
      jiantou: require('@/assets/icon/home/video/jiantou.png'), //  返回图标

      videoData: [
        {
          videoImage: require('@/assets/videoImage/homeVideo1.png'),
          videoTitle: '大厅1',
          time: '16:22:30',
          // 是否在线
          line: true
        }
      ],
      // 视屏数据图片
      video: require('@/assets/screenImage/video.png'),
      // 离线图片
      videoOff: require('@/assets/screenImage/videoOff.png'),
      // 日期选择数据
      detas: ['11-22', '11-23', '前天', '昨天', '零时', '今天', '现在'],
      date: '', // 接收选择日期
      show: false,
      calendar: require('@/assets/icon/check/rili.png'),
      // 时间
      datestyle: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    // 清除时间默认选中属性
    tade() {
      this.datestyle = false
    },
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    },
    // 日历事件
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    }
  },
  components: {
    TimeAxis
  }
}
</script>

<style lang="less" scoped>
.videoDetails {
  // border: 1px solid red;
  height: 100%;
  background-color: #fff;
}
.videoItem {
  margin-bottom: 16px;
}

.video {
  background-color: #fff;
  height: 205px;
  position: relative;
  & > span {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 9px;
    left: 12px;
    img {
      width: 100%;
    }
  }
}

// 日期选择样式
.dataSelect {
  margin-top: 18px;
  background-color: #fff;
}
.detaButton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding: 0 12px 0 9px;
  .calendar > img {
    width: 30px;
    height: 30px;
  }
  .van-button {
    border: 1px solid #959595;
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

// 时间轴样式
.timeAxisDiv {
  padding-top: 26px;
  background-color: #fff;
  padding-bottom: 16px;
}
</style>
