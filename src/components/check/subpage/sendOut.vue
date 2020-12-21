<template>
  <div class="sendOut">
    <!-- 抄送区域 -->
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      moreIcon: require('@/assets/icon/check/more.png'), // 更多图标
      fiJiIcon: require('@/assets/icon/check/feiji.png'), // 纸飞机图标
      // 默认抄送人
      value1: '张某某；某某组',
      // 是否显示弹出层
      show: false,
      // 弹出层选中值
      result: [],
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
    // 显示弹出层
    showPopup() {
      this.show = true
    },
    // 隐藏弹出层
    cancel() {
      this.show = false
    },
    confirm() {
      this.value1 = this.result.join('；')
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
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
    padding: 17px 14px 16px 28px;
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
    .van-checkbox {
      margin-bottom: 30px;
      font-size: 14px;
    }
  }
}
</style>
