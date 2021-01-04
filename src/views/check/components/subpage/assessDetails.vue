<template>
  <div class="assessDetails">
    <!-- 头部区域 -->
    <TopMessage :title="'考评'"></TopMessage>
    <!-- 视频区域 -->
    <VideoRegion
      :video="video"
      :cameraData="cameraData"
      :templateData="templateData"
    ></VideoRegion>
    <!-- 导航选项区域 -->
    <ul
      :class="`evaluationOption ${defaultStyle ? 'defaultStyle' : ''}`"
      @click="camera"
    >
      <li>形象及陈列</li>
      <li>产品展示</li>
      <li>后方</li>
      <li>安全要求</li>
      <li>标准化服务流程</li>
    </ul>
    <!-- 侧边导航区域 -->
    <van-tree-select
      :items="sideData.items"
      :main-active-index.sync="active"
      height="auto"
    >
      <template #content>
        <div class="option" v-for="(item, i) of sideData.itemsData" :key="i">
          <div v-if="i === active">
            {{ item }}
            <div class="screenshot">
              <span v-for="(item, i) of screenshotData[active]" :key="i">
                <van-icon :name="cha" />
                <img :src="item" />
              </span>
              <span>
                <img :src="tianjia" />
              </span>
            </div>
            <div class="buttonGroup">
              <van-button plain>不适用</van-button>
              <van-button plain>不合格</van-button>
              <van-button color="#4A92FF" plain>合格</van-button>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
    <!-- 备注区域 -->
    <van-field
      class="remarks"
      v-model="message"
      rows="2"
      type="textarea"
      placeholder="备注"
      show-word-limit
    />
    <!-- 整改人区域 -->
    <SendOut :SelectionBoxData="RectificationData"></SendOut>
    <!-- 抄送区域 -->
    <SendOut :SelectionBoxData="sendOutData"></SendOut>
    <!-- 提交按钮区域 -->
    <div class="Submit">
      <p>得分：<span>100</span>/100</p>
      <van-button type="info">提交</van-button>
    </div>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
// import Notice from '@/layout/components/notice' // 通知栏
import VideoRegion from '@/components/check/subpage/videoRegion.vue' // 点检截图
import SendOut from '@/components/check/subpage/sendOut.vue' // 抄送

export default {
  components: {
    TopMessage,
    // Notice,
    VideoRegion,
    SendOut
  },
  data() {
    return {
      tianjia: require('@/assets/icon/check/checkItem/tianjia.png'), // 截图添加图标
      cha: require('@/assets/icon/check/checkItem/cha.png'), // 删除图标

      // 横向导航默认选中
      defaultStyle: true,
      // 侧边导航默认选中项
      active: 0,
      // 备注输入值
      message: '',
      // 视屏
      video: require('@/assets/videoImage/videoTest.png'),
      // 摄像头选项数据
      cameraData: [
        { name: '收银台左' },
        { name: '进门右' },
        { name: '收银台右' },
        { name: '进门左' },
        { name: '门外' },
        { name: '库房' },
        { name: '洗手区' }
      ],
      // 模板选项数据
      templateData: [
        { name: '标杆店及购物中心店模板' },
        { name: '超级旗舰店模板' },
        { name: '吉林省视频巡查模板1.0（吉林地区）' }
      ],

      // 侧边导航选项数据
      sideData: {
        items: [
          { text: '店内环境' },
          { text: '员工衣着' },
          { text: '商品摆放' },
          { text: '宣传物料' }
        ],
        itemsData: [
          '厅内地面/点面垃圾清理(城区厅和县城厅10分钟，乡镇厅30分钟) 1分',
          '员工衣着',
          '商品摆放',
          '宣传物料'
        ]
      },
      //  截图数据
      screenshotData: [
        [
          require('@/assets/icon/screenshot/jietu.png'),
          require('@/assets/icon/screenshot/jietu.png')
        ],
        [require('@/assets/icon/screenshot/jietu.png')]
      ],
      // 整改人数据
      RectificationData: {
        label: '整改人',
        text: '选择整改人',
        ccPerson: [
          {
            name: '张鹏',
            post: '店长'
          },
          {
            name: '李某某',
            post: '区域负责人'
          },
          {
            name: '陈某某',
            post: '客服中心'
          }
        ]
      },
      // 抄送数据
      sendOutData: {
        label: '抄送',
        text: '选择抄送人',
        ccPerson: [
          {
            name: '张鹏',
            post: '店长'
          },
          {
            name: '李某某',
            post: '区域负责人'
          },
          {
            name: '陈某某',
            post: '客服中心'
          },
          {
            name: '罗某',
            post: '巡检主管'
          },
          {
            name: '赵某某',
            post: '客服主管'
          },
          {
            name: '某某客服组',
            post: ''
          },
          {
            name: '某某巡检组',
            post: ''
          }
        ]
      }
    }
  },
  methods: {
    // 清除默认选中属性
    camera() {
      this.defaultStyle = false
    }
  }
}
</script>
<style lang="less" scoped>
.assessDetails {
  background-color: #efefef;
  // border: 1px solid red;
  padding-bottom: 36px;
  // 视频区域样式
  .videoRegion {
    margin-top: 44px;
  }
}
// 影藏滚动条
::-webkit-scrollbar {
  display: none;
}
// 导航选项区域样式
.defaultStyle > li:first-child {
  color: #4a92ff;
  font-weight: bold;
}
.evaluationOption {
  display: flex;
  overflow: auto;
  color: #141414;
  font-size: 14px;
  margin: 36px 0 24px;
  li {
    flex-shrink: 0;
    margin-right: 32px;
    &:first-child {
      margin-left: 12px;
    }
  }
  li:hover {
    color: #4a92ff;
    font-weight: bold;
  }
}

// 侧边导航样式
.van-tree-select {
  margin: 12px 12px 0 0;
  .van-sidebar-item {
    height: 53px;
    line-height: 53px;
    padding: 0;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    color: rgba(20, 20, 20, 0.7);
    background-color: #efefef;
  }
  /deep/.van-tree-select__nav {
    flex: 0 0 112px;
    background-color: #efefef;
  }

  // 左侧选中样式
  .van-sidebar-item.van-sidebar-item--select {
    background-color: #fff;
    color: #4a92ff;
    font-weight: bold;
  }
  .van-sidebar-item--select::before {
    height: 23px;
    width: 2px;
    background-color: #4a92ff;
  }
  /deep/.van-checkbox__icon {
    font-size: 17px;
  }

  // 选项右侧样式
  .van-tree-select__content {
    border-radius: 0px 10px 10px 10px;
    font-size: 12px;
    color: #141414;
    overflow: hidden;
    min-height: 240px;
    .option > div {
      padding: 17px 12px;
      .buttonGroup {
        display: flex;
        margin-top: 32px;
        justify-content: space-between;
      }
      .van-button {
        width: 70px;
        height: 27px;
        font-size: 12px;
        padding: 0;
        color: #141414;
        border: 1px solid #707070;
        border-radius: 5px;
        // margin: 32px 91px 0;
      }
    }
    .screenshot {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 40px;
      span {
        position: relative;
        display: inline-block;
        margin-bottom: 12px;
        border-radius: 10px;
        width: 99px;
        height: 99px;
        .van-icon {
          width: 23px;
          height: 23px;
          font-size: 23px;
          position: absolute;
          right: -11px;
          top: -11px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
// 备注样式
.remarks {
  margin: 12px 12px 12px 112px;
  width: auto;
  height: 42px;
  border-radius: 7px;
}

.sendOut {
  margin-top: 12px;
}

//  提交按钮区域样式
.Submit {
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  line-height: 42px;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  p span {
    color: red;
  }
  .van-button {
    width: 94px;
    background-color: #4a92ff;
  }
}
</style>
