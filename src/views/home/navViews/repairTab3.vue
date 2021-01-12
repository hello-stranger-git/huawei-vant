<template>
  <div>
    <!-- 整改完成 -->
    <div>
      <div class="box" v-for="(item, i) in repaire" :key="i">
        <div class="title">
          <div class="label">{{ item.title }}</div>
          <div class="score">{{ item.score }}</div>
        </div>
        <div class="ban">
          <div class="detail">
            {{ item.text }}
          </div>
          <div :class="['statu', item.statu.flag ? 'statuColor' : '']">
            状态：{{ item.statu.value }}
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
            <div class="time">{{ item.state.time }} 整改提交</div>
            <div class="role">提交人：{{ item.state.person }}</div>
            <div class="reason" v-if="item.more">
              {{ item.state.reason }}
            </div>
          </div>
          <div class="cell">
            <div class="time">{{ item.result.time }} 审核通过</div>
            <div class="role">审核人：{{ item.result.person }}</div>
            <div class="reason" v-if="item.more">
              {{ item.result.reason }}
            </div>
          </div>
          <!-- <div class="more" @click="toggleRepairMore(item.more, i)">
            true显示收起，false显示更多
            {{ item.more ? moreValueArr[1] : moreValueArr[0] }}
            <van-icon :name="item.more ? arrowArr[1] : arrowArr[0]" size="9" />
          </div> -->
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
      // state: [],
      repaire: [],
      img
      // arrowIndex: 1,
      // arrowArr: [rightArrow, bottomArrow]
      // moreValueArr: ['查看更多', '收起更多'],
      // showMore: true
    }
  },
  methods: {
    // toggleStateMore(more, i) {
    //   this.state[i].more = !more
    // },
    // toggleRepairMore(more, i) {
    //   this.repaire[i].more = !more
    // }
  },
  created() {
    this.repaire = [
      {
        title: '员工行为',
        text: '禁止抱着胳膊、跷二郎腿、手插口袋',
        // more: false,
        score: '-3',
        statu: { value: '整改成功', flag: true },
        check: { time: '11/30 12:35:16', person: '刘德华' },
        state: {
          time: '11/30 12:45:16',
          person: '张鹏',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        },
        result: {
          time: '11/30 12:55:16',
          person: '陈某某',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        }
      },
      {
        title: '仓库卫生',
        text: '禁止抱着胳膊、跷二郎腿、手插口袋',
        // more: false,
        score: '-3',
        statu: { value: '整改成功', flag: true },
        check: { time: '11/30 12:35:16', person: '张学友' },
        state: {
          time: '11/30 12:45:16',
          person: '黎明',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
        },
        result: {
          time: '11/30 12:55:16',
          person: '郭富城',
          reason: '申诉理由：不是本店员工，没有产生以下行为'
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
