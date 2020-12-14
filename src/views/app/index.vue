<template>
  <div class="application">
    <!-- tab选项区域 -->
    <van-tabs v-model="active">
      <!-- 使用中 -->
      <van-tab title="使用中">
        <div v-for="(item, i) of appusedata" :key="i">
          <Appuse :item="item"></Appuse>
        </div>
      </van-tab>
      <!-- 未使用 -->
      <van-tab title="未使用">
        <div v-for="(item, i) of appdata" :key="i">
          <Appnotused :item="item"></Appnotused>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Appuse from '@/components/app/Appuse.vue' // 使用中
import Appnotused from '@/components/app/AppNotUsed.vue' // 未使用

export default {
  components: {
    Appuse,
    Appnotused
  },
  data() {
    return {
      // tab默认选项
      active: 0,
      // 使用数据
      appusedata: [
        {
          title: '保险服务',
          datas: [
            {
              icon: 'icongongdan',
              name: '保单录入'
            },
            {
              icon: 'iconchaxun',
              name: '保单查询'
            },
            {
              icon: 'icongongyingshangdailishang',
              name: '代理人信息'
            }
          ]
        },
        {
          title: '内部管理',
          datas: [
            {
              icon: 'iconEmail',
              name: '工作汇报'
            },
            {
              icon: 'icongonggao',
              name: '内部公告'
            },
            {
              icon: 'iconkequn',
              name: '客户管理'
            },
            {
              icon: 'iconziyuan',
              name: '任务管理'
            }
          ]
        }
      ],
      // 未使用数据
      appdata: [
        {
          name: '安全服务',
          icon: 'iconanquan',
          text: '24小时全天候守护你的私人财产',
          banner: require('@/assets/appimage/appbanner1.png')
        },
        {
          name: '考勤管理',
          icon: 'iconkaoqinguanlix',
          text: '多地址设置，多班次考勤，考情数据报表',
          banner: require('@/assets/appimage/appbanner2.png')
        },
        {
          name: '会员管理',
          icon: 'iconcanpinhuihuiyuanv6',
          text: '移动端CRM，会员属性分析，跟踪提醒，精准营销',
          banner: require('@/assets/appimage/appbanner3.png')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.application {
  background-color: #eee;
  height: 100%;
}
// tab选项样式
/deep/.van-tabs__line {
  height: 0;
}
/deep/.van-tab--active {
  background-color: #eeeeee;
}
/deep/.van-tabs__content {
  padding: 3%;
  background-color: #eee;
}
/deep/.van-tabs__wrap {
  height: 56px;
}
/deep/.van-tab__text {
  color: black;
  font-weight: bolder;
  font-size: 16px;
}
</style>
