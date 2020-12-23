<template>
  <div>
    <TopMessage></TopMessage>
    <Notice></Notice>
    <div class="main">
      <div class="title">
        <div class="text">收银台右侧</div>
        <div class="score">-3</div>
      </div>
      <div class="pic">
        <img :src="img" />
      </div>
      <div class="detail">
        <div class="content">
          桌面干净，所有的线材从挡板的后面穿过去，桌面的摆放物品没有什么问题
        </div>
        <div class="manager">店长：张鹏</div>
        <div class="date">2020/11/30 12:02:22</div>
        <div class="person">提交人：客服中心</div>
        <div class="submitDate">2020/11/30 12:02:22</div>
      </div>
    </div>
    <div class="action">
      <div class="getPic">
        <div class="camera">
          <van-icon :name="camera" size="45" />
        </div>
        <div class="jietu">获取截图</div>
        <div class="percent">0/5</div>
        <div class="picButton">补充照片</div>
      </div>
      <div class="suggest">
        <div class="head">整改反馈</div>
        <textarea placeholder="请输入..."></textarea>
        <div class="shensu">申诉</div>
        <div class="submit" @click="submit">提交</div>
        <div class="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import img from '@/assets/screenImage/repairImage.png' // 照片
import camera from '@/assets/icon/home/navTabs/camera.png' // 照片
import { Toast } from 'vant'
export default {
  components: {
    Notice,
    TopMessage
  },
  data() {
    return {
      img,
      camera
    }
  },
  created() {
    // console.log(this.$route.params)
  },
  methods: {
    submit() {
      Toast('提交成功')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 362px;
  margin: 12px 0;
  background-color: #fff;
  .title {
    display: flex;
    padding-top: 16px;
    .text {
      height: 25px;
      line-height: 25px;
      color: #141414;
      font-size: 18px;
      font-weight: bold;
      padding-left: 12px;
    }
    .score {
      color: #e60012;
      height: 22px;
      line-height: 22px;
      font-size: 16px;
      margin-left: 16px;
    }
  }
  .pic {
    height: 199px;
    margin-top: 13px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    position: relative;
    margin: 16px 12px 0;
    height: 76px;
    color: #141414;
    .content {
      font-size: 12px;
      line-height: 17px;
    }
    .manager,
    .date,
    .person,
    .submitDate {
      position: absolute;
      font-size: 10px;
      line-height: 14px;
    }
    .manager {
      bottom: 17px;
      left: 0;
    }
    .date {
      bottom: 0;
      left: 0;
    }
    .person {
      right: 0;
      bottom: 14px;
      opacity: 0.5;
    }
    .submitDate {
      right: 0;
      bottom: 0;
      opacity: 0.5;
    }
  }
}
.action {
  height: 256px;
  background-color: #fff;
  padding-top: 16px;
  .getPic {
    position: relative;
    height: 186px;
    margin: 0 12px 68px;
    background-color: #fff;
    border: 1px solid #959595;
    border-radius: 10px;
    .camera {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
    }
    .jietu {
      position: absolute;
      left: 50%;
      top: 53%;
      transform: translateX(-50%);
      color: rgba(20, 20, 20, 0.5);
    }
    .percent {
      position: absolute;
      height: 17px;
      line-height: 17px;
      font-size: 12px;
      top: 12px;
      right: 12px;
      color: #141414;
    }
    .picButton {
      position: absolute;
      right: 0;
      bottom: -39px;
      height: 26px;
      line-height: 26px;
      width: 66px;
      font-size: 12px;
      border-radius: 13px;
      color: #fff;
      background-color: #4a92ff;
      text-align: center;
    }
  }
  .suggest {
    position: relative;
    height: 292px;
    padding: 0 12px;
    background-color: #fff;
    color: #fff;
    .head {
      height: 25px;
      line-height: 25px;
      font-size: 18px;
      color: #141414;
      font-weight: bold;
    }
    textarea {
      width: 100%;
      margin-top: 9px;
      padding: 10px 0 0 12px;
      font-size: 12px;
      border-radius: 10px;
      height: 75px;
      color: #141414;
      box-sizing: border-box;
    }
    textarea::-webkit-input-placeholder {
      color: rgba(20, 20, 20, 0.5);
      font-size: 12px;
    }
    .shensu {
      position: absolute;
      right: 12px;
      top: 120px;
      width: 66px;
      height: 26px;
      font-size: 12px;
      line-height: 26px;
      text-align: center;
      border-radius: 13px;
      background-color: #4a92ff;
    }
    .submit,
    .cancel {
      position: absolute;
      bottom: 54px;
      width: 100px;
      height: 39px;
      font-size: 14px;
      line-height: 39px;
      border-radius: 23px;
      text-align: center;
      color: #fff;
    }
    .submit {
      background-color: #4a92ff;
      left: 70px;
    }
    .cancel {
      background-color: #959595;
      right: 70px;
    }
  }
}
</style>
