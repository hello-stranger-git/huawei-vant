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
  </div>
</template>

<script>
import NavBarItem from '@/components/navBar/navBarItem.vue'
export default {
  data() {
    return {
      navBarItem: [
        {
          icon: 'iconbaojingshanshuo',
          title: '报警信息',
          menuCount: '1',
          color: '#f72525'
        },
        {
          icon: 'iconzhenggaishijian',
          title: '待整改',
          menuCount: '5',
          color: '#2735f3'
        },
        {
          icon: 'iconicon_kaoqin',
          title: '9人缺勤',
          menuCount: '9',
          color: ' #05d48f'
        },
        {
          icon: 'iconshangcheng',
          title: '商城',
          menuCount: '2',
          color: ' #ff4201'
        },
        {
          icon: 'icongongdan1',
          title: '工单',
          menuCount: '2',
          color: '#ff9400'
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
  padding: 20px 0 0px 0;
  margin: 10px 15px 0 15px;
  border-radius: 8px;
}
</style>
