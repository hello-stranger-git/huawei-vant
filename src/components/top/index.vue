<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img @click="upPage" class="backOff " :src="backOff" />
          <span class="l-title">{{ currentStore }}</span>
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
      information: require('@/assets/icon/top/information.png'), // 消息图标
      backOff: require('@/assets/icon/check/huitui.png'), // 回退图标
      currentStore: '龙岗区华为体验店',
      show: false
    }
  },
  methods: {
    upPage() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.van-row {
  padding: 49px 21px 0 12px;
}
.TopMessage {
  background-color: #fff;
  height: 88px;
  font-size: 14px;
  box-shadow: 0px 2px 6px #99999924;
  position: fixed;
  width: 100%;
  z-index: 2;
}
// 左侧样式
.left {
  display: flex;
  align-items: center;
  .backOff {
    width: 25px;
    height: 25px;
  }
  .l-title {
    padding: 0 3px 3px 6px;
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
