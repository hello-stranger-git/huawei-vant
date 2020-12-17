<template>
  <div class="customerInfoItem">
    <div class="customer">
      <!-- 头像 -->
      <div class="customerImage">
        <img :src="detailsData.userImg" />
      </div>
      <!-- 返回、菜单 -->
      <div class="topNav">
        <div @click="upPage"><img :src="returnIcon" /></div>
        <div><img :src="menuIcon" /></div>
      </div>
      <!-- 简介 -->
      <div class="customerInfo">
        <p>
          <span>{{ detailsData.name }}</span>
          <span>{{ detailsData.sex }}</span> <span>{{ detailsData.age }}</span>
          <img :src="vipIcon" />
        </p>
        <div>
          <img :src="rmbMax" />
          <span>累计消费</span>
          <span>¥{{ detailsData.consume }}</span>
          <span class="date">{{ detailsData.latelyDate }}</span>
        </div>
      </div>
    </div>
    <!-- 到店记录 -->
    <div class="record">
      <h3>到店记录</h3>
      <p>2020年</p>
      <van-steps direction="vertical" active-icon="vipIcon">
        <van-step v-for="(item, i) of detailsData.record" :key="i">
          <template v-if="i == 0" #active-icon>
            <img v-if="item.money" :src="rmbMin" />
            <img v-else :src="hongdian" />
          </template>
          <template v-else #inactive-icon>
            <img v-if="item.money" :src="rmbMin" />
            <img v-else :src="hongdian" />
          </template>
          <RecordDetails
            :recordDate="item.recordDate"
            :userImg="item.userImg"
            :store="item.store"
            :receptionist="item.receptionist"
            :money="item.money"
          >
          </RecordDetails>
        </van-step>
      </van-steps>
    </div>
    <div class="bottomButton">
      <van-button round type="info">分配</van-button>
      <van-button round type="info">补录</van-button>
    </div>
  </div>
</template>
<script>
import RecordDetails from '@/components/customerInfo/recordDetails.vue'
export default {
  components: {
    RecordDetails
  },
  data() {
    return {
      userImg: require('@/assets/enterStore/enterStore2.png'), // 用户
      vipIcon: require('@/assets/icon/home/enterStore/vipIcon.png'), // vip图标
      rmbMax: require('@/assets/icon/customerInfo/rmbMax.png'), // 人民币大图标
      rmbMin: require('@/assets/icon/customerInfo/rmbMin.png'), // 人民币小图标
      hongdian: require('@/assets/icon/customerInfo/hongdian.png'), // 红点图标
      returnIcon: require('@/assets/icon/customerInfo/jiantou.png'), // 返回箭头图标
      menuIcon: require('@/assets/icon/customerInfo/sandian.png'), // 菜单图标
      // 访问记录数据
      detailsData: {}
    }
  },
  mounted() {
    this.detailsData = this.$route.params.detailsData
  },
  methods: {
    upPage() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.customerInfoItem {
  background-color: #efefef;
  color: #141414;
  overflow: hidden;
  margin-bottom: 83px;
}
.customer {
  background-color: #fff;
  padding-top: 44px;
  position: relative;
  // 头像区域样式
  .customerImage {
    height: 280px;
    overflow: hidden;
    & > img {
      width: 100%;
    }
  }
  // 返回、菜单
  .topNav {
    position: absolute;
    width: 100%;
    top: 45px;
    display: flex;
    justify-content: space-between;
    & > div {
      margin: 8px 12px;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
      }
    }
  }
  // 简介区域样式
  .customerInfo {
    padding: 10px 12px;

    & > p {
      font-size: 16px;
      img {
        width: 20px;
        height: 15px;
        margin-left: 4px;
      }
      span:not(:first-child) {
        margin-left: 20px;
      }
    }
    & > div {
      margin-top: 10px;
      font-size: 14px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 4px;
        vertical-align: top;
      }
      span {
        margin-right: 10px;
      }
      & > span:nth-child(2) {
        opacity: 0.5;
      }
      .date {
        float: right;
        margin: 0;
        opacity: 0.5;
      }
    }
  }
}
// 到店记录样式
.record {
  margin: 12px;
  padding-top: 16px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  & > h3 {
    padding-left: 13px;
    font-size: 18px;
    font-weight: bold;
  }
  & > p {
    margin-top: 24px;
    padding: 0 25px;
    font-size: 14px;
  }
  /deep/.van-steps {
    .van-step__circle-container {
      img {
        width: 10px;
        height: 10px;
      }
    }
    .van-step--vertical:not(:last-child)::after {
      border-bottom-width: 0;
    }
  }
}
//页尾button区样式
.bottomButton {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 8px 0 41px;
  display: flex;
  z-index: 99;
  justify-content: flex-end;
  .van-button {
    margin-right: 12px;
    width: 84px;
    height: 34px;
    font-size: 14px;
  }
  .van-button--normal {
    padding: 0;
  }
}
</style>
