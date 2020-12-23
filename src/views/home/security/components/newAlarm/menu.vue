<template>
  <!-- 菜单栏 -->
  <div class="menu">
    <div class="statusTitle">
      <span>当前状态：系统布防中</span>
    </div>
    <div class="menuNav">
      <div v-for="(item, index) in menuData" :key="index" class="menuItem">
        <img :src="item.img" width="50px" height="50px" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style lang="less" scoped>
.menu {
  background-color: #fff;
  padding: 20px 20px 14px 20px;
  .statusTitle {
    span {
      font-size: 12px;
      font-weight: 400;
      color: #343434;
    }
  }
  .menuNav {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .menuItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>
