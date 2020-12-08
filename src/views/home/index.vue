<template>
  <div class="home">
    <NavBar></NavBar>
    <!-- 首页 -->
  </div>
</template>

<script>
import NavBar from '@/layout/components/navBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #eee;
}
</style>
