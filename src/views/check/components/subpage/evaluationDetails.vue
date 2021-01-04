<template>
  <!-- 考评详情 -->
  <div class="evaluationDetails">
    <!-- 视屏 -->
    <Video :video="video1" />
    <!-- 店名 -->
    <div class="storeName">
      <h3>重庆石桥铺雨林商都店</h3>
      <span>100</span>
      <p>考评总分：100</p>
    </div>
    <!-- 合格项 -->
    <ul>
      <li>
        <span class="colorRed">34</span>
        <p>合格</p>
      </li>
      <li>
        <span>0</span>
        <p>不合格</p>
      </li>
      <li>
        <span>0</span>
        <p>不适用</p>
      </li>
    </ul>
    <!-- 考评详情 -->
    <div class="details">
      <div>
        <p>巡店人：OPPO体专店</p>
        <p>整改：不需要整改</p>
      </div>
    </div>
    <!-- 页尾按钮区域 -->
    <div class="footer">
      <div>
        <van-button>查看详情</van-button>
        <van-button :to="{ name: 'Check' }">继续巡店</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Video from '@/components/video' // 视屏区域
export default {
  components: {
    Video
  },
  data() {
    return {
      // 视屏
      video1: require('@/assets/videoImage/videoTest.png')
    }
  }
}
</script>
<style lang="less" scoped>
.evaluationDetails {
  background-color: #fff;
  height: 100%;
}
.colorRed {
  color: #e60012;
}
// 店名区域样式
.storeName {
  padding: 24px 0 14px;
  text-align: center;
  h3 {
    font-size: 16px;
  }
  span {
    display: block;
    margin-top: 10px;
    font-size: 24px;
    line-height: 28px;
    color: #e60012;
  }
  p {
    margin-top: 4px;
    font-size: 12px;
    color: #141414;
  }
}
// 合格区域样式
ul {
  border-top: 12px solid #efefef;
  padding: 20px 40px 16px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  & > li {
    span {
      font-size: 18px;
      line-height: 25px;
    }
    p {
      line-height: 17px;
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
// 考评详情区域样式
.details > div {
  background-color: #fff;
  border-top: 12px solid #efefef;
  padding: 26px 40px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    color: #141414;
  }
}
// 页尾按钮区域样式
.footer {
  position: absolute;
  width: 100%;
  bottom: 24px;
  & > div {
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    .van-button {
      width: 100px;
      height: 39px;
      background-color: #ff7b40;
      color: #fff;
      border-radius: 23px;
      &:nth-child(2) {
        background-color: #4a92ff;
      }
    }
  }
}
</style>
