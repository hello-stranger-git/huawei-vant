<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img :src="logoImage" />
          <div>
            <span class="l-title">华为体验店</span>
            <van-icon name="arrow-down" />
          </div>
        </div>
      </van-col>
      <van-col :span="10" class="r-col">
        <div class="right">
          <span class="username">兰宇贵</span>
          <van-icon name="chat-o" badge="9" size="30" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoImage: require('@/assets/huawei.png')
    }
  }
}
</script>
<style lang="less" scoped>
.TopMessage {
  background-color: #fbfbfb;
  padding: 10px;
  box-shadow: 0px 2px 6px #99999924;
}
.left {
  display: flex;
  align-items: center;
  .van-icon {
    vertical-align: middle;
  }
}
.left > img {
  width: 50px;
  height: 45px;
}
.left .l-title {
  padding: 0 8px;
}
.r-col {
  height: 50px;
}
.right {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  position: relative;
  .username {
    margin-right: 12px;
  }
  .van-info {
    top: 5px;
    right: 5px;
  }
}
.messageIcon {
  font-size: 30px;
  vertical-align: middle;
  padding-left: 10px;
}
.r-message-count {
  width: 18px;
  height: 18px;
  background-color: #ff3300;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  position: absolute;
  right: 3px;
  top: 8px;
  color: #ffffff;
  font-size: 12px;
}
</style>
