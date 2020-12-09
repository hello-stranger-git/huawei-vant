<template>
  <div class="block">
    <div class="timeScale" ref="timeScale"></div>
    <div class="mask"></div>
    <span class="timeSpan">{{ time }}</span>
    <div class="hiddenScroll">
      <div class="timeAxis" ref="timeAxis">
        <img :src="timeAxis" ref="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeAxis: require('@/assets/timeAxis.png'),
      time: ''
    }
  },
  mounted() {
    // 给滚动条注册监听事件
    window.addEventListener('scroll', this.handleScroll, true)
    this.handleScroll()
  },
  destroyed() {
    // 销毁scroll事件
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    // 时间轴滑动事件
    handleScroll() {
      // 获取指针到父级元素最左边的距离
      const timeScale = this.$refs.timeScale.offsetLeft - 2
      // 获取元素滚动的距离
      const timeAxisScroll = this.$refs.timeAxis.scrollLeft - 30
      // 获取时间轴的宽度
      // const timeAxisWidth = this.$refs.img.clientWidth - 60
      // 时间轴划出去距离指针的距离,总共分钟数
      const timeWidth = timeScale + timeAxisScroll
      let hour = parseInt(timeWidth / 60)
      let minute = timeWidth + 4 - hour * 60

      // 具体小时
      hour = minute > 59 ? hour + 1 : hour
      // 判段minute显示是否大于60
      minute = minute > 59 ? minute - 60 : minute

      // minute补零
      minute = minute > 9 ? minute : '0' + minute

      // hour补零
      hour = hour > 9 ? hour : '0' + hour

      // 平凑时间,并且进行补零
      this.time = `${hour}:${minute}`
    }
  }
}
</script>

<style lang="less" scoped>
.block {
  position: relative;
  //竖线
  .timeScale {
    position: absolute;
    height: 58px;
    background-color: #0000007d;
    right: 50%;
    border-right: 2px solid #3299ff;
  }
  .hiddenScroll {
    height: 58px;
    overflow: hidden;
    //时间轴图片div
    .timeAxis {
      overflow-y: auto;
    }
  }
  .mask {
    position: absolute;
    width: calc(50% - 3px);
    height: 58px;
    background-color: #0000007d;
    right: 50%;
    border-right: 2px solid #3299ff;
  }

  .timeSpan {
    position: absolute;
    color: #61afff;
    left: 50%;
    transform: translateX(-50%);
    top: -25px;
    font-size: 12px;
  }
}
</style>
