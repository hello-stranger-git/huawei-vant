<template>
  <div>
    <Top></Top>
    <Notice></Notice>
    <NavBar></NavBar>
    <router-view>

    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/layout/components/footer'
import NavBar from '@/layout/components/navBar'
import Notice from '@/layout/components/notice'
import Top from '@/layout/components/top'
export default {
  components: {
    Footer,
    NavBar,
    Notice,
    Top
  }
}
</script>

<style lang="scss" scoped></style>
