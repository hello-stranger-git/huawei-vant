<template>
  <div class="security">
    <!-- 头部区域 -->
    <TopMessage :title="'安防'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <!-- 菜单栏 -->
    <div class="menu">
      <div class="statusTitle">
        <span>当前状态：系统布防中</span>
      </div>
      <div class="menuNav">
        <div v-for="(item, index) in menuData" :key="index" class="menuItem">
          <img :src="item.img" width="50px" height="50px" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <!-- tab切换 -->
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="新报警">
          <AlarmItem :newAlarmData="newAlarmData" class="newItem"></AlarmItem>
        </van-tab>
        <van-tab title="防区状态">内容 2</van-tab>
        <van-tab title="报警记录">内容 3</van-tab>
        <van-tab title="控制记录">内容 4</van-tab>
        <van-tab title="主机状态">内容 5</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import AlarmItem from '@/views/home/security/components/newAlarm/alarmItem.vue'
export default {
  data() {
    return {
      menuData: [
        {
          img: require('@/assets/icon/home/security/protection.png'),
          title: '布防中'
        },
        {
          img: require('@/assets/icon/home/security/home.png'),
          title: '系统留守'
        },
        {
          img: require('@/assets/icon/home/security/alarm.png'),
          title: '取消警报'
        },
        {
          img: require('@/assets/icon/home/security/timeClock.png'),
          title: '定时布/撤防'
        }
      ],
      newAlarmData: [
        {
          title: '红外，周界报警（101）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:42:58',
          videoTitle: '大厅3',
          number: '002',
          region: '右门',
          status: '未处理'
        },
        {
          title: '红外，周界报警（101）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:42:58',
          videoTitle: '大厅2',
          number: '003',
          region: '左门',
          status: '未处理'
        },
        {
          title: '红外，周界报警（101）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:41:08',
          videoTitle: '仓库2',
          number: '005',
          region: '仓库',
          status: '未处理'
        }
      ],
      // tab选中
      active: 0
    }
  },
  components: {
    TopMessage,
    Notice,
    AlarmItem
  }
}
</script>

<style lang="less" scoped>
.menu {
  background-color: #fff;
  padding: 20px 20px 14px 20px;
  .statusTitle {
    span {
      font-size: 12px;
      font-weight: 400;
      color: #343434;
    }
  }
  .menuNav {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .menuItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
//tab切换样式
.tab {
  margin-top: 12px;
  margin-left: 12px;

  margin-right: 12px;
  /deep/.van-tabs__nav {
    background-color: #efefef;
  }
  /deep/.van-tabs__line {
    width: 23px;
    height: 2px;
    background-color: #4a92ff;
  }
  /deep/.van-tab {
    padding: 0;
  }
  /deep/.van-tab__text--ellipsis {
    font-size: 12px;
    font-weight: 400;
    color: #141414;
    opacity: 0.5;
  }
  /deep/.van-tab--active {
    width: 52px;
    height: 45px;
    background: #ffffff;
    border-radius: 10px 10px 0px 0px;
  }
}
/deep/.alarm {
  &:first-child {
    border-radius: 0 0 8px 8px;
  }
  margin-bottom: 12px;
  border-radius: 10px;
}
</style>
