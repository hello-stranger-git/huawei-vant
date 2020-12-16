<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img class="logo" :src="logoImage" />
          <span class="l-title" @click="show = true">{{ currentStore }}</span>
          <img :src="dropDown" @click="show = true" />
        </div>
      </van-col>
      <van-col :span="10">
        <div class="right">
          <span class="username">兰宇贵</span>
          <van-icon :name="information" badge="9" size="24px" />
        </div>
      </van-col>
    </van-row>
    <van-popup v-model="show" round position="bottom" class="qqq">
      <div class="cancel"><span @click="show = false">取消</span></div>
      <!-- 遮罩下的店铺 -->
      <div class="selecteStore">
        <div
          class="storeItem"
          v-for="(item, i) in storesArr"
          :key="i"
          @click="changeStore(item)"
        >
          {{ item }}
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoImage: require('@/assets/icon/top/huawei.png'), // 华为logo
      dropDown: require('@/assets/icon/top/dropDown.png'), // 下拉箭头
      information: require('@/assets/icon/top/information.png'), // 消息图标
      currentStore: '龙岗区华为体验店',
      show: false,
      storesArr: [
        '南山区华为体验店',
        '龙华区华为体验店',
        '龙岗区华为体验店',
        '福田区华为体验店',
        '保安区华为体验店',
        '盐田区华为体验店',
        '南山区华为体验店',
        '龙华区华为体验店',
        '龙岗区华为体验店',
        '福田区华为体验店',
        '宝安区华为体验店',
        '盐田区华为体验店'
      ]
    }
  },
  methods: {
    changeStore(item) {
      this.currentStore = item
      this.show = false
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
.cancel {
  height: 54px;
  background-color: #fff;
  position: relative;
  span {
    position: absolute;
    right: 24px;
    top: 14px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    color: rgba(20, 20, 20, 0.5);
  }
}
.selecteStore {
  margin-bottom: 20px;
  max-height: 320px;
  overflow: auto;
  .storeItem {
    text-align: center;
    font-size: 16px;
    height: 58px;
    line-height: 58px;
    color: #141414;
    background-color: #fff;
  }
}
</style>
