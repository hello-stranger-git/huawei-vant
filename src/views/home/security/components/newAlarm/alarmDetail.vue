<template>
  <div class="bgc">
    <!-- 头部区域 -->
    <TopMessage :title="'安防'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <Menu></Menu>
    <div class="contain">
      <!-- 标题 -->
      <div class="title">
        <van-row>
          <van-col span="19"
            ><div class="bold">201周界报警（周界防区报警，有声）</div></van-col
          >
          <van-col span="5"><div class="time">01:06:58</div></van-col>
        </van-row>
      </div>
      <!-- 视频 -->
      <div class="video">
        <img :src="img" alt="" />
      </div>
      <!-- 按钮 -->
      <div class="buttons">
        <div class="action">
          <span class="button">处理</span>
          <van-icon :name="arrow" />
        </div>
        <div class="ignore">忽略</div>
      </div>
      <!-- 信息 -->
      <div class="info">
        <van-row>
          <van-col>01:10:58</van-col>
          <van-col>店长张鹏已处理</van-col>
        </van-row>
        <van-row>
          <van-col span="4">01:09:07</van-col>
          <van-col span="20">托克马克接警平台 警情：闯入 通知店长核实</van-col>
        </van-row>
        <van-row>
          <van-col span="4">01:06:24</van-col>
          <van-col span="20">收到周界报警</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import Menu from '@/views/home/security/components/newAlarm/menu.vue'
import img from '@/assets/icon/home/security/alarmDetailPic.png'
import arrow from '@/assets/icon/home/security/actionArrow.png'
export default {
  components: {
    TopMessage,
    Notice,
    Menu
  },
  data() {
    return {
      img,
      arrow
    }
  },
  created() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #eee;
  padding-bottom: 12px;
}
.contain {
  background-color: #fff;
  margin: 12px 12px;
  border-radius: 10px;
  .title {
    position: relative;
    line-height: 20px;
    font-size: 14px;
    color: #e60012;
    padding-top: 17px;
    .bold {
      font-weight: bold;
      padding-left: 8px;
    }
    .time {
      float: right;
      padding-right: 12px;
    }
  }
  .video {
    padding-top: 12px;
    height: 255px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .buttons {
    position: relative;
    height: 94px;
    .action,
    .ignore {
      position: absolute;
      bottom: 0;
      width: 100px;
      height: 39px;
      line-height: 39px;
      border-radius: 23px;
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
    .action {
      left: 58px;
      background-color: #4a92ff;
    }
    .ignore {
      right: 58px;
      background-color: #959595;
    }
    .button {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding-right: 5px;
    }
    .van-icon__image {
      transform: translateY(2px);
    }
  }
  .info {
    margin-top: 36px;
    color: #959595;
    line-height: 17px;
    font-size: 12px;
    overflow: hidden;
    .van-row {
      padding-bottom: 16px;
    }
    .van-col {
      padding-left: 12px;
    }
  }
}
</style>
