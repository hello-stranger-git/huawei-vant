<template>
  <div>
    <!-- 统计内容 -->
    <div class="statistics_content">
      <div class="total">
        <dl>
          <dt>26</dt>
          <dd>今日已考勤人数</dd>
        </dl>
        <dl>
          <dt>4</dt>
          <dd>今日未考勤人数</dd>
        </dl>
      </div>
      <div class="details">
        <van-cell
          v-for="(item, i) of detailsData"
          :key="i"
          :title="item.title"
          is-link
          :value="`${item.value}人`"
        />
      </div>
    </div>
    <!-- 导出报表 -->
    <div class="export">
      <van-button round type="info">导出报表</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 考勤详情数据
      detailsData: [
        {
          title: '准时打卡',
          value: '25'
        },
        {
          title: '迟到',
          value: '5'
        },
        {
          title: '早退',
          value: '1'
        },
        {
          title: '范围外',
          value: '0'
        },
        {
          title: '缺卡',
          value: '0'
        },
        {
          title: '旷工',
          value: '0'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.statistics_content {
  margin: 12px;
  background-color: #fff;
  border-radius: 10px;

  .total {
    display: flex;
    padding: 0 22px 32px;
    justify-content: space-around;
    border-bottom: 0.3px solid rgba(112, 112, 112, 0.2);
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
  .details {
    padding: 8px 0 12px;
    .van-cell {
      padding: 12px 16px;
      .van-cell__title {
        color: #343434;
      }
      .van-cell__value {
        font-size: 12px;
      }
    }
    .van-cell::after {
      border-bottom: 0;
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
</style>
