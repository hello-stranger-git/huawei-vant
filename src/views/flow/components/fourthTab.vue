<template>
  <div class="flowPrice">
    <Calendar :peopleCount="peopleCount"></Calendar>
    <Module :icon="item.icon" :title="item.title" :status="item.status">
      <template slot="context">
        <BarCharts
          class="barCharts"
          :label="item.label"
          :xLabel="item.xLabel"
          :xName="item.xName"
          :yName2="item.yName2"
          :dataName1="item.dataName1"
          :data1="item.data1"
          :dataName2="item.dataName2"
          :data2="item.data2"
          :dataName3="item.dataName3"
          :data3="item.data3"
        ></BarCharts>
      </template>
    </Module>
  </div>
</template>

<script>
import Module from '@/components/home/module' // 整体模块
import Calendar from '../components/calendar'
import BarCharts from '../../../components/barCharts'

export default {
  components: {
    BarCharts,
    Calendar,
    Module
  },
  data() {
    return {
      item: {
        icon: '',
        title: '客流与销售分析',
        status: '',
        label: ['销售额', '客流人数'],
        xLabel: ['今日', '昨日', '11/10', '11/11', '11/12', '11/13', '11/14'],
        yName2: '客单价(w)',
        dataName1: '销售额',
        data1: [1000, 1200, 1400, 1300, 1200, 1000, 1300],
        dataName2: '均值',
        data2: [500, 600, 700, 650, 600, 500, 650],
        dataName3: '客流人数',
        data3: [300, 400, 500, 450, 400, 300, 500]
      },
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
  .module {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 15px;
  }
  .barCharts {
    height: 200px;
    margin-top: 10px;
    background: #fff;
    border-radius: 8px;
  }
  .calendar {
    background-color: #fff;
    border-radius: 0 0 8px 8px;
  }
}
</style>
