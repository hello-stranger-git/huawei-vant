<template>
  <div class="navBarItem" @click="changeRouter(to)">
    <div class="navBarItemIcon">
      <van-icon :name="icon" />
      <div
        :class="menuCount >= 10 ? 'moreMessage' : 'messageCount'"
        v-if="menuCount >= 1"
      >
        {{ menuCount > 99 ? '99+' : menuCount }}
      </div>
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
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {}
  },
  methods: {
    changeRouter(to) {
      if (to.length > 1) {
        this.$router.push(to)
      }
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
  // margin: auto;
  margin: 0 10px;
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
    width: 24px;
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
    text-align: center;
    color: #303133;
  }
}

.van-icon__image {
  font-size: 50px;
}
</style>
