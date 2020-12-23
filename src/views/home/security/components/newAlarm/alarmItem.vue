<template>
  <div>
    <div class="alarm" v-for="(item, index) in newAlarmData" :key="index">
      <div class="title">
        <span>{{ item.title }}</span>
      </div>
      <div class="bottom">
        <img :src="item.img" width="148px" height="110px" />
        <div class="message">
          <p>
            时间：<span>{{ item.time }}</span>
          </p>

          <p>
            摄像头：<span>{{ item.videoTitle }}</span>
          </p>
          <p>
            防区号：<span>{{ item.number }}</span>
          </p>
          <p>
            防区：<span>{{ item.region }}</span>
          </p>
          <p>
            <span :class="item.status === '未处理' ? 'colorRed' : ''"
              >状态：{{ item.status }}</span
            >
            <span class="talk">喊话</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newAlarmData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.colorRed {
  color: #e60012 !important;
}
.alarm {
  background-color: #fff;
  padding: 18px 10px 10px 16px;
  .title {
    span {
      font-size: 16px;
      font-weight: bold;
      color: #141414;
    }
  }
  .bottom {
    margin-top: 12px;
    display: flex;
    .message {
      margin-left: 10px;
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        color: #959595;
        margin-bottom: 6px;
      }
    }
  }
}
.talk {
  width: 61px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background: #4a92ff;
  opacity: 1;
  border-radius: 16px;
  display: inline-block;
  font-size: 12px;
  color: #ffffff;
  font-weight: 400;
  margin-left: 30px;
}
</style>
