<template>
  <div class="checkItem">
    <!-- 头部区域 -->
    <TopMessage></TopMessage>
    <!-- 通知栏 -->
    <Notice></Notice>
    <!-- 点检屏幕区域 -->
    <VideoImage></VideoImage>
    <!-- 选项区域 -->
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
    <!-- 抄送人 -->
    <van-cell-group @click="showPopup">
      <van-field v-model="value1" label="抄送" left-icon="smile-o" readonly>
        <template #left-icon>
          <img :src="fiJiIcon" />
        </template>
        <template #right-icon>
          <img :src="moreIcon" />
        </template>
      </van-field>
    </van-cell-group>
    <!-- 下方弹出层 -->
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <!-- 弹出层头部 -->
      <div class="popup_top">
        <div @click="confirm" class="popup_confirm">确认</div>
        <div class="popup_title">选择抄送人</div>
        <div @click="cancel" class="popup_cancel">取消</div>
      </div>
      <!-- 弹出层内容 -->
      <van-checkbox-group v-model="result">
        <van-checkbox v-for="(item, i) of ccPerson" :key="i" :name="item.name">
          <template #default>
            <div>{{ item.name }}</div>
            <div class="post">{{ item.post }}</div>
          </template>
        </van-checkbox>
      </van-checkbox-group>
    </van-popup>
    <!-- 提交按钮 -->
    <div class="Submit">
      <van-button class="left_button">不合格 -5</van-button>
      <van-button class="right_button">严重不合格 -10</van-button>
    </div>
  </div>
</template>
<script>
import TopMessage from '@/components/top' // 顶部信息
import Notice from '@/layout/components/notice' // 通知栏
import VideoImage from '@/components/check/subpage/videoImage.vue' // 点检截图

export default {
  components: {
    TopMessage,
    Notice,
    VideoImage
  },
  data() {
    return {
      screen: require('@/assets/screenImage/screen1.png'), // 点检图
      huaBiIcon: require('@/assets/icon/check/huabi.png'), // 画笔图标
      xuanKuangIcon: require('@/assets/icon/check/kuang.png'), // 选框图标
      cheXiaoIcon: require('@/assets/icon/check/chexiao.png'), // 撤销图标
      fiJiIcon: require('@/assets/icon/check/feiji.png'), // 纸飞机图标
      moreIcon: require('@/assets/icon/check/more.png'),
      checked: [], // 选项选中值
      message: '', // 备注默认值
      active: 0,
      value1: '张某某；某某组', // 抄送默认值
      show: false, // 弹出层默认值
      result: [], // 弹出层容默认选中值
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
      ],
      // 弹出层内容数据
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
  },
  methods: {
    showPopup() {
      this.show = true
    },
    confirm() {
      this.value1 = this.result.join('；')
      this.show = false
    },
    cancel() {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.checkItem {
  background-color: #efefef;
  padding-bottom: 34px;
}
// 点检屏幕样式
.screen {
  margin-top: 12px;
  height: 206px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
// 操作区域样式
.van-row {
  background-color: #fff;
  padding: 16px 0;
  .van-col {
    width: 24px;
    height: 24px;
    img {
      width: 100%;
    }
  }
}
// 选项区域
.van-tree-select {
  margin: 12px 12px 0 0;
}
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
// 备注样式
.remarks {
  margin: 12px 12px 12px 94px;
  width: auto;
  height: 42px;
  border-radius: 7px;
}
// 抄送样式
/deep/.van-cell-group {
  // width: 351px;
  height: 42px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 12px;
  .van-field__left-icon {
    width: 17px;
    height: 17px;
    img {
      width: 100%;
      margin-top: 3px;
    }
  }
  .van-field__right-icon {
    width: 19px;
    height: 19px;
    img {
      width: 100%;
    }
  }
  .van-cell {
    input {
      color: rgba(20, 20, 20, 0.7);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .van-cell__title.van-field__label {
      width: 70px;
    }
  }
}
// 弹出层样式
.van-popup {
  .popup_top {
    position: fixed;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 52px;
    z-index: 99;
    div {
      margin: 0 24px;
    }
    .popup_confirm {
      color: #4a92ff;
    }
    .popup_title {
      font-size: 18px;
      font-weight: 800;
    }
    .popup_cancel {
      color: #b9b9b9;
    }
  }
  .van-checkbox-group {
    margin-top: 52px;
    /deep/.van-checkbox__label {
      display: flex;
      width: 100%;
      // border: 1px solid red;
      div {
        flex-basis: 50%;
        color: #000;
        text-align: center;
      }
      .post {
        font-size: 12px;
      }
    }
  }
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
</style>
