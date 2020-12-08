<template>
  <div class="module">
    <van-row>
      <van-col span="24">
        <van-col span="12">
          <i :class="['iconfont', icon]"></i>
          <span class="title">{{ title }}</span>
        </van-col>
        <van-col span="12" class="status">{{ status }}</van-col>
      </van-col>
      <van-col span="24">
        <slot name="context"></slot>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    status: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.module {
  font-size: 18px;
  padding: 10px 15px;
  .status {
    text-align: right;
    font-size: 16px;
  }
  .van-panel__header-value {
    color: black;
  }
  .iconfont {
    color: #d04e50;
    font-size: 14px;
  }
  .title {
    margin-left: 10px;
    font-weight: 600;
  }
}
</style>
