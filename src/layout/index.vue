<template>
  <div>
    <div class="top">
      <Top></Top>
      <Notice></Notice>
    </div>
    <router-view class="routerView"> </router-view>
    <div class="height"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/layout/components/footer'
import Notice from '@/layout/components/notice'
import Top from '@/layout/components/top'
export default {
  components: {
    Footer,
    Notice,
    Top
  }
}
</script>

<style lang="less" scoped>
.height {
  height: 95px;
  background-color: #eee;
}
.top {
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
}
.routerView {
  margin-top: 134px;
}
</style>
