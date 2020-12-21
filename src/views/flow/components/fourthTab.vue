<template>
  <div class="flowPrice">
    <Calendar :peopleCount="peopleCount"></Calendar>
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
        { day: 1, count: 200 },
        { day: 2, count: 125 },
        { day: 3, count: 456 },
        { day: 4, count: 458 },
        { day: 5, count: 484 },
        { day: 6, count: 789 },
        { day: 7, count: 489 },
        { day: 8, count: 756 },
        { day: 9, count: 159 },
        { day: 10, count: 753 },
        { day: 11, count: 159 },
        { day: 12, count: 459 },
        { day: 13, count: 753 },
        { day: 14, count: 258 },
        { day: 15, count: 138 },
        { day: 16, count: 568 },
        { day: 17, count: 753 },
        { day: 18, count: 159 },
        { day: 19, count: 459 },
        { day: 20, count: 753 },
        { day: 21, count: 258 },
        { day: 22, count: 138 },
        { day: 23, count: 568 },
        { day: 24, count: 753 },
        { day: 25, count: 159 },
        { day: 26, count: 459 },
        { day: 27, count: 753 },
        { day: 28, count: 258 },
        { day: 29, count: 138 },
        { day: 30, count: 568 },
        { day: 31, count: 368 }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.flowPrice {
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
