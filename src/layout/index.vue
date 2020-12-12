<template>
  <div>
    <Top></Top>
    <Notice></Notice>
    <router-view> </router-view>
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
</style>
