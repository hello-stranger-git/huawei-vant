<template>
  <div>
    <div class="box" v-for="(item, i) in data" :key="i">
      <div class="title">
        <div class="label">{{ item.title }}</div>
        <div class="score">{{ item.score }}</div>
      </div>
      <div class="ban">
        <div class="detail">
          {{ item.text }}
        </div>
        <div
          class="statuBox"
          @click="
            $router.push({
              name: 'checkDetail',
              query: { appeal: item.waitAppeal }
            })
          "
          :style="{ backgroundColor: item.waitAppeal ? '#e60012' : '' }"
        >
          {{ item.waitAppeal ? '处理申诉' : '处理整改' }}
        </div>
      </div>
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="main">
        <div class="cell">
          <div class="time">{{ item.check.time }} 整改通知</div>
          <div class="role">点检人：{{ item.check.person }}</div>
        </div>
        <div class="cell">
          <div class="time">
            {{ item.state.time }}
            {{ item.waitAppeal ? '申诉提交' : '整改提交' }}
          </div>
          <div class="role">提交人：{{ item.state.person }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/screenImage/repairImage.png'
// import rightArrow from '@/assets/icon/home/navTabs/rightArrow.png'
// import bottomArrow from '@/assets/icon/home/navTabs/bottomArrow.png'
export default {
  data() {
    return {
      data: [],
      img,
      // arrowIndex: 1,
      // arrowArr: [rightArrow, bottomArrow],
      // moreValueArr: ['查看更多', '收起更多'],
      // showMore: true,
      colorArr: ['#e60012', '#ff7b40', '#4a92ff']
    }
  },
  methods: {
    // toggleMore(more, i) {
    //   if (more) {
    //     this.data[i].more = false
    //   } else {
    //     this.data[i].more = true
    //   }
    // }
  },
  created() {
    this.data = [
      {
        title: '扣除总分',
        waitAppeal: true, // 待申诉
        score: '-9',
        color: 0,
        text: '禁止抱着胳膊、跷二郎腿、手插口袋',
        check: { time: '11/30 12:35:16', person: '刘德华' },
        state: {
          time: '11/30 12:45:16',
          person: '张鹏',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        }
      },
      {
        title: '扣除总分',
        waitAppeal: false, // 待整改
        score: '-12',
        color: 1,
        text: '禁止抱着胳膊、跷二郎腿、手插口袋',
        check: { time: '11/30 12:35:16', person: '张学友' },
        state: {
          time: '11/30 12:45:16',
          person: '黎明'
        }
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.box {
  background-color: #fff;
  margin-bottom: 12px;
  border-radius: 10px;
  .title {
    font-size: 16px;
    display: flex;
    padding-top: 14px;
    .label {
      height: 22px;
      line-height: 22px;
      color: #141414;
      font-weight: bold;
      padding: 0 20px 0 9px;
    }
    .score {
      color: #e60012;
      height: 22px;
      line-height: 22px;
    }
  }
  .ban {
    position: relative;
    height: 17px;
    font-size: 12px;
    margin-top: 6px;
    .detail {
      padding-left: 9px;
      height: 17px;
      line-height: 17px;
      color: #141414;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .statu {
      position: absolute;
      right: 12px;
      top: 0;
      height: 17px;
      line-height: 17px;
      color: #e60012;
    }
    .statuColor {
      color: #65c466;
    }
    .statuBox {
      // position: absolute;
      // bottom: 0;
      // right: 12px;
      // height: 17px;
      // line-height: 17px;
      // font-size: 12px;
      // color: #959595;
      // border-radius: 16px;
      position: absolute;
      bottom: 0;
      right: 12px;
      width: 106px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      background-color: #4a92ff;
      border-radius: 16px;
    }
  }
  .img {
    height: 190px;
    margin: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    color: #959595;
    font-size: 12px;
    .cell {
      position: relative;
      padding-bottom: 10px;
      .time {
        height: 17px;
        line-height: 17px;
        padding-left: 12px;
      }
      .role {
        position: absolute;
        left: 70%;
        top: 0;
        height: 17px;
        line-height: 17px;
      }
      .reason {
        margin-top: 5px;
        padding-left: 13px;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
      }
    }
    .more {
      text-align: center;
      padding: 9px 0 16px;
      color: #4a92ff;
    }
  }
}
</style>
