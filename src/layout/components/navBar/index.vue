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
export default {
  data() {
    return {
      navBarItem: [
        {
          icon: '0',
          title: '报警信息',
          menuCount: '1'
        },
        {
          icon: '1',
          title: '待整改',
          menuCount: '95'
        },
        {
          icon: '2',
          title: '9人缺勤',
          menuCount: '9'
        },
        {
          icon: '3',
          title: '商城',
          menuCount: '0'
        },
        {
          icon: '4',
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
    //////    flex: 1;
    background-color: #4a92ff;
    border-radius: 30%;
  }
  .right {
    background-color: #efefef;
  }
}
</style>
