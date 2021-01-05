<template>
  <!-- 任务详情 -->
  <div class="missionDetails">
    <!-- 头部区域 -->
    <van-nav-bar title="任务详情" left-arrow @click-left="onClickLeft" />
    <!-- 横向导航栏 -->
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
    <!-- 侧边导航栏 -->
    <van-tree-select
      :items="sideData.items"
      :main-active-index.sync="active"
      height="auto"
    >
      <template #content>
        <div class="option" v-for="(item, i) of sideData.itemsData" :key="i">
          <div v-if="i === active">
            {{ item }}
            <div class="evaluate"><span>合格</span>扣分：0分</div>
          </div>
        </div>
      </template>
    </van-tree-select>
    <!-- 分数和按钮区域 -->
    <div class="footer">
      <!-- 得分 -->
      <div class="fraction">得分<span>100</span>/100</div>
      <!-- 页尾按钮 -->
      <div class="buttonGroup">
        <van-button color="#4A92FF">合格(38)</van-button>
        <van-button color="#FF7B40">不合格(0)</van-button>
        <van-button color="#B9B9B9">不适用(0)</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 横向导航默认选中
      defaultStyle: true,
      // 侧边导航默认选中项
      active: 0,

      // 侧边导航选项数据
      sideData: {
        items: [
          { text: '店内环境' },
          { text: '员工衣着' },
          { text: '商品摆放' },
          { text: '宣传物料' }
        ],
        itemsData: [
          '户外海报、氛围物料完整干净整洁，无污渍，无褶皱，无破损;门头干净整洁; LOGO灯可以正常亮起，符合品牌形象;店门口区域地面及入口玻璃门保持干净，无污渍彩页、饮料瓶、烟头、口香糖等垃圾，无水渍污渍;入口易拉宝、展架摆放整齐，不要阻碍顾客通行。一个门口不能摆放超过2个物料;下雨天伞套机及雨伞架统-摆放在门内一侧(两侧均可)同时引导顾客把伞套装袋放置好',
          '员工衣着',
          '商品摆放',
          '宣传物料'
        ]
      }
    }
  },
  methods: {
    // 触发回退到上一页面
    onClickLeft() {
      this.$router.go(-1)
    },
    // 清除默认选中属性
    camera() {
      this.defaultStyle = false
    }
  }
}
</script>
<style lang="less" scoped>
.missionDetails {
  position: relative;
  // border: 1px solid red;
  height: 100%;
  // 头部样式
  /deep/.van-nav-bar__content {
    height: 44px;
    .van-icon-arrow-left {
      font-size: 23px;
      color: #141414;
    }
    .van-nav-bar__title {
      font-size: 18px;
    }
  }
  // 影藏滚动条
  ::-webkit-scrollbar {
    display: none;
  }
  // 横向导航样式
  .defaultStyle > li:first-child {
    color: #4a92ff;
    font-weight: bold;
  }
  .evaluationOption {
    display: flex;
    overflow: auto;
    color: #141414;
    font-size: 14px;
    margin: 24px 0;
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
      min-height: 338px;
      .option > div {
        padding: 17px 13px 42px 13px;
        line-height: 23px;

        .evaluate {
          position: absolute;
          bottom: 16px;
          line-height: 17px;
          span {
            margin-right: 16px;
          }
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
  .footer {
    position: absolute;
    width: 100%;
    bottom: 50px;
  }
  // 分数样式
  .fraction {
    text-align: center;
    margin-bottom: 16px;
    span {
      color: #e60012;
      margin-left: 10px;
    }
  }
  // 页尾按钮样式
  .buttonGroup {
    display: flex;
    justify-content: space-between;
    .van-button {
      width: 104px;
      height: 39px;
      border-radius: 23px;
    }
  }
}
</style>
