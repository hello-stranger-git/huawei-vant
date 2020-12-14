<!--首页每个模块的模板-->
<template>
  <div class="module">
    <van-row>
      <van-col span="24" class="top">
        <van-col span="12">
          <img
            v-if="icon"
            class="icon"
            :src="icon"
            width="24px"
            height="24px"
          />
          <span class="title">{{ title }}</span>
          <template v-if="smallTitle">
            <span class="smallTitle">{{ smallTitle }}</span>
          </template>
        </van-col>
        <van-col span="12" class="status" v-if="nav == 'home'">
          <span class="more">更多</span>
          <img :src="arrowIcon" />
        </van-col>
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
      // 图标
      type: String
    },
    title: {
      // 标题
      type: String
    },
    smallTitle: {
      // 在标题后面是否添加小标题
      type: String,
      default: ''
    },
    nav: {
      // 通过导航路由，判断是否显示更多
      type: String,
      default: ''
    }
  },
  data() {
    return {
      arrowIcon: require('@/assets/icon/arrow.png')
    }
  }
}
</script>

<style lang="less" scoped>
.module {
  border-radius: 10px;
  padding: 12px 12px 16px 12px;
  .status {
    text-align: right;
  }
  .top {
    display: flex;
    align-items: center;
    .smallTitle {
      font-size: 12px;
      color: #000;
      opacity: 0.5;
      font-weight: 300;
      vertical-align: middle;
      margin-left: 2px;
    }
  }
  .icon {
    vertical-align: middle;
  }
  .title {
    margin-left: 6px;
    color: #141414;
    font-size: 18px;
    font-weight: 900;
    vertical-align: middle;
  }
  .more {
    font-size: 12px;
    font-weight: 300;
    color: #000;
    opacity: 0.5;
  }
}
</style>
