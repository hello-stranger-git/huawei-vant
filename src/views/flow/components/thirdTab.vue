<template>
  <div class="thirdTab">
    <!-- 日期选择 -->
    <DateSelect></DateSelect>

    <Module :title="features.title" :nav="features.nav" class="feature">
      <template slot="context">
        <!-- 饼图 -->
        <div class="annular">
          <van-row class="annularRow">
            <van-col span="12" class="annularCol">
              <AnnularChart
                :series="features.data"
                :legend="[]"
                :seriesName="features.seriesName"
              ></AnnularChart>
              <div class="annularPeople">
                <span class="annularPeopleCount">247人</span>
                <p class="annularPeopleCountTitle">总人数</p>
              </div>
            </van-col>
            <van-col span="12" class="typeCol">
              <template v-for="(type, tid) in features.data">
                <van-col span="24" class="typeData" :key="tid">
                  <div
                    class="round"
                    :style="{ backgroundColor: type.color }"
                  ></div>
                  <span>{{ type.name }}</span>
                  <span>{{ type.percent }}</span>
                  <span>{{ type.value }}</span>
                  人
                </van-col>
              </template>
            </van-col>
          </van-row>
        </div>
        <template v-for="(pro, pid) in features.progressDate">
          <div class="progress" :key="pid">
            <!-- progress进度条 -->
            <ProgressItem
              :leftTitle="pro.leftTitle"
              :leftIcon="pro.leftIcon"
              :leftNumber="pro.leftNumber"
              :rightTitle="pro.rightTitle"
              :rightIcon="pro.rightIcon"
              :rightNumber="pro.rightNumber"
              :percentage="pro.percentage"
              :progressColor="pro.progressColor"
              :trackColor="pro.trackColor"
              :sex="pro.sex"
            ></ProgressItem>
          </div>
        </template>
      </template>
    </Module>
    <Module
      :title="customerCount.title"
      :nav="customerCount.nav"
      class="customer"
    >
      <template slot="context">
        <BarCharts
          :label="customerCount.label"
          :xLabel="customerCount.xLabel"
          :xName="customerCount.xName"
          :dataName1="customerCount.dataName1"
          :data1="customerCount.data1"
          :dataName2="customerCount.dataName2"
          :data2="customerCount.data2"
          :dataName3="customerCount.dataName3"
          :data3="customerCount.data3"
        ></BarCharts>
      </template>
    </Module>
  </div>
</template>

<script>
import Module from '@/components/home/module' // 整体模块
import DateSelect from './dateSelect.vue'
import AnnularChart from '../../../components/annularCharts'
import ProgressItem from '../../../components/progressItem'
import BarCharts from '@/components/flow/barCharts' // 柱状图
export default {
  components: {
    DateSelect,
    AnnularChart,
    ProgressItem,
    Module,
    BarCharts
  },
  data() {
    return {
      features: {
        title: '客群特征',
        type: 'features',
        seriesName: '大数据',
        nav: 'flow',
        data: [
          { value: 47, name: '老年', percent: '10.00%', color: '#F8C498' },
          { value: 154, name: '中年', percent: '20.00%', color: '#56BE9B' },
          { value: 46, name: '青年', percent: '34.00%', color: '#F1835B' },
          { value: 47, name: '少年', percent: '10.00%', color: '#FEA8C5' }
        ],
        progressDate: [
          {
            leftTitle: '男性',
            leftNumber: '203',
            leftIcon: require('@/assets/icon/manIcon.png'),
            rightTitle: '女性',
            rightNumber: '44',
            rightIcon: require('@/assets/icon/womanIcon.png'),
            percentage: 70,
            trackColor: '#F98181',
            sex: 'woman'
          },
          {
            leftTitle: '回头客',
            leftNumber: '256',
            leftIcon: require('@/assets/icon/keHu.png'),
            percentage: 80,
            progressColor: '#56BE9B'
          },
          {
            leftTitle: '会员',
            leftNumber: '165',
            leftIcon: require('@/assets/icon/huiYuan.png'),
            percentage: 30,
            progressColor: '#F8C498'
          }
        ]
      },
      // 顾客统计
      customerCount: {
        img: require('@/assets/icon/price.png'),
        title: '到店顾客统计',
        type: 'sale',
        label: ['回头客', '跨店', '会员'],
        nav: 'flow',
        xLabel: ['今日', '日', '六', '歇', '11/12', '11/11'],
        dataName1: '回头客',
        data1: [306, 1003, 1103, 1321, 100, 300],
        dataName2: '跨店',
        data2: [500, 1300, 1200, 1400, 700, 600],
        dataName3: '会员',
        data3: [300, 400, 500, 450, 400, 400]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.progress {
  padding: 19px 13px 0;
}
.thirdTab {
  padding-bottom: 16px;
  .feature {
    background-color: #fff;
  }
  .module {
    border-radius: 0 0 10px 10px;
  }
  .annular {
    background-color: #fff;
    .round {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
      background-color: #f8c498;
    }
    .typeData {
      margin-top: 7px;
      font-size: 14px;
      color: #909399;
      span {
        margin: 0 4px;
        color: #343434;
        font-size: 12px;
      }
    }
    .annularRow {
      display: flex;
      align-items: center;
      .annularCol {
        position: relative;
        .annularPeople {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .annularPeopleCount,
          .annularPeopleCountTitle {
            color: #343434;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
          }
          .annularPeopleCountTitle {
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }
  .customer {
    margin-top: 12px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
