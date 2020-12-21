<template>
  <div class="flowPrice">
    <Calendar
      :peopleCount="peopleCount"
      @getDay="getDay"
      :status="status"
    ></Calendar>
    <!-- <BarCharts
      :label="item.label"
      :xLabel="item.xLabel"
      :xName="item.xName"
      :yName2="item.yName2"
      :dataName1="item.dataName1"
      :data1="item.data1"
      :dataName3="item.dataName3"
      :data3="item.data3"
    ></BarCharts> -->
    <PriceBar class="priceBar"></PriceBar>

    <van-overlay :show="show" @click="overLayClick" />
    <div v-show="show" class="selectStatusDiv">
      <div style="margin-top:16px;margin-left:16px">
        <span style="font-size: 18px;font-weight: 800;color: #000000"
          >营业状态选择</span
        >
      </div>
      <div
        style="margin-top:80px;margin-left:18px;margin-right: 18px;
    text-align: center;"
      >
        <span
          :class="[status === '1' ? 'statusTrue' : '', 'status']"
          @click="inStatus"
          >营业</span
        >
        <span
          :class="[status === '0' ? 'statusTrue' : '', 'status']"
          style="margin:0 10px"
          @click="noStatus"
        >
          未营业</span
        >
        <input
          class="otherInput"
          type="text"
          v-model="otherStatus"
          placeholder="其它"
          maxlength="3"
        />
      </div>
      <div style="margin-top:58px;text-align:center;margin-bottom:13px">
        <button
          class="statusBtn"
          style="background: #4A92FF;margin-right:24px"
          @click="certain"
        >
          确认
        </button>
        <button class="statusBtn" style="background: #E2E2E2;" @click="cancel">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from '../components/calendar'
// import BarCharts from '../../../components/barCharts'
import PriceBar from '@/components/home/priceBar'

export default {
  components: {
    // BarCharts,
    Calendar,
    PriceBar
  },
  data() {
    return {
      // 客流与销售分析
      // item: {
      //   type: 'sale',
      //   label: ['销售额', '客流人数'],
      //   xLabel: ['今日', '日', '六', '歇', '11/12', '11/11', '11/13', '11/10'],
      //   yName2: '---客单价',
      //   dataName1: '销售额',
      //   data1: [1336081, 1003681, 1603681, 1903681, 903681, 606584, 903681],
      //   dataName3: '客流人数',
      //   data3: [300, 400, 500, 450, 400, 300, 500]
      // },
      peopleCount: [
        // 每天访问的总人数
        { day: 1, status: '1' },
        { day: 2, status: '1' },
        { day: 3, status: '1' },
        { day: 4, status: '1' },
        { day: 5, status: '1' },
        { day: 6, status: '1' },
        { day: 7, status: '1' },
        { day: 8, status: '1' },
        { day: 9, status: '1' },
        { day: 10, status: '1' },
        { day: 11, status: '1' },
        { day: 12, status: '1' },
        { day: 13, status: '1' },
        { day: 14, status: '1' },
        { day: 15, status: '1' },
        { day: 16, status: '1' },
        { day: 17, status: '1' },
        { day: 18, status: '1' },
        { day: 19, status: '1' },
        { day: 20, status: '1' },
        { day: 21, status: '1' },
        { day: 22, status: '1' },
        { day: 23, status: '1' },
        { day: 24, status: '1' },
        { day: 25, status: '1' },
        { day: 26, status: '1' },
        { day: 27, status: '1' },
        { day: 28, status: '1' },
        { day: 29, status: '1' },
        { day: 30, status: '1' },
        { day: 31, status: '1' }
      ],
      show: false,
      // 其它状态
      otherStatus: '',
      status: '1',
      day: 0
    }
  },
  methods: {
    getDay(data) {
      this.show = !this.show
      this.otherStatus = ''
      this.status = ''
      this.day = data.day
    },
    certain() {
      for (let i = 0; i < this.peopleCount.length; i++) {
        if (this.peopleCount[i].day === this.day) {
          if (this.status === '1') {
            this.peopleCount[i].status = '1'
          } else if (this.status === '0') {
            this.peopleCount[i].status = '0'
          } else {
            this.peopleCount[i].status = this.otherStatus + ''
          }
        }
      }
      this.show = false
    },
    cancel() {
      this.show = false
    },
    overLayClick() {
      this.show = !this.show // 控制遮罩层
    },
    inStatus() {
      this.status = '1'
    },
    noStatus() {
      this.status = '0'
    }
  }
}
</script>

<style lang="less" scoped>
.flowPrice {
  position: relative;
  .van-overlay {
    z-index: 4;
  }
  .status {
    padding: 12px 30px;
    font-size: 14px;
    background-color: #e2e2e2;
    color: #000;
    border-radius: 24px;
    color: #ffffff;
  }
  .statusTrue {
    background-color: #4a92ff;
  }
  .otherInput {
    width: 96px;
    height: 34px;
    background: #e2e2e2;
    opacity: 1;
    border-radius: 24px;
    border: 0;
    &::placeholder {
      padding-left: 30px;
      color: #ffffff;
    }
  }
  .statusBtn {
    width: 148px;
    height: 48px;
    background: #4a92ff;
    opacity: 1;
    border-radius: 24px;
    border: 0;
    color: #ffffff;
    font-size: 14px;
  }
  .selectStatusDiv {
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 15%;
    border-radius: 10px;
    z-index: 5;
  }
  .priceBar {
    background-color: #fff;
    margin-top: 16px;
    border-radius: 8px;
  }
  .module {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 15px;
  }
  /deep/.barCharts {
    height: 256px;
    margin-top: 10px;
    background: #fff;
    border-radius: 8px;
    canvas {
      height: 300px !important;
    }
    #barCharts {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /deep/.calendar {
    background-color: #fff;
    border-radius: 0 0 8px 8px;
    .currentCalender {
      font-size: 22px;
      color: '#141414';
      font-weight: bold;
      display: flex;
      justify-content: center;
      padding-top: 26px;
      span {
        margin: 0 18px;
      }
    }
    .weekHeader {
      padding: 32px 12px 9px 12px;
      .week {
        font-size: 16px;
        color: #4a92ff;
      }
    }
  }
}
</style>
