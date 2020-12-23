<template>
  <div class="about">
    <!-- 头部区域 -->
    <van-nav-bar title="关于我们" left-arrow @click-left="onClickLeft" />
    <!-- logo区域 -->
    <div class="logo">
      <img :src="huaweiLogo" />
      <p>乐店客·好望（1.4.3）</p>
    </div>
    <!-- 文本简介区域 -->
    <div class="synopsis">
      <p>
        深圳前海托克马克科技有限公司
        是基于物联网的店铺新零售数据服务商，在安防、销售、管理、大数据和普惠金融等领域为店铺提供解决方案和产品服务，致力于帮助垂直行业商家及中小商家精准营销。
      </p>
      <p>
        公司开发的 乐店客TM
        系统，使用物联网传感器、监控视频作为数据入口，通过AI数据分析，实现全方位的店铺安全服务、多维度销售引流、员工管理、进销存管理等，让店铺快速、低成本地向新零售转型。通过强大的数据平台和海量资源，持续为商铺创造价值，赋能线下商铺经营转型，打通线上线下店铺数据，建立起完整的店铺新零售
      </p>
    </div>
    <!-- 页尾版权区域 -->
    <div class="copyright">
      <p>乐客店 版权所有</p>
      <p>Copyright©2018-2019 CNQQA.All Rights Rsesrvd.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      huaweiLogo: require('@/assets/icon/user/about/huaweiLogo.png')
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.about {
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 46px;
  // height: 100%;
  // 头部样式
  /deep/.van-nav-bar {
    padding-top: 55px;
    .van-nav-bar__content {
      height: auto;
      line-height: 25px;
    }
    .van-nav-bar__left {
      .van-icon {
        font-size: 23px;
        color: #141414;
      }
    }
    .van-nav-bar__title {
      font-size: 18px;
      font-weight: 500;
      color: #000;
    }
  }
  .van-hairline--bottom::after {
    border: 0;
  }
  // logo区域样式
  .logo {
    text-align: center;
    margin-top: 48px;
    img {
      width: 104px;
      height: 104px;
    }
    p {
      font-size: 18px;
      color: #e60012;
      font-weight: bold;
      line-height: 25px;
      margin-top: 6px;
    }
  }
  // 简介区域样式
  .synopsis {
    width: 298px;
    height: 334px;
    margin: 0 auto;
    margin-top: 48px;
    p {
      text-indent: 2em;
      font-size: 12px;
      line-height: 25px;
      color: #141414;
    }
  }
  // 页尾版权样式
  .copyright {
    margin-top: 85px;
    p {
      font-size: 10px;
      margin-top: 4px;
      text-align: center;
      color: #b9b9b9;
      line-height: 14px;
    }
  }
}
</style>
