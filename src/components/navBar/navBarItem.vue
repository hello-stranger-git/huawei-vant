<template>
  <div class="navBarItem">
    <div class="navBarItemIcon">
      <van-icon :name="iconArr[icon]" />
      <!-- <div class="messageCount">{{ menuCount }}</div> -->
      <div :class="menuCount >= 10 ? 'moreMessage' : 'messageCount'">
        {{ menuCount }}
      </div>
    </div>
    <div class="navBarItemTitle">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import alarm from '@/assets/icon/navAlarm.png'
import repair from '@/assets/icon/navRepair.png'
import absence from '@/assets/icon/navAbsence.png'
import shop from '@/assets/icon/navShop.png'
import order from '@/assets/icon/navOrder.png'
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    menuCount: {
      type: String
    }
  },
  data() {
    return {
      iconArr: [alarm, repair, absence, shop, order],
      alarm
    }
  }
}
</script>

<style lang="less" scoped>
.navBarItem {
  width: 50px;
  // font-size: 24px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  position: relative;
  margin: auto;
  .navBarItemIcon {
    border-radius: 10px;
    height: 50px;
  }
  .messageCount {
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    right: -5px;
    top: -5px;
    background-color: #ff3300;
    text-align: center;
    border-radius: 50%;
    position: absolute;
  }
  .moreMessage {
    width: 20px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    right: -9px;
    top: -5px;
    background-color: #ff3300;
    text-align: center;
    border-radius: 4px;
    position: absolute;
  }
  .navBarItemTitle {
    font-size: 12px;
    height: 17px;
    line-height: 17px;
    padding-top: 6px;
    padding-bottom: 19px;
    font-weight: 700;
    text-align: center;
    color: #303133;
  }
}

.van-icon__image {
  font-size: 50px;
}
</style>
