<template>
  <div>
    <!-- 头部区域 -->
    <TopMessage :title="'安防'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <Menu></Menu>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import Menu from '@/views/home/security/components/newAlarm/menu.vue'

export default {
  components: {
    TopMessage,
    Notice,
    Menu
  },

  created() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped></style>
