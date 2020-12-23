<template>
  <div>
    <!-- 头部区域 -->
    <TopMessage :title="'安防'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <Menu :menuData="menuData"></Menu>
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
  data() {
    return {
      menuData: [
        {
          img: require('@/assets/icon/home/security/protection.png'),
          title: '布防中'
        },
        {
          img: require('@/assets/icon/home/security/home.png'),
          title: '系统留守'
        },
        {
          img: require('@/assets/icon/home/security/alarm.png'),
          title: '取消警报'
        },
        {
          img: require('@/assets/icon/home/security/timeClock.png'),
          title: '定时布/撤防'
        }
      ]
    }
  },
  created() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped></style>
