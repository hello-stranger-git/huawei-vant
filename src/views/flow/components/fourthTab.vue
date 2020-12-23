<template>
  <div class="flowPrice">
    <Calendar :peopleCount="peopleCount" @getDay="getDay"></Calendar>
    <!-- <BarCharts
      :label="item.label"
      :xLabel="item.xLabel"
      :xName="item.xName"
      :yName2="item.yName2"
      :dataName1="item.dataName1"
      :data1="item.data1"
      :dataName3="item.dataName3"
      :data3="item.data3"
    ></BarCharts> -->
    <PriceBar class="priceBar"></PriceBar>

    <div style="text-align:center;margin-top:24px">
      <span
        style="display:inline-block;width: 122px;
        height: 44px;line-height:44px;text-align:center;background: #4A92FF;
        opacity: 1;border-radius: 32px;color: #FFFFFF;font-size: 14px;"
      >
        导出报表</span
      >
    </div>
  </div>
</template>

<script>
import Calendar from '../components/calendar'
// import BarCharts from '../../../components/barCharts'
import PriceBar from '@/components/home/priceBar'

export default {
  components: {
    // BarCharts,
    Calendar,
    PriceBar
  },
  data() {
    return {
      // 客流与销售分析
      // item: {
      //   type: 'sale',
      //   label: ['销售额', '客流人数'],
      //   xLabel: ['今日', '日', '六', '歇', '11/12', '11/11', '11/13', '11/10'],
      //   yName2: '---客单价',
      //   dataName1: '销售额',
      //   data1: [1336081, 1003681, 1603681, 1903681, 903681, 606584, 903681],
      //   dataName3: '客流人数',
      //   data3: [300, 400, 500, 450, 400, 300, 500]
      // },
      peopleCount: [
        // 每天访问的总人数
        { day: 1, status: '568人' },
        { day: 2, status: '568人' },
        { day: 3, status: '568人' },
        { day: 4, status: '568人' },
        { day: 5, status: '568人' },
        { day: 6, status: '568人' },
        { day: 7, status: '568人' },
        { day: 8, status: '568人' },
        { day: 9, status: '568人' },
        { day: 10, status: '568人' },
        { day: 11, status: '568人' },
        { day: 12, status: '568人' },
        { day: 13, status: '568人' },
        { day: 14, status: '568人' },
        { day: 15, status: '568人' },
        { day: 16, status: '568人' },
        { day: 17, status: '568人' },
        { day: 18, status: '568人' },
        { day: 19, status: '568人' },
        { day: 20, status: '568人' },
        { day: 21, status: '568人' },
        { day: 22, status: '568人' },
        { day: 23, status: '568人' },
        { day: 24, status: '568人' },
        { day: 25, status: '568人' },
        { day: 26, status: '568人' },
        { day: 27, status: '568人' },
        { day: 28, status: '568人' },
        { day: 29, status: '568人' },
        { day: 30, status: '568人' },
        { day: 31, status: '568人' }
      ]
    }
  },
  methods: {
    getDay(data) {
      this.show = !this.show
      this.day = data.day
    },
    cancel() {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.flowPrice {
  position: relative;
  .van-overlay {
    z-index: 4;
  }
  .status {
    padding: 12px 30px;
    font-size: 14px;
    background-color: #e2e2e2;
    color: #000;
    border-radius: 24px;
    color: #ffffff;
  }
  .statusTrue {
    background-color: #4a92ff;
  }
  .otherInput {
    width: 96px;
    height: 34px;
    background: #e2e2e2;
    opacity: 1;
    border-radius: 24px;
    border: 0;
    &::placeholder {
      padding-left: 30px;
      color: #ffffff;
    }
  }
  .statusBtn {
    width: 148px;
    height: 48px;
    background: #4a92ff;
    opacity: 1;
    border-radius: 24px;
    border: 0;
    color: #ffffff;
    font-size: 14px;
  }
  .selectStatusDiv {
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 15%;
    border-radius: 10px;
    z-index: 5;
  }
  .priceBar {
    background-color: #fff;
    margin-top: 16px;
    border-radius: 8px;
  }
  .module {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 15px;
  }
  /deep/.barCharts {
    height: 256px;
    margin-top: 10px;
    background: #fff;
    border-radius: 8px;
    canvas {
      height: 300px !important;
    }
    #barCharts {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /deep/.calendar {
    background-color: #fff;
    border-radius: 0 0 8px 8px;
    .currentCalender {
      font-size: 22px;
      color: '#141414';
      font-weight: bold;
      display: flex;
      justify-content: center;
      padding-top: 26px;
      span {
        margin: 0 18px;
      }
    }
    .weekHeader {
      padding: 32px 12px 9px 12px;
      .week {
        font-size: 16px;
        color: #4a92ff;
      }
    }
  }
}
</style>
