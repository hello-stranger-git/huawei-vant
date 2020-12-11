<template>
  <div class="home">
    <NavBar></NavBar>
    <template v-for="(item, index) in moduleDate">
      <Module
        :icon="item.img"
        :title="item.title"
        :status="item.status"
        :key="index"
        :smallTitle="item.smallTitle"
      >
        <!-- 每日进店模块 -->
        <template v-if="item.type == 'enterStore'" slot="context">
          <div class="user">
            <template v-for="(user, uid) in item.user">
              <UserItem
                :key="uid"
                :img="user.img"
                :date="user.date"
                :age="user.age"
                :count="user.count"
                :sex="user.sex"
              ></UserItem>
            </template>
          </div>
        </template>
        <!-- 客流走势模块 -->
        <template v-if="item.type == 'flow'" slot="context">
          <LineChart
            lineChartsId="flowId"
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
          ></LineChart>
        </template>
        <!-- 客流特征模块 -->
        <template v-if="item.type == 'features'" slot="context">
          <div class="selectDate">
            <span class="nowDay">今日</span>
            <span class="nowWeek">本周</span>
            <span class="nowMonth">本月</span>
          </div>
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
          </div>
          <template v-for="(pro, pid) in item.progressDate">
            <div class="progress" :key="pid">
              <!-- progress进度条 -->
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
        </template>
        <!-- 客流与销售分析 -->
        <template v-if="item.type == 'sale'" slot="context">
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
        <!-- 本店视频 -->
        <template v-if="item.type == 'video'" slot="context">
          <div class="video">
            <van-row>
              <template v-for="(videoItem, vid) in item.videoData">
                <van-col span="12" :key="vid">
                  <VideoItem
                    :videoImage="videoItem.videoImage"
                    :videoTitle="videoItem.videoTitle"
                    :status="videoItem.status"
                    :time="videoItem.time"
                  ></VideoItem>
                </van-col>
              </template>
            </van-row>
          </div>
        </template>
      </Module>
    </template>
  </div>
</template>

<script>
import Module from '@/components/home/module' // 整体模块
import NavBar from '@/layout/components/navBar'
import UserItem from '@/components/home/userItem' // 每个用户
import VideoItem from '@/components/home/videoItem' // 每个视频
import LineChart from '@/components/lineChart' // 折线图
import AnnularChart from '@/components/annularCharts' // 环形图
import ProgressItem from '@/components/progressItem' // progress进度条
import BarCharts from '@/components/barCharts' // 柱状图
export default {
  data() {
    return {
      moduleDate: [
        // 今日进店数据
        {
          img: require('@/assets/icon/enterStoreIcon.png'),
          title: '今日进店',
          smallTitle: '(247人)',
          type: 'enterStore',
          user: [
            {
              img: require('@/assets/enterStore/enterStore1.png'),
              date: '19:45:21',
              age: '35~40',
              count: 1,
              sex: 'woman'
            },
            {
              img: require('@/assets/enterStore/enterStore2.png'),
              date: '18:45:21',
              age: '35~40',
              count: 8,
              sex: 'man'
            },
            {
              img: require('@/assets/enterStore/enterStore3.png'),
              date: '17:45:21',
              age: '35~40',
              count: 1,
              sex: 'man'
            },
            {
              img: require('@/assets/enterStore/enterStore4.png'),
              date: '16:45:21',
              age: '35~40',
              count: 10,
              sex: 'man'
            },
            {
              img: require('@/assets/enterStore/enterStore5.png'),
              date: '15:45:21',
              age: '35~40',
              count: 3,
              sex: 'man'
            }
          ]
        },
        // 今日客流走势
        {
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
          dataName1: '昨日',
          data1: [50, 100, 50, 80, 106, 150, 50, 15],
          dataName2: '前天',
          data2: [25, 50, 75, 50, 120, 75, 25, 30],
          dataName3: '当前',
          data3: [50, 100, 150, 100, 250]
        },
        // 客群特征
        {
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
        },
        // 客流与销售分析
        {
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
        },
        // 本店视频
        {
          icon: 'iconrili',
          title: '本店视频',
          status: '更多>',
          type: 'video',
          videoData: [
            {
              videoImage: require('@/assets/videoImage/videoImage1.png'),
              videoTitle: '大厅1',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/videoImage2.png'),
              videoTitle: '大厅2',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/videoImage3.png'),
              videoTitle: '大厅3',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/videoImage3.png'),
              videoTitle: '人脸识别进门',
              status: 'offLine',
              time: '12:30:00'
            }
          ]
        }
      ]
    }
  },
  components: {
    NavBar,
    Module,
    UserItem,
    LineChart,
    AnnularChart,
    ProgressItem,
    BarCharts,
    VideoItem
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #eee;
  .context {
    margin-top: 10px;
  }
  .user {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
  }
  .selectDate {
    text-align: center;
    margin-top: 15px;
    .nowDay,
    .nowWeek,
    .nowMonth {
      width: 30%;
      height: 40px;
      display: inline-block;
      line-height: 40px;
      border: 1px solid #409eff;
      text-align: center;
      cursor: pointer;
    }
    .nowWeek:hover,
    .nowMonth:hover,
    .nowDay:hover {
      color: #fff;
      background-color: #409eff;
    }
    .nowDay {
      border-right: 0;
      border-radius: 8px 0 0 8px;
    }
    .nowMonth {
      border-radius: 0 8px 8px 0;
      border-left: 0;
    }
  }
  .annular {
    .round {
      display: inline-block;
      border: 1px solid #c32c1c;
      background-color: #ffffff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 2px;
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
    .annularRow {
      display: flex;
      align-items: center;
    }
    .typeCol {
      padding-bottom: 20px;
    }
  }
  .progress {
    margin-top: 5px;
  }
  .video {
    margin-top: 10px;
    .videoItem {
      margin: 2px;
    }
  }
}
.module {
  margin: 10px 15px 0 15px;
  border-radius: 8px;
  background-color: #fff;
}
.lineChart {
  margin-top: 15px;
  height: 200px;
}
</style>
