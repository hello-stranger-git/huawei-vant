<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, i) of tabbarData" :key="i" :to="item.to">
        {{ item.text }}
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarData: [
        {
          text: '首页',
          to: '/',
          active: require('@/assets/icon/footer/shouye_active.png'),
          inactive: require('@/assets/icon/footer/shouye.png')
        },
        {
          text: '客流',
          to: '/flow',
          active: require('@/assets/icon/footer/keliu_active.png'),
          inactive: require('@/assets/icon/footer/keliu.png')
        },
        {
          text: '点检',
          to: '/check',
          active: require('@/assets/icon/footer/dianjian_active.png'),
          inactive: require('@/assets/icon/footer/dianjian.png')
        },
        {
          text: '应用',
          to: '/app',
          active: require('@/assets/icon/footer/yingyong_active.png'),
          inactive: require('@/assets/icon/footer/yingyong.png')
        },
        {
          text: '我的',
          to: '/user',
          active: require('@/assets/icon/footer/wode_active.png'),
          inactive: require('@/assets/icon/footer/wode.png')
        }
      ]
    }
  },
  computed: {},
  watch: {
    // 路由变化改变底部选中
    $route() {
      this.active = window.sessionStorage.getItem('activeTab')
        ? Number(window.sessionStorage.getItem('activeTab'))
        : 0
    }
  },
  created() {
    this.active = window.sessionStorage.getItem('activeTab')
      ? Number(window.sessionStorage.getItem('activeTab'))
      : 0
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
// 未选中字体颜色
/deep/.van-tabbar-item .van-tabbar-item__text {
  font-size: 10px;
  color: #343434;
  margin-top: 2px;
  opacity: 0.4;
}
// 选中字体颜色
/deep/.van-tabbar-item.van-tabbar-item--active .van-tabbar-item__text {
  color: #e60012;
  font-weight: bold;
  opacity: 1;
}
.van-tabbar-item__icon > img {
  width: 25px;
  height: 25px;
}
.van-tabbar {
  height: 49px;
}
/deep/.van-tabbar-item__icon {
  margin-bottom: 0;
}
</style>
