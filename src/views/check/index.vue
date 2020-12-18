<template>
  <div class="check">
    <!-- tab选项区域 -->
    <van-tabs v-model="active">
      <!-- 点检 -->
      <van-tab title="点检" class="inUse ">
        <SpotCheck></SpotCheck>
      </van-tab>
      <!-- 考评 -->
      <van-tab title="考评" class="notUsed ">
        <Assess></Assess>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import SpotCheck from './components/spotCheck' // 点检
import Assess from './components/assess' // 考评
export default {
  components: {
    SpotCheck,
    Assess
  },
  data() {
    return {
      // tab选项区域默认选中项
      active: 0
    }
  }
}
</script>
<style lang="less" scoped>
.check {
  background-color: #eeeeee;
  padding-bottom: 95px;
}
// tab选项区域样式
.van-tabs {
  /deep/.van-tabs__wrap {
    height: 70px;
    // 去除选中下方横条
    .van-tabs__line {
      height: 0;
    }
  }
  // 未选中样式
  /deep/.van-tab {
    background-color: #efefef;
    .van-tab__text {
      font-size: 16px;
      color: #959595;
    }
  }
  // 选中样式
  /deep/.van-tab--active {
    background-color: #fff;
    .van-tab__text {
      color: #4a92ff;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
