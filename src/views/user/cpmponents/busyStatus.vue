<template>
  <div>
    <!-- 头部区域 -->
    <van-nav-bar title="营业状态" left-arrow @click-left="onClickLeft" />

    <Calendar
      :peopleCount="peopleCount"
      @getDay="getDay"
      :status="status"
    ></Calendar>

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
import Calendar from './calendar'
export default {
  data() {
    return {
      show: false,
      // 其它状态
      otherStatus: '',
      status: '1',
      day: 0,
      data: {},
      peopleCount: []
    }
  },
  components: {
    Calendar
  },
  mounted() {
    this.peopleCount = this.$route.params.peopleCount
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    overLayClick() {
      this.show = !this.show // 控制遮罩层
    },
    getDay(data) {
      this.show = !this.show
      this.data = data
      this.otherStatus = ''
      this.status = ''
      this.day = data.day
    },

    inStatus() {
      this.status = '1'
    },
    noStatus() {
      this.status = '0'
    },

    cancel() {
      this.show = false
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
            this.status = this.otherStatus + ''
          }
        }
      }
      this.show = false
      this.$router.push({
        name: 'User',
        params: { status: this.status, ...this.data }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 头部样式
/deep/.van-nav-bar {
  padding-top: 11px;
  margin-bottom: 12px;
  padding-bottom: 14px;
  .van-nav-bar__content {
    height: auto;
    line-height: 25px;
  }
  .van-nav-bar__left {
    .van-icon {
      font-size: 23px;
      color: #141414;
    }
  }
  .van-nav-bar__title {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
}

//日历样式

/deep/.calendar {
  width: 351px;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  border-radius: 10px;
  margin: auto;
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

//弹出框

.selectStatusDiv {
  width: 351px;
  background-color: #ffffff;
  position: absolute;
  top: 246px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 5;
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
</style>
