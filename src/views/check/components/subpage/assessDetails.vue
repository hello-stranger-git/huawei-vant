<template>
  <div class="assessDetails">
    <!-- 头部区域 -->
    <TopMessage :title="'考评详情'"></TopMessage>
    <!-- 通知栏 -->
    <!-- <Notice></Notice> -->
    <!-- 点检屏幕区域 -->
    <VideoImage :image="screen"></VideoImage>
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
    <!-- tab选项区域 -->
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="auto"
    >
      <template #content>
        <div class="optionContent">
          <div v-if="active == 0">
            <p>
              {{ itemsData }}
            </p>
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
    <!-- 抄送区域 -->
    <SendOut></SendOut>
    <!-- 按钮区域 -->
    <div class="Submit">
      <van-button class="left_button">不合格 -5</van-button>
      <van-button class="right_button">严重不合格 -10</van-button>
    </div>
    <!-- 底部分数 -->
    <div class="fraction">当前分数：<span>95</span>/100分</div>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
// import Notice from '@/layout/components/notice' // 通知栏
import VideoImage from '@/components/check/subpage/videoImage.vue' // 点检截图
import SendOut from '@/components/check/subpage/sendOut.vue' // 抄送

export default {
  components: {
    TopMessage,
    // Notice,
    VideoImage,
    SendOut
  },
  data() {
    return {
      screen: require('@/assets/videoImage/videoTest.png'), // 点检图

      // 默认选中项
      defaultStyle: true,
      // tab默认选中项
      active: 0,
      // 备注默认值
      message: '',
      // 选项数据
      items: [
        { text: '店内环境' },
        { text: '员工衣着' },
        { text: '商品摆放' },
        { text: '宣传物料' },
        { text: '营销禁忌' }
      ],
      itemsData:
        '[5.0分] 店内灯光明亮，灯具正常工作，无闪烁，无发绿；店内消防指示灯正常亮起， 消防地贴指向正确，无翘边无破损；饮水机上干净整洁（无堆积水杯，架子等物品）；店内地面、体验台及沙发干净无破损；员工私人物品（笔记本、笔、衣服、皮箱等）不能随便摆放在店内'
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
  // 点检截图区域样式
  .videoImage {
    margin-top: 88px;
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

// tab选项区样式
.van-tree-select {
  margin-right: 12px;
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
    flex: 0 0 94px;
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
  // 右侧内容
  .optionContent {
    padding: 17px 13px 17px 19px;
    min-height: 342px;
    p {
      font-size: 12px;
      color: #141414;
      line-height: 17px;
    }
  }
}
// 备注样式
.remarks {
  margin: 12px 12px 12px 94px;
  width: auto;
  height: 42px;
  border-radius: 7px;
}

// 按钮样式
.Submit {
  margin: 0 53px;
  margin-top: 24px;
  .van-button {
    width: 122px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    border-radius: 32px;
  }
  .van-button--normal {
    padding: 0;
  }
  .left_button {
    background-color: #ff7b40;
  }
  .right_button {
    background-color: #ff3636;
    float: right;
  }
}
// 分数区域样式
.fraction {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #141414;
  // border: 1px solid red;
  span {
    color: #e60012;
  }
}
</style>
