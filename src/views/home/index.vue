<template>
  <div class="home">
    <NavBar></NavBar>

    <!-- 每日进店模块 -->
    <Module
      :icon="enterStore.img"
      :title="enterStore.title"
      :status="enterStore.status"
      :smallTitle="enterStore.smallTitle"
      :nav="enterStore.nav"
      :routeIndex="0"
    >
      <template v-if="enterStore.type == 'enterStore'" slot="context">
        <div class="user">
          <template v-for="(user, uid) in enterStore.user">
            <UserItem
              :key="uid"
              :img="user.img"
              :date="user.date"
              :age="user.age"
              :count="user.count"
              :sex="user.sex"
              :crossStore="user.crossStore"
              :vip="user.vip"
              :details="user.details"
            ></UserItem>
          </template>
        </div>
      </template>
    </Module>

    <!-- 客流走势模块 -->
    <Module
      :icon="todayFlow.img"
      :title="todayFlow.title"
      :status="todayFlow.status"
      :smallTitle="todayFlow.smallTitle"
      :nav="todayFlow.nav"
      :routeIndex="1"
    >
      <template v-if="todayFlow.type == 'flow'" slot="context">
        <LineChart
          lineChartsId="flowId"
          :label="todayFlow.label"
          :xLabel="todayFlow.xLabel"
          :xName="todayFlow.xName"
          :yName="todayFlow.yName"
          :dataName1="todayFlow.dataName1"
          :data1="todayFlow.data1"
          :dataName2="todayFlow.dataName2"
          :data2="todayFlow.data2"
          :dataName3="todayFlow.dataName3"
          :data3="todayFlow.data3"
        ></LineChart>
      </template>
    </Module>

    <!-- 客流特征模块 -->
    <Module
      :icon="flowFeature.img"
      :title="flowFeature.title"
      :status="flowFeature.status"
      :smallTitle="flowFeature.smallTitle"
      :nav="flowFeature.nav"
      :routeIndex="2"
    >
      <template v-if="flowFeature.type == 'features'" slot="context">
        <div class="selectDate">
          <span :class="['nowDay', defaultActive ? 'defaultActive' : '']"
            >今日</span
          >
          <span class="nowWeek" @click="btn">本周</span>
          <span class="nowMonth" @click="btn">本月</span>
        </div>
        <div class="annular">
          <van-row class="annularRow">
            <van-col span="12" class="annularCol">
              <AnnularChart
                :series="flowFeature.data"
                :legend="[]"
                :seriesName="flowFeature.seriesName"
              ></AnnularChart>
              <div class="annularPeople">
                <span class="annularPeopleCount">247人</span>
                <p class="annularPeopleCountTitle">总人数</p>
              </div>
            </van-col>
            <van-col span="12" class="typeCol">
              <template v-for="(type, tid) in flowFeature.data">
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
        <template v-for="(pro, pid) in flowFeature.progressDate">
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

    <!-- 客流与销售分析 -->
    <Module
      :icon="price.img"
      :title="price.title"
      :status="price.status"
      :smallTitle="price.smallTitle"
      :nav="price.nav"
      :routeIndex="3"
    >
      <template v-if="price.type == 'sale'" slot="context">
        <BarCharts
          :label="price.label"
          :xLabel="price.xLabel"
          :xName="price.xName"
          :yName2="price.yName2"
          :dataName1="price.dataName1"
          :data1="price.data1"
          :dataName3="price.dataName3"
          :data3="price.data3"
        ></BarCharts>
      </template>
    </Module>

    <!-- 本店视频 -->
    <Module
      :icon="video.img"
      :title="video.title"
      :status="video.status"
      :smallTitle="video.smallTitle"
      :nav="video.nav"
      :routeIndex="4"
    >
      <template v-if="video.type == 'video'" slot="context">
        <div class="video">
          <van-row type="flex">
            <!-- 四个视频 -->
            <template v-for="(videoItem, vid) in video.videoData">
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
      defaultActive: true, // 客群特征按钮默认选中
      // 今日进店数据
      enterStore: {
        img: require('@/assets/icon/home/enterStore/enterStoreIcon.png'),
        title: '今日进店',
        smallTitle: '(247人)',
        type: 'enterStore',
        nav: 'home',
        user: [
          {
            img: require('@/assets/enterStore/enterStore1.png'),
            date: '19:45:21',
            age: '35~40',
            count: 1,
            sex: 'woman',
            crossStore: false,
            vip: false,
            details: {
              name: '陈总',
              sex: '女',
              age: '23岁',
              userImg: require('@/assets/enterStore/enterStore1.png'),
              consume: '10,1411,00',
              latelyDate: '12月6日 10::22:04',
              record: [
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore1.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '陈某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore1.png'),
                  store: '深圳龙岗区华为体验店'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore1.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某'
                }
              ]
            }
          },
          {
            img: require('@/assets/enterStore/enterStore2.png'),
            date: '18:45:21',
            age: '35~40',
            count: 2,
            sex: 'man',
            crossStore: true,
            vip: true,
            details: {
              name: '刘总',
              sex: '男',
              age: '23岁',
              userImg: require('@/assets/enterStore/enterStore2.png'),
              consume: '10,1411,00',
              latelyDate: '12月6日 10::22:04',
              record: [
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore2.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore2.png'),
                  store: '深圳龙岗区华为体验店'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore2.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore2.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore2.png'),
                  store: '深圳龙岗区华为体验店'
                }
              ]
            }
          },
          {
            img: require('@/assets/enterStore/enterStore3.png'),
            date: '17:45:21',
            age: '35~40',
            count: 6,
            sex: 'man',
            crossStore: true,
            vip: false,
            details: {
              name: '吴总',
              sex: '男',
              age: '23岁',
              userImg: require('@/assets/enterStore/enterStore3.png'),
              consume: '10,1411,00',
              latelyDate: '12月6日 10::22:04',
              record: [
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore3.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore3.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                }
              ]
            }
          },
          {
            img: require('@/assets/enterStore/enterStore4.png'),
            date: '16:45:21',
            age: '35~40',
            count: 3,
            sex: 'man',
            crossStore: false,
            vip: true,
            details: {
              name: '李总',
              sex: '男',
              age: '23岁',
              userImg: require('@/assets/enterStore/enterStore4.png'),
              consume: '10,1411,00',
              latelyDate: '12月6日 10::22:04',
              record: [
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore4.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore4.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                },
                {
                  recordDate: '12月6日 10:22:04',
                  userImg: require('@/assets/enterStore/enterStore4.png'),
                  store: '深圳龙岗区华为体验店',
                  receptionist: '李某某',
                  money: '2,2200,00'
                }
              ]
            }
          }
        ]
      },
      // 今日客流走势
      todayFlow: {
        img: require('@/assets/icon/home/flow/flowTrend.png'),
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
      // 客群特征
      flowFeature: {
        img: require('@/assets/icon/home/feature/features.png'),
        title: '客群特征',
        type: 'features',
        seriesName: '大数据',
        nav: 'home',
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
            leftIcon: require('@/assets/icon/home/feature/manIcon.png'),
            rightTitle: '女性',
            rightNumber: '44',
            rightIcon: require('@/assets/icon/home/feature/womanIcon.png'),
            percentage: 70,
            trackColor: '#F98181',
            sex: 'woman'
          },
          {
            leftTitle: '回头客',
            leftNumber: '256',
            leftIcon: require('@/assets/icon/home/feature/keHu.png'),
            percentage: 80,
            progressColor: '#56BE9B'
          },
          {
            leftTitle: '会员',
            leftNumber: '165',
            leftIcon: require('@/assets/icon/home/feature/huiYuan.png'),
            percentage: 30,
            progressColor: '#F8C498'
          }
        ]
      },
      // 客流与销售分析
      price: {
        img: require('@/assets/icon/home/price/price.png'),
        title: '客流与销售分析',
        type: 'sale',
        label: ['销售额', '客流人数'],
        nav: 'home',
        xLabel: ['今日', '日', '六', '歇', '11/12', '11/11', '11/13', '11/10'],
        yName2: '---客单价',
        dataName1: '销售额',
        data1: [1336081, 1003681, 1603681, 1903681, 903681, 606584, 903681],
        dataName3: '客流人数',
        data3: [300, 400, 500, 450, 400, 300, 500]
      },
      // 本店视频
      video: {
        img: require('@/assets/icon/home/video/homeVideo.png'),
        title: '本店视频',
        type: 'video',
        nav: 'home',
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
    }
  },
  methods: {
    btn() {
      this.defaultActive = false
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
  },
  created() {
    window.sessionStorage.setItem('activeTab', 0)
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #eee;
  padding-bottom: 95px;
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
      border: 1px solid rgba(74, 146, 255, 0.7);
      cursor: pointer;
      border-radius: 5px;
      color: rgba(74, 146, 255, 0.7);
      font-size: 14px;
      font-weight: 300;
    }
    .nowWeek:hover,
    .nowMonth:hover,
    .nowDay:hover {
      color: #fff;
      background-color: #4a92ff;
      border: 1px solid #4a92ff;
    }
    .defaultActive {
      color: #fff;
      background-color: #4a92ff;
      border: 1px solid #4a92ff;
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
