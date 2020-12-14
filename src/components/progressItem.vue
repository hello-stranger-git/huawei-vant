<template>
  <div class="progressItem">
    <van-row class="FeaturesProgress">
      <!-- 左侧类容 -->
      <van-col :span="4" class="leftTitle">
        <span>{{ leftTitle }}</span>
        <img :src="leftIcon" width="12px" height="12px" />
      </van-col>
      <!-- 中间内容 -->
      <van-col :span="16" class="strip">
        <van-progress
          :color="progressColor"
          :track-color="trackColor"
          :stroke-width="14"
          :percentage="percentage"
          :show-pivot="false"
          :class="sex == '' ? '' : 'notBorderRadius'"
        ></van-progress>
        <span class="leftNumber">{{ leftNumber }}</span>
        <span class="rightNumber">{{ rightNumber }}</span>
      </van-col>
      <!-- 右侧内容 -->
      <van-col :span="4" class="percent">
        <div v-if="leftIcon">
          <span>{{ rightTitle }}</span>
          <img :src="rightIcon" width="12px" height="12px" />
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
    // 左边人数
    leftNumber: {
      type: String,
      default: ''
    },
    // 左边标题后面的Icon
    leftIcon: {
      type: String,
      default: ''
    },
    // 右边标题
    rightTitle: {
      type: String,
      default: ''
    },
    // 左边人数
    rightNumber: {
      type: String,
      default: ''
    },
    // 右边标题后面的Icon
    rightIcon: {
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
  // 右侧样式
  .percent {
    // color: #cbcbd7;
    padding-left: 13px;
    // text-align: center;
  }
  // 左侧样式
  .leftTitle,
  .percent {
    font-size: 12px;
    img {
      margin-left: 1px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  .FeaturesProgress {
    display: flex;
    align-items: center;
  }
  // 修改默认圆角
  .van-progress {
    border-radius: 10px;
  }
  /deep/.notBorderRadius .van-progress__portion {
    border-radius: 10pt 0pt 0pt 10pt;
  }
  .strip {
    position: relative;
    font-size: 12px;
    color: #fff;
    .leftNumber {
      position: absolute;
      top: 0;
      left: 5px;
    }
    .rightNumber {
      position: absolute;
      top: 0;
      right: 5px;
    }
  }
}
</style>
