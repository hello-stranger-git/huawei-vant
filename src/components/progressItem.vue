<template>
  <div class="progressItem">
    <van-row class="FeaturesProgress">
      <van-col :span="5" class="leftTitle">
        {{ leftTitle }}
        <i
          :class="['iconfont', leftIcon]"
          :style="{ color: leftIconColor }"
        ></i>
      </van-col>
      <van-col :span="15">
        <van-progress
          :color="progressColor"
          :track-color="trackColor"
          :stroke-width="8"
          :percentage="percentage"
        ></van-progress>
      </van-col>
      <van-col :span="4" class="percent">
        <span v-if="!sex"> {{ percentage }}% </span>
        <div v-else class="rightSex">
          <i class="iconfont iconnvren"></i>
          <span>女性</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    // 左边标题
    leftTitle: {
      type: String,
      default: ''
    },
    // 左边图标颜色
    leftIconColor: {
      type: String,
      default: '#50A6FF'
    },
    // 左边标题后面的Icon
    leftIcon: {
      type: String,
      default: ''
    },
    // 进度条百分比
    percentage: {
      type: Number,
      default: 50
    },
    // 进度条颜色
    progressColor: {
      type: String,
      default: '#50A6FF'
    },
    // 轨道颜色
    trackColor: {
      type: String,
      default: '#e5e5e5'
    },
    // 右边标题性别
    sex: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.progressItem {
  .iconfont {
    font-size: 12px;
  }
  .percent {
    font-size: 12px;
    color: #cbcbd7;
    text-align: center;
    .rightSex {
      i {
        color: #f98181;
      }
    }
  }
  .leftTitle {
    font-size: 13px;
  }
  .FeaturesProgress {
    // margin: 5px 0;
    margin-bottom: 15px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .FeaturesProgress:last-child {
    margin-bottom: 0;
  }
}
</style>
