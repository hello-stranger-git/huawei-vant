<template>
  <div class="videoMore">
    <!-- 头部区域 -->
    <van-nav-bar
      title="视频管理"
      left-arrow
      @click-left="onClickLeft"
      :right-icon="quadrangle"
    >
      <!-- <template #right>
        <img :src="quadrangle" width="24px" height="24px" />
      </template> -->
    </van-nav-bar>

    <div class="videoItem" v-for="(item, index) in videoData" :key="index">
      <div class="top">
        <div class="title">
          <div class="point" :class="item.line ? 'on' : 'off'"></div>
          <span> {{ item.videoTitle }}</span>
        </div>
        <div class="time">
          <span>{{ item.time }}</span>
        </div>
      </div>

      <div class="video" @click="videoDetails(item.id)">
        <img :src="item.line ? video : videoOff" width="375px" height="205px" />
      </div>
      <div class="dataSelect">
        <!-- 日期选择区域 -->
        <!-- <div
          :class="`detaButton ${datestyle ? 'datestyle' : ''}`"
          @click="tade"
        >
          <div class="calendar" @click="show = true">
            <img :src="calendar" />
          </div>
          <van-button v-for="(item, i) of detas" :key="i" type="default">{{
            item
          }}</van-button>
        </div> -->
        <!-- 日历开始 -->
        <!-- <van-calendar
          v-model="show"
          :show-confirm="false"
          @confirm="onConfirm"
        /> -->
        <!-- 日历结束 -->
      </div>
      <!-- <div class="timeAxisDiv">
        <TimeAxis></TimeAxis>
      </div> -->
    </div>
  </div>
</template>

<script>
// import TimeAxis from '@/components/check/timeAxis.vue' // 时间轴
export default {
  data() {
    return {
      quadrangle: require('@/assets/icon/home/video/quadrangle.png'),
      videoData: [],
      // 视屏数据图片
      video: require('@/assets/screenImage/videoImage.png'),
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
    // tade() {
    //   this.datestyle = false
    // },
    // onConfirm(date) {
    //   this.show = false
    //   this.date = this.formatDate(date)
    // },
    // // 日历事件
    // formatDate(date) {
    //   return `${date.getMonth() + 1}/${date.getDate()}`
    // },
    // 触发跳转至视屏详情页
    videoDetails(e) {
      console.log('123' + e)
      this.$router.push({ name: 'VideoDetails', query: { id: e } })
    }
  },
  components: {
    // TimeAxis
  },
  mounted() {
    this.videoData = this.$route.query
    console.log(this.videoData)
  }
}
</script>

<style lang="less" scoped>
.videoMore {
  background-color: #efefef;
}
.videoItem {
  margin-bottom: 16px;
}
// 头部样式
/deep/.van-nav-bar {
  border: 0;
  padding: 5px 0;
  .van-nav-bar__content {
    height: auto;
    line-height: 25px;
  }
  .van-nav-bar__left {
    .van-icon {
      font-size: 23px;
      color: #141414;
    }
  }
  .van-nav-bar__title {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  background-color: #fff;
  .title {
    .on,
    .off {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      opacity: 1;
      display: inline-block;
      margin-left: 12px;
      margin-right: 6px;
    }
    .on {
      background: #4a92ff;
    }
    .off {
      background-color: #e60012;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: #000000;
    }
  }

  .time {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    margin-right: 12px;
  }
}
.video {
  background-color: #fff;
  height: 205px;
  padding-top: 10px;
}

// // 日期选择样式
// .dataSelect {
//   background-color: #fff;
// }
// .detaButton {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 12px;
//   padding: 0 12px 0 9px;
//   .calendar > img {
//     width: 30px;
//     height: 30px;
//   }
//   .van-button {
//     border: 1px solid #959595;
//     font-size: 12px;
//     width: 42px;
//     height: 20px;
//     border-radius: 4px;
//     opacity: 0.7;
//     color: #959595;
//   }
//   .van-button--normal {
//     padding: 0;
//   }
// }

// // 按钮点击效果
// .cameraButton,
// .detaButton {
//   .van-button:hover {
//     opacity: 1;
//     color: #fff;
//     background-color: #4a92ff;
//     border: none;
//   }
// }
// .defaultStyle > .van-button:first-child,
// .datestyle > .van-button:last-child {
//   opacity: 1;
//   color: #fff;
//   background-color: #4a92ff;
//   border: none;
// }

// // 时间轴样式
// .timeAxisDiv {
//   padding-top: 26px;
//   background-color: #fff;
//   padding-bottom: 16px;
// }
</style>
