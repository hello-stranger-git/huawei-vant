<template>
  <div class="dateSelectDiv">
    <div class="dateSelect">
      <van-row>
        <van-col :span="4">
          <span class="active">今日</span>
        </van-col>
        <van-col :span="4">
          <span>昨日</span>
        </van-col>
        <van-col :span="4">
          <span>前日</span>
        </van-col>
        <van-col :span="4">
          <span>11/12</span>
        </van-col>
        <van-col :span="4">
          <span>11/11</span>
        </van-col>
        <van-col :span="4" class="togDate">
          <div class="point" @click="togCalendar">
            <li></li>
            <li></li>
            <li></li>
          </div>
        </van-col>
      </van-row>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <Calendar class="calendar" v-if="calendarShow"></Calendar>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Calendar from './calendar.vue'
export default {
  data() {
    return {
      value1: '',
      calendarShow: false,
      show: false
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
      this.show = true
      this.calendarShow = true
    }
  }
}
</script>

<style lang="less" scoped>
.dateSelectDiv {
  background-color: #fff;
  position: relative;
  padding: 15px 15px 0;
  position: relative;
}
.dateSelect {
  margin: auto;
  // margin: 0 15px;
  width: 100%;
  height: 50px;
  background: #73e8e4;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}
.point {
  display: flex;
  justify-content: center;
}
.point > li {
  float: left;
  width: 10px;
}
.active {
  padding-bottom: 6px;
  border-bottom: 3px solid;
}
.calendar {
  position: absolute;
  z-index: 1;
  top: 400px; //
  width: 100%;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgb(20 20 21 / 20%);
  opacity: 90%;
  background-color: #fff;
  // padding-bottom: 30px;
  // margin-bottom: 50px;
}
/deep/ .calendar .rowDays {
  height: 30px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
