<template>
  <div class="personal">
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
          <van-row v-for="(item, i) of attendanceDate" :key="i">
            <van-col span="6">
              {{ item.date }}
            </van-col>
            <van-col span="18">
              <div v-if="item.frequency.length">
                <dl v-for="(item1, i) of item.frequency" :key="i">
                  <dt>{{ item1.name }}</dt>
                  <dd :class="item1.late ? 'colorRed' : ''">
                    {{ item1.workShift }}
                  </dd>
                  <dd>{{ item1.closingTime }}</dd>
                </dl>
              </div>
              <p v-else>
                <span>休</span>
                <span>休</span>
                <span>休</span>
              </p>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 导出报表 -->
      <div class="export">
        <van-button round type="info">导出报表</van-button>
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
      ],
      // 考勤详情数据
      attendanceDate: [
        {
          date: '2020/11/30',
          frequency: [
            {
              name: '午班',
              workShift: '08:55:32',
              closingTime: '14:00:35',
              late: false
            },
            {
              name: '晚班',
              workShift: '16:25:32',
              closingTime: '21:32:32',
              late: false
            }
          ]
        },
        {
          date: '2020/12/01',
          frequency: [
            {
              name: '午班',
              workShift: '08:55:32',
              closingTime: '14:00:35',
              late: false
            },
            {
              name: '晚班',
              workShift: '16:25:32',
              closingTime: '21:32:32',
              late: false
            }
          ]
        },
        {
          date: '2020/12/02',
          frequency: [
            {
              name: '午班',
              workShift: '08:55:32',
              closingTime: '14:00:35',
              late: false
            },
            {
              name: '晚班',
              workShift: '16:25:32',
              closingTime: '21:32:32',
              late: false
            }
          ]
        },
        {
          date: '2020/12/03',
          frequency: [
            {
              name: '午班',
              workShift: '08:55:32',
              closingTime: '14:00:35',
              late: false
            },
            {
              name: '晚班',
              workShift: '16:25:32',
              closingTime: '21:32:32',
              late: false
            }
          ]
        },
        {
          date: '2020/12/04',
          frequency: [
            {
              name: '午班',
              workShift: '09:05:32',
              closingTime: '14:00:35',
              late: true
            },
            {
              name: '晚班',
              workShift: '16:25:32',
              closingTime: '21:32:32',
              late: false
            }
          ]
        },
        {
          date: '2020/12/05',
          frequency: []
        },
        {
          date: '2020/12/06',
          frequency: []
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
.personal {
  background: #efefef;
  padding-bottom: 34px;
}
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
  // 姓名区域样式
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
  // 详情区域样式
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
  // 考勤详情样式
  .details_item {
    margin-top: 12px;
    background: #fff;
    padding: 16px 0 34px;
    border-radius: 10px;
    & > h3 {
      color: #141414;
      font-size: 18px;
      padding-left: 16px;
    }
    .van-row {
      text-align: center;
      margin-top: 12px;
    }
    // 栏目
    .attendance_title {
      margin-top: 18px;
      font-size: 14px;
      color: #141414;
    }
    // 时间
    .attendance_date {
      .van-row {
        .van-col {
          font-size: 12px;
          line-height: 23px;
          p {
            display: flex;
            color: #565656;
            font-size: 12px;
            span {
              flex: 1;
            }
          }
          dl {
            margin: 0;
            display: flex;
            color: #565656;
            dt,
            dd {
              margin: 0;
              flex: 1;
            }
            dd {
              color: #65c466;
            }
          }
          .colorRed {
            color: red;
          }
        }
      }
    }
  }

  // 导出报表样式
  .export {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    .van-button {
      width: 122px;
      background-color: #4a92ff;
    }
  }
}
</style>
