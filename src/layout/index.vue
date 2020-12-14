<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <Notice></Notice>
    <router-view class="routerView"> </router-view>
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
.top {
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
}
</style>
