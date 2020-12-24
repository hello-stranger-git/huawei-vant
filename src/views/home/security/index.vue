<template>
  <div class="security">
    <!-- 头部区域 -->
    <TopMessage :title="'安防'"></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <Menu :menuData="menuData"></Menu>
    <!-- tab切换 -->
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="新报警">
          <AlarmItem :alarmData="newAlarmData" class="newItem"></AlarmItem>
        </van-tab>
        <van-tab title="防区状态">
          <DefenseStatus
            :defenseStatus="defenseStatus"
            class="defenseStatusCom"
          ></DefenseStatus>
        </van-tab>
        <van-tab title="报警记录">
          <AlarmItem :alarmData="historyRecord" class="newItem"></AlarmItem>
        </van-tab>
        <van-tab title="控制记录">内容 4</van-tab>
        <van-tab title="主机状态">内容 5</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import Menu from '@/views/home/security/components/newAlarm/menu.vue'
import AlarmItem from '@/views/home/security/components/newAlarm/alarmItem.vue' // 新报警

import DefenseStatus from '@/views/home/security/components/defenseStatus/index.vue' // 防区状态
export default {
  data() {
    return {
      // 菜单数据
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
      // 报警信息数据
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
      // 历史记录信息
      historyRecord: [
        {
          title: '红外，周界报警（101）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:42:58',
          videoTitle: '大厅3',
          number: '002',
          region: '右门',
          status: '已处理',
          deal: '张鹏'
        },
        {
          title: '红外，周界报警（102）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:42:58',
          videoTitle: '大厅2',
          number: '002',
          region: '左门',
          status: '已处理',
          deal: '张鹏'
        },
        {
          title: '红外，周界报警（101）',
          img: require('@/assets/icon/home/security/alarmImg.png'),
          time: '12/02 19:42:58',
          videoTitle: '仓库2',
          number: '005',
          region: '仓库',
          status: '已处理',
          deal: '张鹏'
        }
      ],
      // 防区状态数据
      defenseStatus: [
        { id: 1, status: true, title: '左侧大门-红外感应-001' },
        { id: 2, status: true, title: '右侧大门-红外感应-003' },
        { id: 3, status: true, title: '大厅展柜-红外感应-003' },
        { id: 4, status: true, title: '收银台-红外感应-004' },
        { id: 5, status: false, title: '仓库后方-烟感-005' }
      ],
      // tab选中
      active: 0
    }
  },
  components: {
    TopMessage,
    Notice,
    AlarmItem,
    Menu,
    DefenseStatus
  }
}
</script>

<style lang="less" scoped>
.security {
  background-color: #efefef;
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
//新报警
/deep/.alarm {
  &:first-child {
    border-radius: 0 0 8px 8px;
  }
  margin-bottom: 12px;
  border-radius: 10px;
}
/deep/.van-tabs__content {
  padding-bottom: 10px;
}
//防区状态
/deep/.defenseStatus {
  &:last-child {
    border-radius: 0px 0px 10px 10px;
    .content {
      border: 0;
    }
  }
}
</style>
