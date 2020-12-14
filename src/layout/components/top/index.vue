<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img class="logo" :src="logoImage" />
          <span class="l-title">龙岗区华为体验店</span>
          <img :src="dropDown" />
        </div>
      </van-col>
      <van-col :span="10">
        <div class="right">
          <span class="username">兰宇贵</span>
          <van-icon :name="information" badge="9" size="24px" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoImage: require('@/assets/icon/top/huawei.png'), // 华为logo
      dropDown: require('@/assets/icon/top/dropDown.png'), // 下拉箭头
      information: require('@/assets/icon/top/information.png') // 消息图标
    }
  }
}
</script>
<style lang="less" scoped>
.van-row {
  padding: 49px 21px 0 12px;
}
.TopMessage {
  background-color: #fbfbfb;
  height: 88px;
  font-size: 14px;
  box-shadow: 0px 2px 6px #99999924;
}
// 左侧样式
.left {
  display: flex;
  align-items: center;
  .logo {
    width: 30px;
    height: 30px;
  }
  .l-title {
    padding: 0 3px 3px 4px;
  }
}

// 右侧样式
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  .username {
    margin-right: 30px;
    padding-top: 3px;
  }
  .van-info {
    top: 2px;
    right: 1px;
    background-color: #e30011;
  }
}
</style>
