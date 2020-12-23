<template>
  <div class="videoImage">
    <!-- 点检屏幕区域 -->
    <div class="screen">
      <img :src="screen" />
    </div>
    <!-- 操作区域 -->
    <van-row>
      <van-col span="2" offset="1">
        <img :src="huaBiIcon" />
      </van-col>
      <van-col span="2" offset="1">
        <img :src="xuanKuangIcon" />
      </van-col>
      <van-col span="2" offset="15">
        <img :src="cheXiaoIcon" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screen: require('@/assets/screenImage/screen1.png'), // 点检图
      huaBiIcon: require('@/assets/icon/check/huabi.png'), // 画笔图标
      xuanKuangIcon: require('@/assets/icon/check/kuang.png'), // 选框图标
      cheXiaoIcon: require('@/assets/icon/check/chexiao.png') // 撤销图标
    }
  }
}
</script>
<style lang="less" scoped>
.videoImage {
  background-color: #fff;
}
// 点检屏幕样式
.screen {
  height: 206px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
// 操作区域样式
.van-row {
  background-color: #fff;
  padding: 16px 0;
  .van-col {
    width: 24px;
    height: 24px;
    img {
      width: 100%;
    }
  }
}
</style>
