<template>
  <div class="cameraOption">
    <!-- 摄像头button区域 -->
    <div
      :class="`cameraButton  ${defaultStyle ? 'defaultStyle' : ''}`"
      @click="camera"
    >
      <van-button v-for="(item, i) of cameraData" :key="i">{{
        item
      }}</van-button>
    </div>
    <!-- 滚动条 -->
    <!-- <div class="roll">
      <div class="roll-left"></div>
      <div class="roll-right"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    cameraData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      // 摄像头选项默认选中项
      defaultStyle: true
    }
  },
  methods: {
    // 清除摄像头默认选中属性
    camera() {
      this.defaultStyle = false
    }
  }
}
</script>
<style lang="less" scoped>
// 摄像头button区域样式
.cameraButton {
  display: flex;
  overflow: auto;
}
// 影藏滚动条
::-webkit-scrollbar {
  display: none;
}
.cameraButton {
  .van-button {
    flex-shrink: 0;
    font-size: 12px;
    height: auto;
    color: #959595;
    border: 1px solid #959595;
    opacity: 0.7;
    border-radius: 6px;
    margin-right: 16px;
    &:first-child {
      margin-left: 12px;
    }
  }
  .van-button--normal {
    padding: 8px;
  }
}
// 滚动条
// .roll {
//   position: relative;
//   width: 32px;
//   height: 3px;
//   top: 7px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   .roll-left,
//   .roll-right {
//     flex: 1;
//     background-color: #4a92ff;
//     border-radius: 30%;
//   }
//   .roll-right {
//     background-color: #efefef;
//   }
// }
// 按钮点击效果
.cameraButton {
  .van-button:hover {
    opacity: 1;
    color: #fff;
    background-color: #4a92ff;
    border: 1px solid #4a92ff;
  }
}
.defaultStyle > .van-button:first-child {
  opacity: 1;
  color: #fff;
  background-color: #4a92ff;
  border: 1px solid #4a92ff;
}
</style>
