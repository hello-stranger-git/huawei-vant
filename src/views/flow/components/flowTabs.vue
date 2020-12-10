<template>
  <div class="navBarItem">
    <van-row>
      <van-col span="6" v-for="(item, i) in tabsArr" :key="i">
        <div
          :class="['tabBox', activeTabIndex === i ? 'activeClass' : '']"
          @click="toggleTab(i)"
        >
          <div class="iconBox" :style="{ background: item.bgc }">
            <van-icon
              :class-prefix="'iconfont ' + item.icon"
              size="26"
              color="#d81e06"
            />
          </div>
          <p>{{ item.value }}</p>
        </div>
      </van-col>
    </van-row>
    <component :is="activeTabArr[activeTabIndex]"></component>
  </div>
</template>

<script>
import fristTab from './fristTab'
import secondTab from './secondTab'
import thirdTab from './thirdTab'
import fourthTab from './fourthTab'
export default {
  components: {
    fristTab,
    secondTab,
    thirdTab,
    fourthTab
  },
  data() {
    return {
      activeTabArr: ['fristTab', 'secondTab', 'thirdTab', 'fourthTab'],
      tabsArr: [
        {
          value: '今日进店',
          background: '#50a6ff',
          icon: 'iconweibiaoti4',
          bgc: '#50a6ff'
        },
        {
          value: '今日客流走势',
          background: '#50a6ff',
          icon: 'iconjintian',
          bgc: '#b0eb9b'
        },
        {
          value: '客群特征',
          background: '#50a6ff',
          icon: 'iconkequn',
          bgc: '#ffcd41'
        },
        {
          value: '客流与客单价',
          background: '#50a6ff',
          icon: 'iconkehuxiaoshou',
          bgc: '#ebeb9b'
        }
      ],
      activeTabIndex: 0
    }
  },
  methods: {
    toggleTab(index) {
      this.activeTabIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.navBarItem {
  margin: 10px 15px 0;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}
.tabBox.activeClass {
  background-color: #fff;
}
.tabBox {
  background-color: #c9c9c9;
  height: 80px;
  text-align: center;
  line-height: 70px;
  position: relative;
  border-radius: 10px 10px 0 0;
  border: 1px solid #50a6ff;
  border-bottom: none;
  margin: 0px -1px 0px 0px;
  .iconBox {
    width: 40px;
    height: 40px;
    // background-color: #50a6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 40%;
    margin: -20px 0 0 -20px;
  }
  p {
    width: 100%;
    height: 8px;
    font-size: 14px;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
