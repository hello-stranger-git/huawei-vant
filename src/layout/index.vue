<template>
  <div>
    <Top></Top>
    <Notice></Notice>
    <router-view>

    </router-view>
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

<style lang="scss" scoped></style>
