<template>
  <div>
    <div class="box" v-for="(item, i) in data" :key="i">
      <div class="title">
        <div class="label">{{ item.title }}</div>
        <div class="score">{{ item.score }}</div>
      </div>
      <div class="ban">
        <div class="detail">
          禁止抱着胳膊、跷二郎腿、手插口袋
        </div>
        <div
          class="statuBox"
          :style="{ background: colorArr[item.color] }"
          @click="toRepairing(item)"
        >
          待整改
        </div>
      </div>
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="main">
        <div class="cell">
          <div class="time">{{ item.check.time }} 开始整改</div>
          <div class="role">监察人：{{ item.check.person }}</div>
        </div>
        <div class="cell" v-if="item.state">
          <div class="time">{{ item.state.time }} 发起申诉</div>
          <div class="role">申诉人：{{ item.state.person }}</div>
          <div class="reason" v-show="item.more">
            {{ item.state.reason }}
          </div>
        </div>
        <div class="cell" v-if="item.result">
          <div class="time">{{ item.result.time }} 驳回申诉</div>
          <div class="role">处理人：{{ item.result.person }}</div>
          <div class="reason" v-show="item.more">
            {{ item.result.reason }}
          </div>
        </div>
        <div
          class="more"
          @click="toggleMore(item.more, i)"
          v-if="item.check.reason"
        >
          {{ item.more ? moreValueArr[1] : moreValueArr[0] }}
          <van-icon :name="item.more ? arrowArr[1] : arrowArr[0]" size="9" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/screenImage/repairImage.png'
import rightArrow from '@/assets/icon/home/navTabs/rightArrow.png'
import bottomArrow from '@/assets/icon/home/navTabs/bottomArrow.png'
export default {
  data() {
    return {
      data: [],
      img,
      arrowIndex: 1,
      arrowArr: [rightArrow, bottomArrow],
      moreValueArr: ['查看更多', '收起更多'],
      showMore: true,
      colorArr: ['#e60012', '#ff7b40', '#4a92ff']
    }
  },
  methods: {
    toggleMore(more, i) {
      if (more) {
        this.data[i].more = false
      } else {
        this.data[i].more = true
      }
    },
    toRepairing(data) {
      this.$router.push({ name: 'Repairing', params: data })
    }
  },
  created() {
    this.data = [
      {
        title: '扣除总分',
        more: false,
        score: '-13',
        color: 0,
        statu: { value: '申述驳回', flag: false },
        check: { time: '11/30 12:35:16', person: '刘德华' },
        state: {
          time: '11/30 12:45:16',
          person: '张鹏',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        }
        // result: {
        //   time: '11/30 12:55:16',
        //   person: '陈某某',
        //   reason: '申诉理由：不是本店员工，没有产生以下行为'
        // }
      },
      {
        title: '扣除总分',
        more: false,
        score: '-23',
        color: 1,
        statu: { value: '申述成功', flag: true },
        check: { time: '11/30 12:35:16', person: '张学友' },
        state: {
          time: '11/30 12:45:16',
          person: '黎明',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        }
        // result: {
        //   time: '11/30 12:55:16',
        //   person: '郭富城',
        //   reason: '申诉理由：不是本店员工，没有产生以下行为'
        // }
      },
      {
        title: '扣除总分',
        more: false,
        score: '-3',
        color: 2,
        statu: { value: '申述成功', flag: true },
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
      position: absolute;
      bottom: 0;
      right: 12px;
      width: 106px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      color: #fff;
      text-align: center;
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
