<template>
  <div class="dateSelectDiv">
    <div class="dateSelect">
      <van-row type="flex" justify="space-between">
        <van-col
          v-for="(item, i) in dateArr"
          :key="i"
          @click="toggleActiveDate(i)"
        >
          <span :class="activeDate === i ? 'active' : ''">{{ item }}</span>
        </van-col>
        <van-col class="togDate">
          <div class="point" @click="togCalendar">
            <!-- <li></li>
            <li></li>
            <li></li> -->
            <img :src="point" width="19px" height="19px" />
          </div>
        </van-col>
      </van-row>
    </div>
    <van-overlay :show="show" @click="overLayClick" />
    <Calendar
      @getDay="getDay"
      class="calendar"
      v-show="calendarShow"
    ></Calendar>
  </div>
</template>

<script>
import Calendar from './calendar.vue'
export default {
  data() {
    return {
      arr: [],
      dateArr: ['今日', '昨日', '前日', '周五', '周四', '周三', '周二'],
      calendarShow: false,
      show: false, // 控制遮罩层
      activeDate: 0,
      point: require('@/assets/icon/flow/todayStore/point.png')
    }
  },
  components: {
    Calendar
  },
  methods: {
    datePicker() {
      console.log(this.value1)
    },
    togCalendar() {
      this.calendarShow = !this.calendarShow
      this.show = !this.show // 控制遮罩层
    },
    // 点击遮罩层
    overLayClick() {
      this.calendarShow = !this.calendarShow
      this.show = !this.show // 控制遮罩层
    },
    // 点击日历的每一天，获取这一天的时间
    getDay(date) {
      this.calendarShow = !this.calendarShow
      this.show = !this.show // 控制遮罩层
      const time = new Date(date.year, date.month - 1, date.day)
      this.arr = ['今日']
      for (let i = 0; i < 6; i++) {
        const month = new Date(Number(time) - 86400000 * (i + 1)).getMonth()
        const day = new Date(Number(time) - 86400000 * (i + 1)).getDate()
        this.arr.push(month + '-' + day)
      }
      this.dateArr = this.arr
    },
    toggleActiveDate(i) {
      this.activeDate = i
    }
  }
}
</script>

<style lang="less" scoped>
.dateSelectDiv {
  background-color: #fff;
  position: relative;
  padding: 0px 10px 0;
}
.dateSelect {
  margin: auto;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
.togDate,
.point {
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  opacity: 1;
  position: relative;
  color: #4a92ff;
}
.active::after {
  content: '';
  position: absolute;
  background-color: #4a92ff;
  bottom: -6px;
  left: 50%;
  height: 2px;
  width: 16px;
  transform: translateX(-50%);
}
.calendar {
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgb(20 20 1.05%);
  opacity: 90%;
  background-color: #fff;
  /deep/.currentCalender {
    padding-top: 26px;
    font-size: 18px;
  }
  /deep/.weekHeader {
    padding: 32px 12px 9px 12px;
    .week {
      font-size: 16px;
      color: #4a92ff;
    }
  }
}
.van-overlay {
  z-index: 4;
}
/deep/ .calendar .rowDays {
  padding: 10px 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
