<!-- 顾客详情 -->
<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <div class="back" @click="goback">
        <van-icon :name="back" size="24" />
      </div>
      <div class="title">顾客信息</div>
      <div class="save">保存</div>
    </div>
    <!-- 图片 -->
    <div class="pic">
      <img :src="targetImg" />
    </div>
    <!-- 标签栏 -->
    <div class="tagBox">
      <div class="tagTtile">标签</div>
      <div class="tags">
        <div
          :class="['tag', item.active ? 'activeTag' : '']"
          v-for="(item, i) in tags"
          :key="i"
          @click="item.active = !item.active"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
    <!-- 顾客信息 -->
    <div class="info">
      <!-- 称呼 -->
      <div class="cell" @click="inputShow = true">
        <div class="attr">称呼</div>
        <div class="flexBox">
          <div class="value" v-if="!inputShow">
            <span>{{ customerName }}</span>
          </div>
          <input
            v-focus
            v-model="customerName"
            class="changeName"
            @blur="inputShow = false"
            v-if="inputShow"
          />
        </div>
      </div>
      <!-- 性别 -->
      <div class="cell">
        <div class="attr">性别</div>
        <div class="flexBox">
          <div class="value">
            <div style="display:flex">
              <div
                style="margin:0 8px 0 0"
                :class="['infoTag', 'man', sex == 'man' ? 'activeMan' : '']"
                @click="sex = 'man'"
              >
                <van-icon
                  :name="sex === 'man' ? activeMan : man"
                  size="16"
                />男性
              </div>
              <div
                @click="sex = 'woman'"
                :class="[
                  'infoTag',
                  'woman',
                  sex === 'woman' ? 'activeWoman' : ''
                ]"
              >
                <van-icon
                  :name="sex === 'woman' ? activeWoman : woman"
                  size="16"
                />女性
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 身份 -->
      <div class="cell">
        <div class="attr">身份</div>
        <div class="flexBox">
          <div class="value">
            <div style="display:flex">
              <div
                :class="['infoTag', !vip ? 'activeTag' : '']"
                style="margin:0 8px 0 0"
                @click="vip = false"
              >
                顾客
              </div>
              <div
                :class="['infoTag', vip ? 'activeTag' : '']"
                @click="vip = true"
              >
                会员
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 年龄 -->
      <div class="cell" @click="agePickerShow = true">
        <div class="attr">年龄</div>
        <div class="flexBox">
          <div class="value">
            <span>{{ customerAge }}</span>
          </div>
        </div>
      </div>
      <!-- 生日 -->
      <div class="cell" @click="brithdayShow = true">
        <div class="attr">生日</div>
        <div :class="['flexBox', 'noBorder']">
          <div class="value">
            <span>{{ date }}</span>
            <van-icon :name="arrow" size="11" class="arrow" />
          </div>
        </div>
      </div>
    </div>
    <!-- 选择生日 -->

    <van-datetime-picker
      v-if="brithdayShow"
      v-model="date"
      type="date"
      title="选择生日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirmBrithday"
      @cancel="cancelBrithday"
    />
    <!-- 选择年龄 -->
    <van-picker
      title="年龄"
      show-toolbar
      :columns="columns"
      @confirm="confirmAge"
      @cancel="cancelAge"
      v-if="agePickerShow"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetImg: require('@/assets/enterStore/enterStore1.png'),
      tags: [
        { value: '好说话', active: true },
        { value: '为人诚信', active: true },
        { value: '消费水平高', active: true },
        { value: '待人随和', active: false },
        { value: '经常退货', active: false },
        { value: '虚假消费', active: false }
      ],
      arrow: require('@/assets/icon/customerInfo/arrow.png'),
      man: require('@/assets/icon/customerInfo/man.png'),
      woman: require('@/assets/icon/customerInfo/woman.png'),
      activeMan: require('@/assets/icon/customerInfo/activeMan.png'),
      activeWoman: require('@/assets/icon/customerInfo/activeWoman.png'),
      back: require('@/assets/icon/customerInfo/back.png'),
      vip: false,
      sex: 'man',
      customerName: '刘德华',
      customerAge: 30,
      date: '',
      show: false,
      columns: [],
      agePickerShow: false,
      inputShow: false,
      brithdayShow: false,
      minDate: new Date(1970, 0, 1),
      maxDate: new Date()
    }
  },
  created() {
    for (let i = 1; i < 150; i++) {
      this.columns.push(i)
    }
  },
  methods: {
    goback() {
      this.$router.push('/')
    },
    confirmBrithday(piker, value) {
      // new Date().getDate
      this.brithdayShow = false
      this.date =
        piker.getFullYear() +
        '/' +
        (piker.getMonth() + 1) +
        '/' +
        piker.getDate()
    },
    cancelBrithday() {
      this.brithdayShow = false
    },
    confirmAge(value, index) {
      this.customerAge = value
      this.agePickerShow = false
    },
    cancelAge() {
      this.agePickerShow = false
    }
  },
  directives: {
    focus: {
      inserted: function(el, { value }) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  height: 44px;
  background-color: #fff;
  position: relative;
  .back {
    position: absolute;
    left: 12px;
    bottom: 12px;
    width: 24px;
    height: 24px;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    height: 25px;
    line-height: 25px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }
  .save {
    position: absolute;
    right: 23px;
    bottom: 13px;
    color: #4a92ff;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
}
.pic {
  position: relative;
  height: 161px;
  background-color: #efefef;
  img {
    position: absolute;
    left: 50%;
    top: 46%;
    transform: translate(-50%, -50%);
    width: 119px;
    height: 119px;
  }
}
.tagBox {
  background-color: #fff;
  margin: 0 12px;
  border-radius: 10px;
  .tagTtile {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding: 12px 0 0 12px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 16px 16px;
    margin-top: 11px;
    .tag {
      color: rgba(20, 20, 20, 0.5);
      font-size: 12px;
      height: 17px;
      line-height: 17px;
      padding: 5px 12px 4px;
      margin: 0 10px 16px 0;
      border-radius: 7px;
      border: 0.6px solid rgba(20, 20, 20, 0.5);
    }
    .activeTag {
      background-color: #4a92ff;
      color: #fff;
      border-color: #4a92ff;
    }
  }
}
.info {
  padding: 4px 0 7px;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px 14px 0;
  .cell {
    display: flex;
    .attr {
      width: 45px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      text-align: center;
    }
    .flexBox {
      flex: 1;
      position: relative;
      .changeName {
        color: #141414;
        font-size: 14px;
        width: 100px;
        height: 45px;
        border: none;
      }
      .value {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(52, 52, 52, 0.5);
        font-size: 12px;
        .infoTag {
          border-radius: 13px;
          line-height: 26px;
          height: 26px;
          border: 1px solid #b9b9b9;
          font-size: 12px;
          width: 64px;
          text-align: center;
          color: #b9b9b9;
          .van-icon {
            padding-right: 7px;
            vertical-align: text-top;
          }
        }
        .arrow {
          padding-left: 8px;
          vertical-align: middle;
        }
        .man {
          border-color: #4a92ff;
          color: #4a92ff;
        }
        .woman {
          border-color: #ff8181;
          color: #ff8181;
        }
        .activeWoman {
          background-color: #ff8181;
          color: #fff;
        }
        .activeMan {
          background-color: #4a92ff;
          color: #fff;
        }
        .activeTag {
          background-color: #4a92ff;
          color: #fff;
          border-color: #4a92ff;
        }
      }
    }
    .flexBox::after {
      content: '';
      display: block;
      position: absolute;
      left: -50%;
      top: 100%;
      width: 200%;
      height: 1px;
      background: rgba(112, 112, 112, 0.5);
      transform: scale(0.5);
    }
    .noBorder::after {
      height: 0;
    }
  }
}
.van-picker {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
}
</style>
