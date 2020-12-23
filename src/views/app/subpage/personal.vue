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
      <div class="frequency ">
        <van-cell
          v-for="(item, i) of detailsData"
          :key="i"
          :title="item.title"
          :value="item.value"
        />
      </div>
      <!-- 考勤详情 -->
      <div class="details_item">
        <h3>考勤详情</h3>
        <van-row class="attendance_title">
          <van-col span="6">日期</van-col>
          <van-col span="6">班次简称</van-col>
          <van-col span="6">上班时间</van-col>
          <van-col span="6">下班时间</van-col>
        </van-row>
        <div class="attendance_date">
          <van-row>
            <van-col span="6">2020/11/30</van-col>
            <van-col span="6">
              <p>午班</p>
              <p>晚班</p>
            </van-col>
            <van-col span="6">
              <p>08:55:32</p>
              <p>16:25:32</p>
            </van-col>
            <van-col span="6">
              <p>14:00:35</p>
              <p>21:32:32</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="6">2020/11/30</van-col>
            <van-col span="6">
              <p>午班</p>
              <p>晚班</p>
            </van-col>
            <van-col span="6">
              <p>08:55:32</p>
              <p>16:25:32</p>
            </van-col>
            <van-col span="6">
              <p>14:00:35</p>
              <p>21:32:32</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="6">2020/11/30</van-col>
            <van-col span="6">
              <p>休</p>
            </van-col>
            <van-col span="6">
              <p>休</p>
            </van-col>
            <van-col span="6">
              <p>休</p>
            </van-col>
          </van-row>
        </div>
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
  z-index: 99;
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
  .frequency {
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
  .details_item {
    margin-top: 12px;
    // border: 1px solid red;
    .van-row {
      // border: 1px solid red;
      text-align: center;
      margin-top: 12px;
    }
    .attendance_title {
      font-size: 14px;
      color: #141414;
    }
    .attendance_date {
      .van-row {
        font-size: 12px;
        p {
          line-height: 23px;
          font-size: 12px;
          // border: 1px solid black;
        }
      }
    }
  }
}
</style>
