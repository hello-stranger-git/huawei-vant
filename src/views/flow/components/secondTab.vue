<template>
  <div>
    <!-- 日期 -->
    <DateSelect></DateSelect>
    <!-- 最大客流 -->
    <div class="maxFlow">
      <FlowEchart
        class="brokenLine "
        lineChartsId="id1"
        :label="item.label"
        :xLabel="item.xLabel"
        :xName="item.xName"
        :yName="item.yName"
        :dataName1="item.dataName1"
        :data1="item.data1"
        :dataName2="item.dataName2"
        :data2="item.data2"
        :dataName3="item.dataName3"
        :data3="item.data3"
      ></FlowEchart>
      <div class="radio">
        <p><img :src="libao" /><span>活动：两周年店庆，全场9.5折</span></p>
        <span>11月16日</span>
      </div>
    </div>

    <div class="trend" v-for="(item, i) of monthFlow" :key="i">
      <Module
        :title="item.title"
        :status="item.status"
        :key="index"
        :smallTitle="item.smallTitle"
      >
        <template slot="context">
          <FlowEchart
            class="brokenLine "
            :lineChartsId="i"
            :xLabel="item.xLabel"
            :xName="item.xName"
            :yName="item.yName"
            :dataName3="item.dataName1"
            :data3="item.data1"
          ></FlowEchart>
        </template>
      </Module>
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div>
    <!-- 30天客流 -->
  </div>
</template>
<script>
import DateSelect from './dateSelect.vue' // 日期
import Module from '@/components/home/module' // 整体模块
import FlowEchart from '@/components/lineChart' // 折线图
export default {
  components: {
    FlowEchart,
    DateSelect,
    Module
  },
  data() {
    return {
      notice: '活动:两周年庆全场9.5折',
      libao: require('@/assets/icon/libao.png'), // 礼包图标

      item: {
        img: require('@/assets/icon/flowTrend.png'),
        title: '今日客流走势',
        label: ['当前', '昨日', '前天'],
        nav: 'home',
        xLabel: [
          '7:00',
          '8:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '23:00',
          '24:00'
        ],
        xName: '时间',
        yName: '客流',
        type: 'flow',
        dataName1: '昨日',
        data1: [50, 100, 50, 80, 106, 150, 50, 15, 10, 5, 8],
        dataName2: '前天',
        data2: [25, 50, 75, 50, 120, 75, 25, 30, 30, 15, 18],
        dataName3: '当前',
        data3: [50, 100, 150, 100, 250, 200, 180, 150, 100, 50, 80]
      },
      monthFlow: [
        {
          icon: 'iconrili',
          title: '30天客流走势',
          status: '',
          xLabel: ['11/1', '11/5', '11/10', '11/15', '11/20', '11/25', '11/30'],
          xName: '时间',
          yName: '客流',
          type: 'flow',
          dataName1: '客流',
          data1: [50, 100, 50, 80, 106, 150, 50, 15]
        },
        {
          icon: 'iconrili',
          title: '90天客流走势',
          status: '',
          xLabel: ['11/1', '11/5', '11/10', '11/15', '11/20', '11/25', '11/30'],
          xName: '时间',
          yName: '客流',
          type: 'flow',
          dataName1: '客流',
          data1: [50, 100, 50, 80, 106, 150, 50, 15]
        },
        {
          icon: 'iconrili',
          title: '一年客流走势',
          status: '',
          xLabel: ['11/1', '11/5', '11/10', '11/15', '11/20', '11/25', '11/30'],
          xName: '时间',
          yName: '客流',
          type: 'flow',
          dataName1: '客流',
          data1: [50, 100, 50, 80, 106, 150, 50, 15]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.maxFlow {
  background-color: #fff;
  position: relative;
  border-radius: 0 0 8px 8px;
  padding-top: 4px;
}
.brokenLine {
  height: 175px;
}
.radio {
  display: flex;
  padding: 0 15px;
  padding-bottom: 15px;
  justify-content: space-between;
  font-size: 12px;
  p {
    color: #f8c498;
    font-size: 12px;
    img {
      vertical-align: middle;
      margin-right: 6px;
    }
    span {
      vertical-align: middle;
    }
  }
}
.trend {
  margin-top: 12px;
  background-color: #fff;
  border-radius: 8px;
}
.van-row {
  text-align: center;
}
</style>
