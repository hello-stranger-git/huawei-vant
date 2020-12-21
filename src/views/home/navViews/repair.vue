<template>
  <div>
    <div class="bgc">
      <TopMessage></TopMessage>
      <Notice></Notice>
      <div style="padding: 0 12px">
        <van-row type="flex" justify="space-between">
          <!-- 四个button -->
          <van-col v-for="(item, i) in tabsArr" :key="i">
            <div class="navBox">
              <button
                @click="toggleTab(i)"
                class="button"
                :style="{
                  background: activeTabIndex === i ? '#50a6ff' : '#fff',
                  color: activeTabIndex === i ? '#fff' : ''
                }"
              >
                {{ item.value }}
              </button>
            </div>
          </van-col>
        </van-row>
        <div class="navBarItem">
          <!-- 动态组件 -->
          <component :is="activeTabArr[activeTabIndex]"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import Tab1 from './repairTab1'
import Tab2 from './repairTab2'
import Tab3 from './repairTab3'
import Tab4 from './repairTab4'
export default {
  components: {
    Notice,
    TopMessage,
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  data() {
    return {
      tabsArr: [
        {
          value: '待整改'
        },
        {
          value: '整改中'
        },
        {
          value: '客诉完成'
        },
        {
          value: '统计'
        }
      ],
      activeTabIndex: 0,
      activeTabArr: [Tab1, Tab2, Tab3, Tab4]
    }
  },
  methods: {
    toggleTab(index) {
      this.activeTabIndex = index
    }
  },
  created() {
    // 暂定
    // if (this.$route.query.index < 4) {
    //   this.activeTabIndex = Number(this.$route.query.index)
    // }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #eee;
}
.navBarItem {
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}
.navBox {
  margin: 20px 0 10px;
  .button {
    width: 78px;
    font-size: 12px;
    line-height: 17px;
    border-radius: 5px;
    background-color: #fff;
    border: 0;
    color: #4a92ff;
    padding: 7px 10px 6px;
  }
}
</style>
