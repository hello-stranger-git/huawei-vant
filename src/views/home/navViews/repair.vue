<template>
  <div>
    <div class="bgc">
      <TopMessage title="待整改"></TopMessage>
      <Notice></Notice>
      <div style="padding: 0 12px">
        <van-row type="flex" justify="space-between">
          <!-- 第一个buttons -->
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
                {{ tabsArr[i].value }}
              </button>
            </div>
          </van-col>
          <!-- 第二个button -->
          <!-- <van-col>
            <div class="navBox">
              <button
                @click="toggleTab(1)"
                class="button"
                :style="{
                  background: activeTabIndex === 1 ? '#50a6ff' : '#fff',
                  color: activeTabIndex === 1 ? '#fff' : ''
                }"
              >
                {{ tabsArr[1].value }}
                <van-icon
                  :name="activeTabIndex === 1 ? tabArrow1 : tabArrow"
                  size="10"
                />
              </button>
            </div>
          </van-col> -->
          <!-- 第三个button -->
          <!-- <van-col>
            <div class="navBox">
              <button
                @click="open"
                class="button"
                :style="{
                  background: activeTabIndex === 2 ? '#50a6ff' : '#fff',
                  color: activeTabIndex === 2 ? '#fff' : ''
                }"
              >
                {{ tabsArr[2].value }}
                <van-icon
                  :name="activeTabIndex === 2 ? tabArrow1 : tabArrow"
                  size="10"
                />
                <div v-show="flag">
                  <div class="already" @click="stated">申诉完成</div>
                  <div class="already" @click="repaired">整改完成</div>
                </div>
              </button>
            </div>
          </van-col> -->
          <!-- 第四个button -->
          <!-- <van-col>
            <div class="navBox">
              <button
                @click="toggleTab(3)"
                class="button"
                :style="{
                  background: activeTabIndex === 3 ? '#50a6ff' : '#fff',
                  color: activeTabIndex === 3 ? '#fff' : ''
                }"
              >
                {{ tabsArr[3].value }}
              </button>
            </div>
          </van-col>-->
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
import tabArrow from '@/assets/icon/home/navTabs/tabArrow.png'
import tabArrow1 from '@/assets/icon/home/navTabs/tabArrow1.png'
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
      tabArrow,
      tabArrow1,
      tabsArr: [
        {
          value: '待整改'
        },
        {
          value: '待审核'
        },
        {
          value: '整改完成'
        },
        {
          value: '申述完成'
        }
      ],
      activeTabIndex: 0,
      activeTabArr: [Tab1, Tab2, Tab3, Tab4]
      // flag: false,
      // thirdIndex: 0
    }
  },
  methods: {
    toggleTab(index) {
      this.activeTabIndex = index
    },
    // open() {
    //   this.flag = !this.flag
    // },
    stated() {
      this.tabsArr[2].value = '申诉完成'
      this.activeTabIndex = 2
      this.thirdIndex = 0
    },
    repaired() {
      this.tabsArr[2].value = '整改完成'
      this.activeTabIndex = 2
      this.thirdIndex = 1
    }
  },
  created() {},
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
    padding: 7px 0 6px;
    position: relative;
    .already {
      margin-top: 14px;
      width: 100%;
      position: relative;
    }
    .already::after {
      content: '';
      display: block;
      position: absolute;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 1px;
      background: rgba(112, 112, 112, 0.5);
      transform: scale(0.5);
    }
  }
}
</style>
