<template>
  <div class="sendOut">
    <!-- 选择 -->
    <van-cell-group @click="showPopup">
      <van-field
        v-model="selectedValue"
        :label="SelectionBoxData.label"
        left-icon="smile-o"
        readonly
      >
        <template #left-icon>
          <img :src="fiJiIcon" />
        </template>
        <template #right-icon>
          <img :src="moreIcon" />
        </template>
      </van-field>
    </van-cell-group>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <!-- 弹出层头部 -->
      <div class="popup_top">
        <div @click="confirm" class="popup_confirm">确认</div>
        <div class="popup_title">{{ SelectionBoxData.text }}</div>
        <div @click="cancel" class="popup_cancel">取消</div>
      </div>
      <!-- 弹出层内容 -->
      <van-checkbox-group v-model="result">
        <van-checkbox
          v-for="(item, i) of SelectionBoxData.ccPerson"
          :key="i"
          :name="item"
        >
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
  props: {
    SelectionBoxData: {
      type: Object
    },
    selectValues: {
      type: Array
    }
  },
  data() {
    return {
      selectedValue: '',
      moreIcon: require('@/assets/icon/check/more.png'), // 更多图标
      fiJiIcon: require('@/assets/icon/check/feiji.png'), // 纸飞机图标
      // 是否显示弹出层
      show: false,
      // 弹出层选中值
      result: []
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
      this.show = false
      this.$emit('change', this.result)
    }
  },
  watch: {
    selectValues: function(newVal, oldVal) {
      this.selectedValue = ''
      var obj = []
      for (var item of newVal) {
        obj.push(item.name)
      }
      this.selectedValue = obj.join('；')
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
