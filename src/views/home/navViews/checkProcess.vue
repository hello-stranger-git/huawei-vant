<template>
  <div class="contain">
    <!-- 头部 -->
    <div class="header"></div>
    <div class="statu">
      点检过程
      <div class="back" @click="$router.go(-1)"><img :src="goBack" /></div>
    </div>
    <!-- 主体内容 -->
    <div class="main">
      <div class="person"><img :src="person" />审核人：王某</div>
      <div class="box">
        <div class="value">禁止抱着胳膊、跷二郎腿、手插口袋</div>
        <div class="pic"><img :src="pic" /></div>
        <div class="time">一小时前</div>
        <div class="control" :style="{ background: '#E60012' }">通过</div>
      </div>
    </div>
    <div class="main">
      <div class="person"><img :src="person1" />审核人：王某</div>
      <div class="box">
        <div class="value">禁止抱着胳膊、跷二郎腿、手插口袋</div>
        <div class="pic"><img :src="pic" /></div>
        <div class="time">一小时前</div>
        <div class="control">整改</div>
        <div class="secondControl">申诉</div>
      </div>
    </div>
    <div class="main">
      <div class="person"><img :src="person2" />审核人：王某</div>
      <div class="box">
        <div class="value">禁止抱着胳膊、跷二郎腿、手插口袋</div>
        <div class="pic"><img :src="pic" /></div>
        <div class="time">一小时前</div>
        <div class="control">点检</div>
      </div>
    </div>
    <div class="main">
      <div class="person"><img :src="person3" />审核人：王某</div>
      <div class="box">
        <div class="value">禁止抱着胳膊、跷二郎腿、手插口袋</div>
        <div class="pic"><img :src="pic" /></div>
        <div class="time">一小时前</div>
        <div class="control">在线考评</div>
        <div class="secondControl">线下巡查</div>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from '@/assets/icon/home/navTabs/back.png'
import person from '@/assets/icon/home/navTabs/person.png'
import person1 from '@/assets/icon/home/navTabs/person1.png'
import person2 from '@/assets/icon/home/navTabs/person2.png'
import person3 from '@/assets/icon/home/navTabs/person3.png'
import pic from '@/assets/icon/home/navTabs/lookDetail.png' // 照片

export default {
  data() {
    return {
      goBack,
      person,
      person1,
      person2,
      person3,
      pic
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  height: 100%;
  background-color: #fff;
  .header {
    height: 44px;
    background-color: #fff;
  }
  .statu {
    background-color: #fff;
    position: relative;
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
    .back {
      position: absolute;
      left: 12px;
      top: 5px;
      width: 24px;
      height: 24px;
    }
  }
  .main {
    position: relative;
    margin: 4px 12px 0;
    &:last-child::after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: -6px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #b1b1b1;
    }

    .person {
      height: 24px;
      line-height: 24px;
      img {
        vertical-align: bottom;
        margin-right: 6px;
        width: 24px;
        height: 24px;
      }
    }
    .box {
      position: relative;
      height: 140px;
      margin-top: 4px;
      margin-left: 13px;
      padding-left: 59px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
      border-left: 1px solid rgba(86, 86, 86, 0.5);
      .value {
        height: 17px;
        line-height: 17px;
        padding-top: 8px;
      }
      .pic {
        margin-top: 10px;
        height: 75px;
        width: 75px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .time {
        margin-top: 4px;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.7);
      }
      .control,
      .secondControl {
        position: absolute;
        right: 0;
        top: 35px;
        // width: 52px;
        padding: 0 14px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 13px;
        font-size: 12px;
        color: #fff;
        background-color: #4a92ff;
      }
      .secondControl {
        top: 72px;
      }
    }
  }
}
</style>
