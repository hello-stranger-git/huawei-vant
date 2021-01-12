<template>
  <div style="background:#eee">
    <!-- 头部区域 -->
    <van-nav-bar title="巡查统计" left-arrow @click-left="onClickLeft" />
    <div class="select">
      <span class="title">选择模板</span>
      <div class="select" @click="openSelect">
        <span>{{ modulName }}</span>
        <img
          :src="arrow"
          width="14px"
          height="14px"
          style="vertical-align: middle;"
        />
      </div>
    </div>

    <!--模板选择-->
    <van-action-sheet v-model="show" class="showSelectModule" title="选择模板">
      <div
        class="content"
        v-for="(item, index) in moduleData"
        :key="index"
        @click="selectModule(item)"
      >
        {{ item }}
      </div>
    </van-action-sheet>

    <div class="top">
      <div class="titleDiv">
        <span class="titleSpan">近三十天巡查项概述</span>
      </div>
      <div style="margin-top:50px">
        <div class="contextDiv">
          <van-col span="12">
            <div class="left">
              <van-circle
                v-model="scoringRate"
                :rate="92"
                :speed="100"
                :text="scoringRateText"
                class="circle"
                color="#56BE9B"
                layer-color="#E2E2E2"
              />
              <p>考评平均得分率</p>
            </div>
          </van-col>

          <van-col span="12">
            <div class="right">
              <div style="margin-top:14px">
                <span>平均问题数</span><span style="margin-left:20px">2</span>
              </div>
              <div style="margin-top:12px">
                <span>考评平均分</span><span style="margin-left:20px">92</span>
              </div>
            </div>
          </van-col>
        </div>

        <div class="contextDiv">
          <van-col span="12">
            <div class="left">
              <van-circle
                v-model="evaluationRate"
                :rate="80"
                :speed="100"
                :text="evaluationRateText"
                class="circle"
                color="#F1835B"
                layer-color="#E2E2E2"
              />
              <p>整改完成率</p>
            </div>
          </van-col>

          <van-col span="12">
            <div class="right">
              <div style="margin-top:14px">
                <span>整改完成数</span><span style="margin-left:20px">111</span>
              </div>
              <div style="margin-top:12px">
                <span>需整改考评数</span
                ><span style="margin-left:20px">10</span>
              </div>
            </div>
          </van-col>
        </div>

        <!-- <div class="contextDiv">
          <van-col span="12">
            <div class="left">
              <van-circle
                v-model="checkRate"
                :rate="15"
                :speed="100"
                :text="checkRateText"
                class="circle"
                color="#4A92FF"
                layer-color="#E2E2E2"
              />
              <p>点检覆盖率</p>
            </div>
          </van-col>

          <van-col span="12">
            <div class="right">
              <div style="margin-top:14px">
                <span>点检门店数</span><span style="margin-left:20px">339</span>
              </div>
              <div style="margin-top:12px">
                <span>考评平均分</span
                ><span style="margin-left:20px">6901</span>
              </div>
            </div>
          </van-col>
        </div> -->
      </div>
    </div>

    <div class="bottom">
      <div class="titleDiv">
        <span style="font-size: 18px;font-weight: bold;color: #000000;"
          >近三十天考评指标排行</span
        >
      </div>
      <!--得分最低排行榜-->
      <div class="scoring">
        <div class="scoringMin">
          <span>得分项最低排行榜</span>
        </div>
        <div>
          <div class="title" v-for="item in scoringMinData" :key="item.id">
            <div class="topTitle">
              {{ item.title }}
            </div>
            <!-- 中间内容 -->
            <van-col class="strip">
              <van-progress
                :color="item.color"
                trackColor="item.trackColor"
                :strokeWidth="item.strokeWidth"
                :percentage="item.percentage"
                :show-pivot="false"
              ></van-progress>
              <span class="rightNumber">{{ item.percentage }}%</span>
            </van-col>
          </div>
        </div>
      </div>
      <div class="inspection">
        <div class="scoringMin">
          <span>巡查问题最多项排行</span>
        </div>
        <div>
          <div class="title" v-for="item in inspectionRanking" :key="item.id">
            <div class="topTitle">
              {{ item.title }}
            </div>
            <!-- 中间内容 -->
            <van-col class="strip">
              <van-progress
                :color="item.color"
                trackColor="item.trackColor"
                :strokeWidth="item.strokeWidth"
                :percentage="item.percentage"
                :show-pivot="false"
              ></van-progress>
              <span class="rightNumber">{{ item.count }}</span>
            </van-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow: require('@/assets/icon/home/video/videoItem/arrow.png'),
      scoringRate: 0, // 得分率百分比
      evaluationRate: 0, // 考评率百分比
      checkRate: 0, // 点检率百分比
      scoringMinData: [
        {
          id: 1,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 53.23,
          color: '#BBD6FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 2,
          title:
            '禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...',
          percentage: 61.08,
          color: '#8AB8FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 3,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 74.37,
          color: '#6AA5FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 4,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 75.47,
          color: '#579AFF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 5,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 81.65,
          color: '#4A92FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        }
      ],
      inspectionRanking: [
        {
          id: 1,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 53.23,
          count: '295次',
          color: '#BBD6FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 2,
          title:
            '禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...禁止依靠或趴在展台、收银台、体验台上，禁止在迎宾位闲...',
          percentage: 61.08,
          count: '246次',
          color: '#8AB8FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 3,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 74.37,
          count: '162次',
          color: '#6AA5FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 4,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 75.47,
          count: '155次',
          color: '#579AFF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        },
        {
          id: 5,
          title:
            '桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...桌面干净，所有线材从挡板后通过，不可出现在收银台台面...',
          percentage: 81.65,
          count: '116次',
          color: '#4A92FF',
          trackColor: '#EFEFEF',
          strokeWidth: '14px'
        }
      ],
      show: false,
      modulName: '超级旗舰店模板',
      moduleData: [
        '标杆店及购物中心店模板',
        '超级旗舰店模板',
        '吉林省视频巡查模板1.0（吉林地区）'
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    selectModule(data) {
      this.modulName = data
      this.show = false
    },
    openSelect() {
      this.show = true
    }
  },
  computed: {
    scoringRateText() {
      return this.scoringRate.toFixed(0) + '%'
    },
    evaluationRateText() {
      return this.evaluationRate.toFixed(0) + '%'
    },
    checkRateText() {
      return this.checkRate.toFixed(0) + '%'
    }
  }
}
</script>

<style lang="less" scoped>
// 头部样式
/deep/.van-nav-bar {
  border: 0;
  padding: 9px 0;
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
    color: #000000;
  }
}

//top巡查项概述
.top {
  margin: 12px 12px 0 12px;
  background-color: #ffffff;
  // padding: 14px;
  border-radius: 10px;
  .titleDiv {
    padding: 14px 14px 0 14px;
    .titleSpan {
      font-size: 18px;
      font-weight: bold;
      color: #000000;
    }
  }
}
//环形进度图
.contextDiv {
  padding: 0 14px;
  margin-top: 26px;
  text-align: center;
  padding-bottom: 21px;
  &::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #959595;
    margin-top: 14px;
  }
  .left,
  .right {
    font-size: 14px;
    font-weight: 400;
    color: #141414;
  }
  .right {
    text-align: left;
  }
  /deep/.van-circle__text {
    font-size: 18px;
    font-weight: bold;
    color: #343434;
  }
  border-bottom: 1px solid #e2e2e2;
  &:last-child {
    border: 0;
  }
}

//bottom考评指标排行
.bottom {
  margin: 12px 12px 0 12px;
  padding-bottom: 16px;
  // background-color: #ffffff;
  .titleDiv {
    border-radius: 10px 10px 0 0;
    padding: 14px 0 0 14px;
    background-color: #ffffff;
  }
  //得分项最低率排行榜
  .scoringMin {
    padding: 30px 0 18px 14px;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }

  .title {
    padding: 0 15px 0 15px;
    margin-top: 18px;
    .topTitle {
      font-size: 12px;
      font-weight: 400;
      color: #959595;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /deep/.van-progress__pivot {
      line-height: 0;
    }

    //进度条
    .strip {
      position: relative;
      font-size: 12px;
      margin-top: 7px;
      width: 100%;
      .rightNumber {
        position: absolute;
        top: 0;
        right: 5px;
        font-size: 12px;
        font-weight: 400;
        color: #141414;
      }
    }
    &::after {
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    /deep/.van-progress {
      border-radius: 10px;
    }
  }
  .scoring,
  .inspection {
    background-color: #fff;
  }
  .scoring {
    padding-bottom: 31px;
    border-bottom: 1px solid #ececec;
  }
  .inspection {
    padding-bottom: 18px;
    border-radius: 0 0 10px 10px;
  }
}

//模板选择
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 12px 6px 6px 12px;
  .title {
    font-size: 14px;
    font-weight: 400;
    color: #141414;
  }
  .select {
    span {
      font-size: 12px;
      font-weight: 400;
      color: #343434;
      opacity: 0.5;
    }
  }
}

// 模板选择弹出框
.showSelectModule {
  /deep/.van-action-sheet__header {
    font-size: 18px;
    font-weight: 800;
    color: #000000;
  }
  .content {
    text-align: center;
    &:first-child {
      margin-top: 40px;
    }
    &:last-child {
      margin-bottom: 24px;
    }
    margin-top: 24px;
  }
}
</style>
