<template>
  <div class="navbar">
    <template v-for="(item, index) in navBarItem">
      <NavBarItem
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :menuCount="item.menuCount"
        :color="item.color"
      ></NavBarItem>
    </template>
    <div class="toggleNav">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import NavBarItem from '@/components/navBar/navBarItem.vue'
import alarm from '@/assets/icon/home/navbar/alarm.png'
import repair from '@/assets/icon/home/navbar/repair.png'
import absence from '@/assets/icon/home/navbar/absence.png'
import shop from '@/assets/icon/home/navbar/shop.png'
import order from '@/assets/icon/home/navbar/order.png'
export default {
  data() {
    return {
      navBarItem: [
        {
          icon: alarm,
          title: '报警信息',
          menuCount: '100'
        },
        {
          icon: repair,
          title: '待整改',
          menuCount: '95'
        },
        {
          icon: absence,
          title: '9人缺勤',
          menuCount: '9'
        },
        {
          icon: shop,
          title: '商城',
          menuCount: '0'
        },
        {
          icon: order,
          title: '工单',
          menuCount: '2'
        }
      ]
    }
  },
  components: {
    NavBarItem
  }
}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  background-color: #fff;
  padding: 18px 10px 0px 10px;
  position: relative;
}
.toggleNav {
  position: absolute;
  width: 32px;
  height: 3px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  .left,
  .right {
    flex: 1;
    background-color: #4a92ff;
    border-radius: 30%;
  }
  .right {
    background-color: #efefef;
  }
}
</style>
