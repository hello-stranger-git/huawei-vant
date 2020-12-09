<template>
  <div style="background:#fff">
    <template v-if="item.type == 'sale'">
      <BarCharts
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
  </div>
</template>

<script>
import BarCharts from '../../../components/barCharts'

export default {
  components: {
    BarCharts
  },
  data() {
    return {
      item: {
        icon: 'iconrili',
        title: '客流与销售分析',
        status: '',
        type: 'sale',
        label: ['销售额', '客流人数'],
        xLabel: ['今日', '昨日', '11/10', '11/11', '11/12', '11/13', '11/14'],
        yName2: '客单价(w)',
        dataName1: '销售额',
        data1: [1000, 1200, 1400, 1300, 1200, 1000, 1300],
        dataName2: '均值',
        data2: [500, 600, 700, 650, 600, 500, 650],
        dataName3: '客流人数',
        data3: [300, 400, 500, 450, 400, 300, 500]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
