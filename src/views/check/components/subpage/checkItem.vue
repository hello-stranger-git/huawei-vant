<template>
  <div class="checkItem">
    <!-- 头部区域 -->
    <TopMessage :title="'点检'"></TopMessage>
    <!-- 点检截图区域 -->
    <VideoImage :image="screen"></VideoImage>
    <!-- tab选项区域 -->
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="auto"
    >
      <template #content>
        <div class="optionContent" v-if="active === 0">
          <van-checkbox-group v-model="checked">
            <van-checkbox v-for="(item, i) of itemsData" :key="i" :name="i">
              {{ item }}
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </template>
    </van-tree-select>
    <!-- 备注 -->
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
    <!-- 提交按钮 -->
    <div class="Submit">
      <van-button class="left_button">不合格 -5</van-button>
      <van-button class="right_button">严重不合格 -10</van-button>
    </div>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
import VideoImage from '@/components/check/subpage/videoImage.vue' // 点检图操作区
import SendOut from '@/components/check/subpage/sendOut.vue' // 抄送

export default {
  components: {
    TopMessage,
    VideoImage,
    SendOut
  },
  data() {
    return {
      screen: require('@/assets/videoImage/videoTest.png'), // 点检图
      huaBiIcon: require('@/assets/icon/check/huabi.png'), // 画笔图标
      xuanKuangIcon: require('@/assets/icon/check/kuang.png'), // 选框图标
      cheXiaoIcon: require('@/assets/icon/check/chexiao.png'), // 撤销图标
      checked: [], // tab选项选中值
      message: '', // 备注默认值
      active: 0,
      // 选项数据
      items: [
        { text: '店内环境' },
        { text: '员工衣着' },
        { text: '商品摆放' },
        { text: '宣传物料' },
        { text: '营销禁忌' }
      ],
      itemsData: [
        '厅内地面/点面垃圾清理(城区厅和县城厅10分钟，乡镇厅30分钟) 1分',
        '预处理物料:业厅配 业务预处理单、填写台、配有笔',
        '业厅各功能区域应设置醒目标志，业务办理台席应设置清晰的业务指示',
        '业厅各功能区域应设置醒目标志，业务办理台席应设置清晰的业务指示',
        '厅内应有服务标准 服务公约、服务监督牌厅内台席全部开放，有工作人员在现场协助维持秩序分流客户'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.checkItem {
  background-color: #efefef;
  padding-bottom: 34px;
  // 头部样式
  .TopMessage {
    top: 0;
  }
  // 点检截图区域样式
  .videoImage {
    margin-top: 88px;
  }
  // 选项区域
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

    // 选项右侧样式
    .van-tree-select__content {
      border-radius: 0px 10px 10px 10px;
    }
    .van-checkbox {
      margin-bottom: 30px;
      font-size: 14px;
    }
    .van-checkbox-group {
      padding: 17px 14px 16px 28px;
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
}
</style>
