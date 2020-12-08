<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon-prefix="iconfont iconshouye"
        icon="iconshouye"
        to="/"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        icon-prefix="iconfont iconqunfengjindiankeliuleixingfenxi"
        icon="iconqunfengjindiankeliuleixingfenxi"
        to="/flow"
        >客流</van-tabbar-item
      >
      <van-tabbar-item
        icon-prefix="iconfont iconshebeidianjian"
        icon="iconfont iconshebeidianjian"
        to="/check"
        >点检</van-tabbar-item
      >
      <van-tabbar-item
        icon-prefix="iconfont iconapplications"
        icon="iconfont iconapplications"
        to="/app"
        >应用</van-tabbar-item
      >
      <van-tabbar-item
        icon-prefix="iconfont iconwodeshezhi"
        icon="iconfont iconwodeshezhi"
        to="/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
