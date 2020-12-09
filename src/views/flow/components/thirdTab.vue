<template>
  <div>
    <DateSelect></DateSelect>
    <div class="annular">
      <van-row class="annularRow">
        <van-col span="12">
          <AnnularChart
            :series="item.data"
            :legend="[]"
            :seriesName="item.seriesName"
          ></AnnularChart
        ></van-col>
        <van-col span="12" class="typeCol">
          <template v-for="(type, tid) in item.data">
            <van-col span="24" class="typeData" :key="tid">
              <div class="round" style="border: 1px solid #c32c1c;"></div>
              <span>{{ type.name }}</span>
              <span>{{ type.percent }}</span>
              <span>{{ type.value }}</span>
              人
            </van-col>
          </template>
        </van-col>
      </van-row>
      <!-- progress进度条 -->
      <div class="proBgc">
        <template v-for="(pro, pid) in item.progressDate">
          <div class="progress" :key="pid">
            <ProgressItem
              :leftTitle="pro.leftTitle"
              :leftIcon="pro.leftIcon"
              :percentage="pro.percentage"
              :progressColor="pro.progressColor"
              :trackColor="pro.trackColor"
              :sex="pro.sex"
              :leftIconColor="pro.leftIconColor"
            ></ProgressItem>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import DateSelect from './dateSelect.vue'
import AnnularChart from '../../../components/annularCharts'
import ProgressItem from '../../../components/progressItem'
export default {
  components: {
    DateSelect,
    AnnularChart,
    ProgressItem
  },
  data() {
    return {
      item: {
        icon: 'iconkequn',
        title: '客群特征(今日)',
        status: '',
        type: 'features',
        seriesName: '大数据',
        data: [
          { value: 47, name: '老年', percent: '10.00%' },
          { value: 154, name: '中年', percent: '20.00%' },
          { value: 46, name: '青年', percent: '34.00%' },
          { value: 47, name: '少年', percent: '10.00%' }
        ],
        progressDate: [
          {
            leftTitle: '男性',
            leftIcon: 'iconnanren',
            percentage: 70,
            trackColor: '#F98181',
            sex: 'woman'
          },
          {
            leftTitle: '回头客',
            leftIcon: 'iconnanren',
            percentage: 80
          },
          {
            leftTitle: '会员',
            leftIcon: 'iconcanpinhuihuiyuanv6',
            percentage: 30,
            progressColor: '#FFCD41',
            leftIconColor: '#F7B500'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.typeData {
  padding-bottom: 5px;
}
.annularRow {
  display: flex;
  align-items: center;
  background-color: #fff;
}
.typeData {
  margin: -3px;
  font-size: 14px;
  margin-top: 6px;
  color: #909399;
  span {
    margin: 0 4px;
  }
}
.round {
  display: inline-block;
  border: 1px solid #c32c1c;
  background-color: #ffffff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 2px;
}
.typeCol {
  padding-bottom: 20px;
}
.progress {
  margin-top: 10px;
}
.progress:first-child {
  margin-top: 0;
}
.proBgc {
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
