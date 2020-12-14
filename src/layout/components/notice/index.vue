<template>
  <div class="notice" style="padding-top:88px">
    <van-notice-bar
      color="#fff"
      background="#e60012"
      left-icon="volume-o"
      mode="closeable"
      :scrollable="false"
      @close="closeNotice"
      v-show="showNotice"
    >
      <span
        >待整改， 厅内卫生-1
        厅内地面、桌面有垃圾，未整改，良好的作风，严格的纪律</span
      >
    </van-notice-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotice: true
    }
  },
  methods: {
    closeNotice() {
      this.showNotice = false
    }
  }
}
</script>

<style lang="less" scoped>
div.notice {
  .van-notice-bar {
    height: 46px;
    font-size: 12px;
    line-height: 17px;
    background-color: #e60012;
    color: #ffffff;
    text-align: center;
    padding: 0;
    /deep/.van-notice-bar__right-icon {
      font-size: 12px;
      padding-right: 20px;
    }
    /deep/.van-notice-bar__left-icon {
      font-size: 20px;
      padding-right: 34px;
      padding-left: 17px;
      position: relative;
    }
    /deep/.van-notice-bar__left-icon::after {
      content: '';
      height: 24px;
      border: 1px solid #ae000e;
      display: inline-block;
      position: absolute;
      right: 19px;
      top: -2px;
    }
  }
}
</style>
