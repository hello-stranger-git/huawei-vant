<template>
  <div>
    <!-- 头部区域 -->
    <div class="details_top">
      <van-nav-bar title="个人详情" left-arrow @click-left="onClickLeft" />
      <!-- 日期选择区域 -->
      <TimeSelection :dateArr1="dateArr1"></TimeSelection>
    </div>
    <!-- 内容详情区域 -->
    <div class="details_content">
      <!-- 姓名 -->
      <div class="fullName ">
        <img :src="touxiang" />
        <p>兰宇贵</p>
        <span>11/30-12/06</span>
      </div>
      <!-- 详情 -->
      <div class="details_item">
        <van-cell title="平均工时" value="12.6小时" />
        <van-cell title="出勤天数" value="5天" />
        <van-cell title="迟到" value="2天" />
      </div>
    </div>
  </div>
</template>
<script>
import TimeSelection from '@/components/app/appuses/timeSelection.vue' // 日期选择

export default {
  components: {
    TimeSelection
  },
  data() {
    return {
      // 日期数据
      dateArr1: ['本周', '上周', '本月', '十一月', '十月'],
      // 头像
      touxiang: require('@/assets/icon/app/attendance/touxiang1.png'),
      // 详情数据
      detailsData: [
        {
          title: '平均工时',
          value: '12.6小时'
        },
        {
          title: '出勤天数',
          value: '5天'
        },
        {
          title: '休息天数',
          value: '2天'
        },
        {
          title: '迟到',
          value: '0次'
        },
        {
          title: '早退',
          value: '0次'
        },
        {
          title: '缺卡',
          value: '0次'
        },
        {
          title: '旷工',
          value: '0次'
        },
        {
          title: '外勤',
          value: '0次'
        },
        {
          title: '加班',
          value: '9小时'
        }
      ]
    }
  },
  created() {
    console.log(this.$route.query)
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.details_top {
  width: 100%;
  top: 0;
  background-color: #fff;
  padding-top: 44px;
  position: fixed;
  .van-nav-bar {
    /deep/.van-nav-bar__content {
      height: 40px;
      .van-nav-bar__left i {
        font-weight: bold;
        color: #000;
        font-size: 17px;
      }
      .van-nav-bar__title {
        font-size: 18px;
        font-weight: bold;
        color: #000;
      }
    }
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  // 日期选择区域样式
  .timeSelection {
    padding: 0 26px;
  }
}
.details_content {
  margin: 134px 12px 0;
  padding-top: 12px;
  .fullName {
    display: flex;
    align-items: center;
    padding: 20px 16px;
    background-color: #fff;
    border-radius: 10px;
    img {
      width: 44px;
      height: 44px;
    }
    p {
      font-size: 16px;
      color: #141414;
      flex: 1;
      margin-left: 12px;
    }
    span {
      width: 120px;
      font-size: 12px;
      text-align: right;
    }
  }
  .details_item {
    margin-top: 12px;
    padding: 14px 0 16px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    .van-cell {
      .van-cell__value {
        font-size: 12px;
      }
    }
  }
}
</style>
