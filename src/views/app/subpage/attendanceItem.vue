<template>
  <div>
    <!-- 班次选择 -->
    <div class="frequency">
      <van-tabs v-model="active">
        <!-- 午班 -->
        <van-tab title="午班">
          <dl>
            <dt>26</dt>
            <dd>午班已考勤人数</dd>
          </dl>
          <dl>
            <dt>4</dt>
            <dd>午班未考勤人数</dd>
          </dl>
        </van-tab>
        <!-- 晚班 -->
        <van-tab title="晚班">
          <dl>
            <dt>26</dt>
            <dd>晚班已考勤人数</dd>
          </dl>
          <dl>
            <dt>4</dt>
            <dd>晚班未考勤人数</dd>
          </dl>
        </van-tab>
      </van-tabs>
      <div class="headcount">总人数：30人</div>
    </div>
    <!-- 人员详情 -->
    <div class="staff">
      <van-cell
        v-for="(item, i) of attendanceData"
        :key="i"
        :title="item.name"
        is-link
      >
        <template #icon>
          <img :src="item.portrait" width="44px" />
        </template>
        <template #default>
          <p>
            {{ item.clockInTime }}<span>{{ item.clockInState }}</span>
          </p>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // tab默认选中项
      active: 0,
      // 头像
      touxiang: require('@/assets/icon/app/attendance/touxiang1.png'),

      // 考勤数据
      attendanceData: [
        {
          id: 1,
          portrait: require('@/assets/icon/app/attendance/touxiang2.png'),
          name: '张鹏',
          clockInState: '考勤成功',
          clockInTime: '08:48:55'
        },
        {
          id: 2,
          portrait: require('@/assets/icon/app/attendance/touxiang3.png'),
          name: '兰宇贵',
          clockInState: '考勤成功',
          clockInTime: '08:48:55'
        },
        {
          id: 3,
          portrait: require('@/assets/icon/app/attendance/touxiang2.png'),
          name: '王华',
          clockInState: '迟到',
          clockInTime: '08:48:55'
        },
        {
          id: 4,
          portrait: require('@/assets/icon/app/attendance/touxiang1.png'),
          name: '金润垚 ',
          clockInState: '未打卡'
        },
        {
          id: 5,
          portrait: require('@/assets/icon/app/attendance/touxiang3.png'),
          name: '王旭',
          clockInState: '未打卡'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.frequency {
  margin: 12px 12px 0;
  padding: 18px 16px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  .van-tabs {
    // 选项样式
    /deep/.van-tabs__wrap {
      width: 120px;
      height: 28px;
      // 去除选中横条
      .van-tabs__line {
        height: 2px;
        width: 16px;
        background-color: #4a92ff;
      }
      .van-tab--active {
        color: #4a92ff;
        font-weight: bold;
        border-radius: 2px;
      }
    }
    // 内容样式
    /deep/.van-tabs__content {
      .van-tab__pane {
        display: flex;
        padding: 0 22px 32px;
        justify-content: space-around;
        dl {
          margin: 34px 0 0;
          text-align: center;
          dt {
            font-size: 20pt;
            color: #4a92ff;
            line-height: 28px;
          }
          dd {
            font-size: 12px;
            color: #959595;
            margin: 5px 0 0;
          }
        }
      }
    }
  }
  .headcount {
    position: absolute;
    top: 16px;
    right: 21px;
    font-size: 10px;
    color: #959595;
    opacity: 0.7;
  }
}
.staff {
  margin: 12px;
  border-radius: 10px;
  overflow: hidden;
  .van-cell {
    line-height: 44px;
    padding: 12px 9px 12px 16px;
    .van-cell__right-icon {
      line-height: 44px;
    }
    .van-cell__title {
      margin-left: 16px;
    }
    .van-cell__value {
      p {
        font-size: 12px;
        span {
          display: inline-block;
          width: 58px;
          margin-left: 3px;
          text-align: center;
        }
      }
    }
  }
}
</style>
