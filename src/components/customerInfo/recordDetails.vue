<template>
  <div class="recordDetails">
    <div class="recordDate">{{ recordDate }}</div>
    <div class="userImage"><img :src="userImg" /></div>
    <div class="recordInfo">
      <p><img :src="huawei" />{{ store }}</p>
      <p v-if="receptionist">
        <img :src="jieDaiYuan" /><span>接待店员</span>{{ receptionist }}
      </p>
      <p v-if="money"><img :src="rmbRed" /><span>消费金额</span>{{ money }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 到店时间
    recordDate: {
      type: String
    },
    // 客户头像
    userImg: {
      type: String
    },
    // 店铺名称
    store: {
      type: String
    },
    // 接待员
    receptionist: {
      type: String,
      default: ''
    },
    // 消费金额
    money: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // userImg: require('@/assets/enterStore/enterStore2.png'), // 用户
      rmbRed: require('@/assets/icon/customerInfo/rmbRed.png'), // 人民币红色图标
      huawei: require('@/assets/icon/customerInfo/huawei.png'), // 华为图标
      jieDaiYuan: require('@/assets/icon/customerInfo/jieDaiYuan.png') // 接待员图标
    }
  }
}
</script>
<style lang="less" scoped>
.recordDetails {
  display: flex;
  color: #141414;
  & > div {
    flex-shrink: 0;
  }
  .recordDate {
    width: 52px;
    font-size: 10px;
    opacity: 0.5;
    margin-right: 10px;
  }
  .userImage {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .recordInfo {
    margin-left: 9px;
    p {
      font-size: 12px;
      &:not(:first-child) {
        margin-top: 3px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-right: 2px;
        vertical-align: top;
      }
      span {
        opacity: 0.5;
        margin-right: 12px;
      }
    }
  }
}
</style>
