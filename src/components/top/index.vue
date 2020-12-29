<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img @click="upPage" class="backOff " :src="backOff" />
          <span class="l-title">{{ title }}</span>
        </div>
      </van-col>
      <van-col :span="10">
        <div class="right">
          <span class="username">兰宇贵</span>
          <van-icon @click="news" :name="information" badge="9" size="24px" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      information: require('@/assets/icon/top/information.png'), // 消息图标
      backOff: require('@/assets/icon/check/huitui.png'), // 回退图标
      show: false
    }
  },
  methods: {
    upPage() {
      if (this.path) {
        this.$router.push({
          name: this.path
        })
      } else {
        this.$router.go(-1)
      }
    },
    // 点击跳转至消息页面
    news() {
      this.$router.push({ name: 'News' })
    }
  }
}
</script>
<style lang="less" scoped>
.van-row {
  padding: 5px 21px 0 12px;
  width: 100%;
}
.TopMessage {
  display: flex;
  background-color: #fff;
  height: 44px;
  font-size: 14px;
  position: fixed;
  align-items: center;
  top: 0px;
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
