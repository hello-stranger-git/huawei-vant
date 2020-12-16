<template>
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
          value: '今日进店'
        },
        {
          value: '客流走势'
        },
        {
          value: '客群特征'
        },
        {
          value: '客流与客单价'
        }
      ],
      activeTabIndex: 0
    }
  },
  methods: {
    toggleTab(index) {
      this.activeTabIndex = index
    }
  },
  created() {
    // 暂定
    if (this.$route.query.index < 4) {
      this.activeTabIndex = Number(this.$route.query.index)
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.navBarItem {
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}
.navBox {
  margin: 20px 0 10px;
  .button {
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
