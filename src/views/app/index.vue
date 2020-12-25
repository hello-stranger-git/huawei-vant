<template>
  <div class="application">
    <!-- tab选项区域 -->
    <van-tabs v-model="active">
      <!-- 使用中 -->
      <van-tab title="使用中" class="inUse ">
        <div v-for="(item, i) of appusedata" :key="i">
          <Appuse :item="item"></Appuse>
        </div>
      </van-tab>
      <!-- 未使用 -->
      <van-tab title="未使用" class="notUsed ">
        <div v-for="(item, i) of appdata" :key="i">
          <Appuse :item="item"></Appuse>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Appuse from '@/components/app/Appuse.vue' // 使用中

export default {
  components: {
    Appuse
    // Appnotused
  },
  data() {
    return {
      // tab默认选项
      active: 0,
      // 使用数据
      appusedata: [
        {
          title: '',
          datas: [
            {
              icon: require('@/assets/icon/app/saoma.png'),
              name: '设备绑定',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/cardClock.png'),
              name: '考勤',
              path: '/Attendance/AttendanceItem'
            },
            {
              icon: require('@/assets/icon/app/kaoping.png'),
              name: '考评',
              path: '/Assess'
            },
            {
              icon: require('@/assets/icon/app/dianjian.png'),
              name: '点检',
              path: '/SpotCheck'
            }
          ]
        },
        {
          title: '保险服务',
          datas: [
            {
              icon: require('@/assets/icon/app/luru.png'),
              name: '保单录入',
              unread: '25',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/chaxun.png'),
              name: '保单查询',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/daili.png'),
              name: '代理人信息',
              unread: '6',
              path: ''
            }
          ]
        },
        {
          title: '内部管理',
          datas: [
            {
              icon: require('@/assets/icon/app/huibao.png'),
              name: '工作汇报',
              unread: '102',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/gonggao.png'),
              name: '内部公告',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/keHuGuanLi.png'),
              name: '客户管理',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/renwu.png'),
              name: '任务管理',
              path: ''
            }
          ]
        }
      ],
      // 未使用数据
      appdata: [
        {
          title: '保险服务',
          datas: [
            {
              icon: require('@/assets/icon/app/luru.png'),
              name: '保单录入',
              unread: '25',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/chaxun.png'),
              name: '保单查询',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/daili.png'),
              name: '代理人信息',
              unread: '6',
              path: ''
            }
          ]
        },
        {
          title: '内部管理',
          datas: [
            {
              icon: require('@/assets/icon/app/huibao.png'),
              name: '工作汇报',
              unread: '102',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/gonggao.png'),
              name: '内部公告',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/keHuGuanLi.png'),
              name: '客户管理',
              path: ''
            },
            {
              icon: require('@/assets/icon/app/renwu.png'),
              name: '任务管理',
              path: ''
            }
          ]
        }
      ]
    }
  },
  created() {
    window.sessionStorage.setItem('activeTab', 3)
  }
}
</script>
<style lang="less" scoped>
.application {
  background-color: #fff;
  padding-bottom: 95px;
}
.inUse {
  padding-top: 8px;
}
.notUsed {
  padding-top: 28px;
}
// 去除选中横条
/deep/.van-tabs__line {
  height: 0;
}
/deep/.van-tabs__wrap {
  height: 70px;
}
/deep/.van-tabs__content {
  margin: 0 23px;
}
// 未选中样式
/deep/.van-tab {
  background-color: #efefef;
  .van-tab__text {
    font-size: 16px;
    color: #959595;
  }
}
// 选中样式
/deep/.van-tab--active {
  background-color: #fff;
  .van-tab__text {
    color: #4a92ff;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
