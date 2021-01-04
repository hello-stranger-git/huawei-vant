<template>
  <div class="check">
    <!-- tab选项区域 -->
    <!-- <van-tabs v-model="active">
      <van-tab title="点检" class="inUse ">
        <SpotCheck></SpotCheck>
      </van-tab>
      <van-tab title="考评" class="notUsed ">
        <Assess></Assess>
      </van-tab>
    </van-tabs> -->
    <div class=" check_nav">
      <Project :datas="item"></Project>
    </div>
  </div>
</template>

<script>
// import SpotCheck from './components/spotCheck' // 点检
// import Assess from './components/assess' // 考评

import Project from '@/components/app/appuses/Project.vue' // 使用中单个小模块

export default {
  components: {
    Project
    // Appnotused
  },
  // components: {
  //   SpotCheck,
  //   Assess
  // },
  data() {
    return {
      // tab选项区域默认选中项
      // active: 0

      item: [
        {
          icon: require('@/assets/icon/check/kaoping.png'),
          name: '考评',
          path: '/AssessDetails'
        },
        {
          icon: require('@/assets/icon/check/dianjian.png'),
          name: '点检',
          path: '/CheckItem'
        }
      ]
    }
  },
  created() {
    window.sessionStorage.setItem('activeTab', 2)
  }
}
</script>
<style lang="less" scoped>
.check {
  background-color: #fff;
  padding: 223px 0 214px;
}
.check_nav {
  width: 203px;
  margin: auto;
  /deep/.project {
    dl {
      flex-basis: 100%;
      height: 93px;
      margin-bottom: 48px;
      dt {
        height: 60px;
      }
      .van-icon__image {
        width: 60px;
        height: 60px;
      }
      dd {
        font-size: 16px;
        margin-left: 41px;
      }
    }
  }
}
// tab选项区域样式
// .van-tabs {
//   /deep/.van-tabs__wrap {
//     height: 70px;
//     // 去除选中下方横条
//     .van-tabs__line {
//       height: 0;
//     }
//   }
//   // 未选中样式
//   /deep/.van-tab {
//     background-color: #efefef;
//     .van-tab__text {
//       font-size: 16px;
//       color: #959595;
//     }
//   }
//   // 选中样式
//   /deep/.van-tab--active {
//     background-color: #fff;
//     .van-tab__text {
//       color: #4a92ff;
//       font-size: 18px;
//       font-weight: bold;
//     }
//   }
// }
</style>
