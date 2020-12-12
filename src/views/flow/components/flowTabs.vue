<template>
  <div class="navBarItem">
    <van-row type="flex" justify="space-between">
      <!-- 四个button -->
      <van-col v-for="(item, i) in tabsArr" :key="i">
        <div class="navBox">
          <button
            @click="toggleTab(i)"
            class="button"
            :style="{
              background: activeTabIndex === i ? ' #50a6ff' : '#fff',
              color: activeTabIndex === i ? ' #fff' : ''
            }"
          >
            {{ item.value }}
          </button>
        </div>
      </van-col>
    </van-row>
    <!-- 动态组件 -->
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
  margin: 20px 15px 0;
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
.navBox {
  margin-bottom: 10px;
  .button {
    font-size: 12px;
    line-height: 17px;
    border-radius: 8px;
    background-color: #fff;
    border: 0;
    color: #4a92ff;
    padding: 7px 10px 6px;
  }
}
</style>
