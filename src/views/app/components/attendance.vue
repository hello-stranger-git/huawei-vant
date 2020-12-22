<template>
  <div class="attendance">
    <!-- 头部区域 -->
    <TopMessage :path="'App'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <!-- tab选项区域 -->
    <div class="tabOption">
      <van-tabs v-model="active" @change="Jump">
        <!-- 使用中 -->
        <van-tab title="考勤" class="inUse "> </van-tab>
        <!-- 未使用 -->
        <van-tab title="统计" class="notUsed"> </van-tab>
      </van-tabs>
    </div>
    <!-- 日期 -->
    <TimeSelection></TimeSelection>
    <router-view> </router-view>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import TimeSelection from '@/components/app/appuses/timeSelection.vue' // 日期选择
export default {
  components: {
    TopMessage,
    Notice,
    TimeSelection
  },
  data() {
    return {
      // tab默认选项
      active: 0
    }
  },
  methods: {
    // 出发事件切换页面
    Jump(e) {
      if (e) {
        this.$router.push({
          name: 'Statistics'
        })
      } else {
        this.$router.push({
          name: 'AttendanceItem'
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.attendance {
  background-color: #efefef;
  padding-bottom: 34px;
}
.tabOption {
  /deep/.van-tabs {
    .van-tabs__line {
      height: 0;
    }
    // 去除选中横条
    .van-tabs__line {
      height: 0;
    }
    .van-tabs__wrap {
      height: 70px;
    }
    .van-tabs__content {
      margin: 0 23px;
    }
    // 未选中样式
    .van-tab {
      background-color: #efefef;
      .van-tab__text {
        font-size: 16px;
        color: #959595;
      }
    }
    // 选中样式
    /deep/.van-tab--active {
      background-color: #fff;
      .van-tab__text {
        color: #4a92ff;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
// 日期选择样式
/deep/.timeSelection {
  padding: 0 28px;
  .dateSelect {
    height: 80px;
    line-height: 80px;
  }
}
</style>
