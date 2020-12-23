<template>
  <div>
    <div class="container1" v-for="(query, index) in data" :key="index">
      <div
        class="cell"
        v-for="(item, i) in query"
        :key="i"
        @click="changeRouter(item.to)"
      >
        <!-- // 图标 -->
        <div class="icon">
          <van-icon :name="item.icon" size="24" />
        </div>
        <!-- 描述 -->
        <div class="main" :class="i === query.length - 1 ? 'noBorder' : ''">
          {{ item.value }}
        </div>
        <!-- 所有的右侧内容 -->
        <div class="right">
          <!-- 补录销售额 -->
          <div v-if="item.input" class="input">
            <div
              class="sale"
              @click="
                ;(showDialog = true), (date = '今天销售总额'), (jobTime = false)
              "
            >
              今天
            </div>
            <div
              class="sale"
              @click=";(showDialog = true), (date = '昨天销售总额')"
            >
              昨天
            </div>
            <div
              class="sale"
              @click=";(showDialog = true), (date = '前天销售总额')"
            >
              前天
            </div>
            <!-- 遮罩内容 -->
            <van-popup v-model="showDialog">
              <div class="total">{{ date }}</div>
              <!-- 金额补录 -->
              <div class="saleInput" v-if="!jobTime">
                <div class="rmb">￥</div>
                <input
                  type="number"
                  placeholder="请输入金额..."
                  v-model="sale"
                />
              </div>
              <!-- 上班时间选择框 -->
              <div v-else class="jobTime">
                <div class="startTime">
                  <input
                    type="number"
                    v-model="startHour"
                    @input="limitStartHour"
                  />
                  <span class="move1px">:</span>
                  <input
                    type="number"
                    v-model="startMin"
                    @input="limitStartMin"
                  />
                  <span class="move1px">:</span>
                  <span>00</span>
                </div>
                <div class="borderTime"></div>
                <div class="endTime">
                  <input
                    type="number"
                    v-model="endHour"
                    @input="limitEndHour"
                  />
                  <span class="move1px">:</span>
                  <input type="number" v-model="endMin" @input="limitEndMin" />
                  <span class="move1px">:</span>
                  <span>00</span>
                </div>
                <div class="work">上班</div>
                <div class="offWork">下班</div>
              </div>
              <!-- 按钮 -->
              <button class="agreeButton" @click="handle">
                {{ agree }}
              </button>
              <button class="cancelButton" @click="cancel">
                取消
              </button>
            </van-popup>
          </div>
          <!-- 提示和箭头 -->
          <div class="rightBox">
            <span
              v-if="item.label"
              @click="item.value === '上下班时间' ? openTime(item.value) : ''"
              >{{ item.value === '上下班时间' ? fullTime : item.label }}</span
            >
            <van-icon :name="arrow" size="14" class="arrow" v-if="item.arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from '@/assets/icon/arrow14px.png'
import { Toast } from 'vant'
var last = new Date(0)
var now = new Date()
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      arrow,
      showDialog: false,
      sale: '',
      agree: '确定',
      date: '',
      confirm: false,
      jobTime: false,
      startHour: '',
      startMin: '',
      endHour: '',
      endMin: '',
      onJobTimeArr: ['08', '00'],
      offJobTimeArr: ['22', '00']
    }
  },
  methods: {
    openTime(a) {
      // console.log(a)
      this.date = '上下班时间'
      this.jobTime = true
      this.showDialog = true
      this.startHour = this.onJobTimeArr[0]
      this.startMin = this.onJobTimeArr[1]
      this.endHour = this.offJobTimeArr[0]
      this.endMin = this.offJobTimeArr[1]
    },
    // 销售额补录
    handle() {
      if (this.sale.trim().length > 0) {
        if (!this.confirm) {
          this.jieliu(this.submit)()
        } else {
          Toast('操作成功')
          this.showDialog = false
          this.confirm = false
          this.sale = ''
        }
      } else {
        // 销售额补录
        if (!this.jobTime) {
          Toast('请输入正确的金额')
        } else {
          // 修改上下班时间
          this.onJobTimeArr = [this.startHour, this.startMin]
          this.offJobTimeArr = [this.endHour, this.endMin]
          this.showDialog = false
          Toast('时间更改成功')
        }
      }
    },
    submit() {
      var time = 6
      time -= 1
      this.agree = '确定(' + time + ')'
      var timer = setInterval(() => {
        time -= 1
        this.agree = '确定(' + time + ')'
        if (time === 0) {
          this.agree = '确定'
          this.confirm = true
          clearInterval(timer)
        }
      }, 1000)
    },
    cancel() {
      this.showDialog = false
      this.sale = ''
    },
    jieliu(fn, delay = 5000) {
      now = new Date()
      return function() {
        if (now - last > delay) {
          fn()
          last = now
        }
      }
    },
    limitStartHour() {
      if (this.startHour.length > 2) {
        this.startHour = this.startHour.slice(0, 2)
      }
      if (this.startHour > 23) {
        this.startHour = 23
      }
    },
    limitStartMin() {
      if (this.startMin.length > 2) {
        this.startMin = this.startMin.slice(0, 2)
      }
      if (this.startMin > 59) {
        this.startMin = 59
      }
    },
    limitEndHour() {
      if (this.endHour.length > 2) {
        this.endHour = this.endHour.slice(0, 2)
      }
      if (this.endHour > 24) {
        this.startHour = 24
      }
    },
    limitEndMin() {
      if (this.endMin.length > 2) {
        this.endMin = this.endMin.slice(0, 2)
      }
      if (this.endMin > 59) {
        this.endMin = 59
      }
    },
    changeRouter(to) {
      if (to) {
        this.$router.push({ path: to, params: { jump: true } })
      }
    }
  },
  mounted() {},
  computed: {
    fullTime() {
      return (
        this.onJobTimeArr[0] +
        ':' +
        this.onJobTimeArr[1] +
        '-' +
        this.offJobTimeArr[0] +
        ':' +
        this.offJobTimeArr[1]
      )
    }
  }
}
</script>

<style lang="less" scoped>
.container1 {
  margin-top: 18px;
  border-radius: 10px;
  background-color: #fff;
  .cell {
    height: 46px;
    line-height: 48px;
    display: flex;
    border: 1px;
    position: relative;
    .icon {
      width: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main {
      flex: 1;
      color: #343434;
      font-size: 14px;
      position: relative;
    }
    .main::after {
      content: '';
      display: block;
      position: absolute;
      left: -50%;
      width: 200%;
      height: 1px;
      background: rgba(112, 112, 112, 0.5);
      transform: scale(0.5);
    }
    .noBorder::after {
      height: 0;
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      .rightBox {
        height: 46px;
        .van-switch {
          margin-right: 12px;
          float: right;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      span {
        height: 17px;
        line-height: 17px;
        margin-right: 8px;
        font-size: 12px;
        color: rgba(52, 52, 52, 0.5);
      }
      .arrow {
        margin-right: 12px;
        vertical-align: middle;
      }
      .sale {
        display: inline-block;
        width: 51px;
        height: 24px;
        font-size: 12px;
        color: #343434;
        line-height: 24px;
        border-radius: 7px;
        border: 1px solid #b9b9b9;
        text-align: center;
        margin-right: 12px;
        padding: 0;
        outline: none;
        background-color: #fff;
        color: #b9b9b9;
      }
      .van-popup--center {
        width: 351px;
        height: 282px;
        border-radius: 10px;
      }
      .total {
        height: 25px;
        line-height: 25px;
        font-size: 18px;
        font-weight: 900;
        margin: 16px 0 0 16px;
      }
      .saleInput {
        height: 50px;
        margin: 57px 16px 0;
        display: flex;
        position: relative;
        .rmb {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          color: #bebebe;
        }
        .rmb::after {
          content: '';
          height: 24px;
          border-left: 1px solid #bebebe;
          margin-left: 16px;
          transform: scale(0.5);
        }
        input {
          flex: 1;
          padding: 0 0 0 63px;
          margin: 0;
          height: 50px;
          border: none;
          font-size: 14px;
          line-height: 50px;
          background-color: #e6e6e6;
          border-radius: 10px;
        }
      }
      .jobTime {
        height: 50px;
        margin: 57px 16px 0;
        position: relative;
        text-align: center;
        font-size: 16px;
        color: #141414;
        .startTime,
        .endTime {
          position: absolute;
          top: 0;
          width: 144px;
          background-color: #bebebe;
          height: 50px;
          border-radius: 10px;
        }
        .startTime {
          left: 0;
        }
        .endTime {
          right: 0;
        }
        .borderTime {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 21px;
          height: 1px;
          background-color: #b9b9b9;
        }

        .offWork,
        .work {
          position: absolute;
          bottom: -37px;
          width: 40px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
        }
        .offWork {
          right: 50px;
        }
        .work {
          left: 50px;
        }
        input {
          width: 22px;
          padding: 0;
          margin: 0;
          height: 22px;
          line-height: 22px;
          font-size: 16px;
          border: none;
          background-color: #bebebe;
        }
        span {
          display: inline-block;
          font-size: 16px;
          margin: 0;
          color: #141414;
          height: 22px;
          line-height: 22px;
        }
        .move1px {
          transform: translateY(-1px);
        }
      }
      .agreeButton,
      .cancelButton {
        width: 148px;
        height: 48px;
        background-color: #4a92ff;
        text-align: center;
        line-height: 48px;
        border: none;
        border-radius: 24px;
        position: absolute;
        bottom: 13px;
        color: #fff;
      }
      .agreeButton {
        left: 16px;
      }
      .cancelButton {
        background-color: #bebebe;
        right: 16px;
      }
    }
  }
}
</style>
