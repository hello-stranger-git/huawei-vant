<template>
  <div class="navBarItem">
    <div class="navBarItemIcon" :style="{ backgroundColor: color }">
      <i :class="['icon', icon]"></i>
      <div class="messageCount">{{ menuCount }}</div>
    </div>
    <div class="navBarItemTitle">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
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
    },
    color: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.navBarItem {
  width: 50px;
  font-size: 24px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  position: relative;
  margin: auto;
  .navBarItemIcon {
    border-radius: 50%;
  }
  .messageCount {
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    right: -5px;
    top: -5px;
    background-color: #ff3300;
    text-align: center;
    border-radius: 50%;
    position: absolute;
  }

  .navBarItemTitle {
    font-size: 12px;
    text-align: center;
    color: #303133;
  }
}

.icon {
  font-size: 28px;
}
</style>
