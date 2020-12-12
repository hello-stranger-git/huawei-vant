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
          active: require('@/assets/icon/shouye_active.png'),
          inactive: require('@/assets/icon/shouye.png')
        },
        {
          text: '客流',
          to: '/flow',
          active: require('@/assets/icon/keliu_active.png'),
          inactive: require('@/assets/icon/keliu.png')
        },
        {
          text: '点检',
          to: '/check',
          active: require('@/assets/icon/dianjian_active.png'),
          inactive: require('@/assets/icon/dianjian.png')
        },
        {
          text: '应用',
          to: '/app',
          active: require('@/assets/icon/yingyong_active.png'),
          inactive: require('@/assets/icon/yingyong.png')
        },
        {
          text: '我的',
          to: '/user',
          active: require('@/assets/icon/wode_active.png'),
          inactive: require('@/assets/icon/wode.png')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 未选中字体颜色
/deep/.van-tabbar-item .van-tabbar-item__text {
  font-size: 10px;
  color: #343434;
  opacity: 0.4;
}
// 选中字体颜色
/deep/.van-tabbar-item.van-tabbar-item--active .van-tabbar-item__text {
  color: #e60012;
  font-weight: bold;
  opacity: 1;
}
.van-tabbar-item__icon > img {
  width: 30px;
  height: 30px;
}
.van-tabbar {
  padding-bottom: 34px;
  height: 49px;
}
/deep/.van-tabbar-item__icon {
  margin-bottom: 0;
}
</style>
