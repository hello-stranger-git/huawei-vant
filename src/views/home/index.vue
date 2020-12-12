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
                :crossStore="user.crossStore"
                :vip="user.vip"
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
              <van-col span="12" class="annularCol">
                <AnnularChart
                  :series="item.data"
                  :legend="[]"
                  :seriesName="item.seriesName"
                ></AnnularChart>
                <div class="annularPeople">
                  <span class="annularPeopleCount">247人</span>
                  <p class="annularPeopleCountTitle">总人数</p>
                </div>
              </van-col>
              <van-col span="12" class="typeCol">
                <template v-for="(type, tid) in item.data">
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
          <template v-for="(pro, pid) in item.progressDate">
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
            <van-row type="flex">
              <!-- 四个视频 -->
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
            <van-row type="flex" justify="center">
              <van-col
                ><div class="updateTime">
                  数据更新时间：{{ updateTime }}
                </div></van-col
              >
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
      updateTime: new Date().toLocaleString(),
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
              sex: 'woman',
              crossStore: false,
              vip: false
            },
            {
              img: require('@/assets/enterStore/enterStore2.png'),
              date: '18:45:21',
              age: '35~40',
              count: 2,
              sex: 'man',
              crossStore: true,
              vip: true
            },
            {
              img: require('@/assets/enterStore/enterStore3.png'),
              date: '17:45:21',
              age: '35~40',
              count: 6,
              sex: 'man',
              crossStore: true,
              vip: false
            },
            {
              img: require('@/assets/enterStore/enterStore4.png'),
              date: '16:45:21',
              age: '35~40',
              count: 3,
              sex: 'man',
              crossStore: false,
              vip: true
            }
          ]
        },
        // 今日客流走势
        {
          img: require('@/assets/icon/flowTrend.png'),
          title: '今日客流走势',
          label: ['当前', '昨日', '前天'],
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
        // 客群特征
        {
          img: require('@/assets/icon/features.png'),
          title: '客群特征',
          type: 'features',
          seriesName: '大数据',
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
        // 客流与销售分析
        {
          img: require('@/assets/icon/price.png'),
          title: '客流与销售分析',
          type: 'sale',
          label: ['销售额', '客流人数'],
          xLabel: [
            '今日',
            '日',
            '六',
            '歇',
            '11/12',
            '11/11',
            '11/13',
            '11/10'
          ],
          yName2: '---客单价',
          dataName1: '销售额',
          data1: [1336081, 1003681, 1603681, 1903681, 903681, 606584, 903681],
          // dataName2: '均值',
          // data2: [500, 600, 700, 650, 600, 500, 650],
          dataName3: '客流人数',
          data3: [300, 400, 500, 450, 400, 300, 500]
        },
        // 本店视频
        {
          img: require('@/assets/icon/homeVideo.png'),
          title: '本店视频',
          status: '更多>',
          type: 'video',
          videoData: [
            {
              videoImage: require('@/assets/videoImage/homeVideo1.png'),
              videoTitle: '大厅1',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/homeVideo2.png'),
              videoTitle: '大厅2',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/homeVideo3.png'),
              videoTitle: '大厅3',
              time: '16:22:30'
            },
            {
              videoImage: require('@/assets/videoImage/homeVideo1.png'),
              videoTitle: '人脸识别进门',
              status: 'offLine',
              time: '12:30:00'
            }
          ]
        }
      ],
      todayEnter: {
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
      }
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
    margin-top: 12px;
    padding-left: 7px;
    display: flex;
    justify-content: center;
    .nowDay,
    .nowWeek,
    .nowMonth {
      box-sizing: border-box;
      width: 90px;
      height: 30px;
      display: inline-block;
      line-height: 30px;
      text-align: center;
      border: 1px solid #4a92ff;
      cursor: pointer;
      border-radius: 5px;
      color: #4a92ff;
      font-size: 14px;
      font-weight: 300;
    }
    .nowWeek:hover,
    .nowMonth:hover,
    .nowDay:hover {
      color: #fff;
      background-color: #4a92ff;
    }
    .nowWeek,
    .nowMonth {
      margin-left: 22px;
    }
  }
  .annular {
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
          }
          .annularPeopleCountTitle {
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }
  .progress {
    margin: 19px 13px 0;
  }
  .video {
    margin-top: 10px;
    .van-row--flex {
      display: flex;
      justify-content: space-evenly;
    }
    .videoItem {
      width: 100%;
    }
    .van-col--12 {
      width: auto;
    }
  }
}
.module {
  margin: 10px 12px 0 12px;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
}
.lineChart {
  margin-top: 14px;
  height: 158px;
}
.updateTime {
  font-size: 10px;
  height: 14px;
  line-height: 14px;
  opacity: 0.5;
}
</style>
