<template>
  <div>
    <van-row>
      <van-col span="24"
        ><div class="notice">{{ notice }}</div></van-col
      >
    </van-row>
    <!-- 最大客流 -->
    <div class="maxFlow">
      <div class="max">{{ item.maxTitle }}</div>
      <div class="weather">{{ item.weather }}</div>
      <FlowEchart
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
    </div>
    <!-- 客流特征 -->
    <div class="tezheng">
      <div v-for="(item, i) in sexTimer" :key="i" class="progress">
        <van-row>
          <van-col span="6">{{ item.time }}</van-col>
          <van-col span="14" offset="1"
            ><van-progress
              :percentage="Math.ceil((item.male / item.total) * 100)"
              stroke-width="10"
              track-color="#f98181"
          /></van-col>
          <van-col span="3">
            <span>{{ item.total }}人</span>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="4" offset="8">
            <van-icon class-prefix="iconfont iconnanren" color="#1989fa" />
            <span>{{ item.male }}</span>
          </van-col>
          <van-col span="4" offset="1">
            <van-icon class-prefix="iconfont iconnvren" color="#f98181" />
            <span>{{ item.female }}</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 30天客流 -->
    <div class="otherFlow">
      <div class="max">{{ monthFlow.maxTitle }}</div>
      <!-- <div class="weather">{{ monthFlow.weather }}</div> -->
      <FlowEchart
        class="target"
        lineChartsId="id2"
        :label="monthFlow.label"
        :xLabel="monthFlow.xLabel"
        :xName="monthFlow.xName"
        :yName="monthFlow.yName"
        :dataName1="monthFlow.dataName1"
        :data1="monthFlow.data1"
      ></FlowEchart>
    </div>
    <!-- 90天客流 -->
    <div class="otherFlow">
      <div class="max">{{ ninetyFlow.maxTitle }}</div>
      <!-- <div class="weather">{{ ninetyFlow.weather }}</div> -->
      <FlowEchart
        class="target"
        lineChartsId="id3"
        :label="ninetyFlow.label"
        :xLabel="ninetyFlow.xLabel"
        :xName="ninetyFlow.xName"
        :yName="ninetyFlow.yName"
        :dataName1="ninetyFlow.dataName1"
        :data1="ninetyFlow.data1"
      ></FlowEchart>
    </div>
    <!-- 年客流 -->
    <div class="otherFlow">
      <div class="max">{{ yearFlow.maxTitle }}</div>
      <!-- <div class="weather">{{ yearFlow.weather }}</div> -->
      <FlowEchart
        class="target"
        lineChartsId="id4"
        :label="yearFlow.label"
        :xLabel="yearFlow.xLabel"
        :xName="yearFlow.xName"
        :yName="yearFlow.yName"
        :dataName1="yearFlow.dataName1"
        :data1="yearFlow.data1"
      ></FlowEchart>
    </div>
  </div>
</template>

<script>
import FlowEchart from '../../../components/lineChart'
export default {
  components: {
    FlowEchart
  },
  data() {
    return {
      notice: '活动:两周年庆全场9.5折',
      item: {
        maxTitle: '最大客流11月20日,共760人',
        weather: '11月16日  多云气温28°',
        icon: 'iconrili',
        title: '今日客流走势',
        status: '',
        label: ['当前', '昨日', '前天'],
        xLabel: [
          '8:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          ''
        ],
        xName: '时间',
        yName: '客流',
        type: 'flow',
        dataName1: '客流',
        data1: [50, 100, 50, 80, 106, 150, 50, 15],
        dataName2: '前天',
        data2: [25, 50, 75, 50, 120, 75, 25, 30],
        dataName3: '当前',
        data3: [50, 100, 150, 100, 250]
      },
      monthFlow: {
        maxTitle: '最大客流11月20日,共1160人',
        // weather: '11月16日  多云气温28°',
        icon: 'iconrili',
        title: '近30天客流走势',
        status: '',
        label: ['月'],
        xLabel: [
          '11/1',
          '11/5',
          '11/10',
          '11/15',
          '11/20',
          '11/25',
          '11/30',
          ''
        ],
        xName: '时间',
        yName: '客流',
        type: 'flow',
        dataName1: '客流',
        data1: [50, 100, 50, 80, 106, 150, 50, 15]
      },
      ninetyFlow: {
        maxTitle: '最大客流11月20日,共1160人',
        // weather: '11月16日  多云气温28°',
        icon: 'iconrili',
        title: '近30天客流走势',
        status: '',
        label: ['90天'],
        xLabel: [
          '9/1',
          '9/15',
          '9/30',
          '10/1',
          '10/15',
          '10/31',
          '11/1',
          '11/15',
          '11/30',
          ''
        ],
        xName: '时间',
        yName: '客流',
        type: 'flow',
        dataName1: '客流',
        data1: [300, 200, 300, 600, 500, 400, 300, 600, 400]
      },
      yearFlow: {
        maxTitle: '最大客流四月,共600人',
        icon: 'iconrili',
        title: '近30天客流走势',
        status: '',
        label: ['年'],
        xLabel: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
          ''
        ],
        xName: '时间',
        yName: '客流',
        type: 'flow',
        dataName1: '客流',
        data1: [300, 200, 300, 600, 500, 400, 300, 600, 400, 300, 200, 100]
      },
      sexTimer: [
        { time: '8:00-12:00', female: 4, male: 10, total: 14 },
        { time: '12:00-16:00', female: 12, male: 10, total: 22 },
        { time: '16:00-20:00', female: 109, male: 221, total: 330 },
        { time: '20:00-24:00', female: 434, male: 566, total: 1000 }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.notice {
  color: #ffda72;
  font-size: 16px;
  padding: 10px 0 10px 15px;
  background-color: #fff;
}
.maxFlow {
  background-color: #fff;
  position: relative;
}
.otherFlow {
  background-color: #fff;
  position: relative;
  margin-top: 15px;
}
.max,
.weather {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 14px;
}
.weather {
  bottom: 6%;
}
.max {
  top: 10%;
}
.tezheng {
  margin-bottom: 15px;
  border-radius: 7px;
  background-color: #fff;
  margin: 15px 0;
  padding-top: 15px;
  .progress {
    padding: 5px 0;
  }
  text-align: center;
  .van-col--14 {
    margin-top: 4px;
  }
  .van-col {
    font-size: 14px;
  }
}
.target {
  height: 218px;
  border-radius: 8px;
}
</style>
