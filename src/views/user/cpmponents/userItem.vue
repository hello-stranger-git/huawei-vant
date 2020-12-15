<template>
  <div>
    <div class="container1" v-for="(query, index) in data" :key="index">
      <div class="cell" v-for="(item, i) in query" :key="i">
        <div class="icon">
          <van-icon :name="item.icon" size="24" />
        </div>
        <div class="main" :class="i === query.length - 1 ? 'noBorder' : ''">
          {{ item.value }}
        </div>

        <div class="right">
          <div v-if="item.input" class="input">
            <input
              type="number"
              placeholder="今天"
              v-model="saleInput1"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='今天'"
            />
            <input
              type="number"
              placeholder="昨天"
              v-model="saleInput2"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='昨天'"
            />
            <input
              type="number"
              placeholder="前天"
              v-model="saleInput3"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='前天'"
            />
          </div>
          <div class="rightBox">
            <span v-if="item.label">{{ item.label }}</span>
            <span v-if="item.switch">{{ checked ? '营业' : '未营业' }}</span>
            <van-switch
              v-model="checked"
              v-if="item.switch"
              active-color="#4CD964"
              size="24px"
            />
            <van-icon :name="arrow" size="14" class="arrow" v-if="item.arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from '@/assets/icon/arrow14px.png'
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      arrow,
      checked: false,
      saleInput1: '',
      saleInput2: '',
      saleInput3: ''
    }
  }
}
</script>

<style lang="less" scoped>
.container1 {
  margin-top: 18px;
  border-radius: 10px;
  background-color: #fff;
  .cell {
    height: 46px;
    line-height: 48px;
    display: flex;
    border: 1px;
    position: relative;
    .icon {
      width: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main {
      flex: 1;
      color: #343434;
      font-size: 14px;
      position: relative;
    }
    .main::after {
      content: '';
      display: block;
      position: absolute;
      left: -50%;
      width: 200%;
      height: 1px;
      background: rgba(112, 112, 112, 0.5);
      transform: scale(0.5);
    }
    .noBorder::after {
      height: 0;
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      .rightBox {
        height: 46px;
        .van-switch {
          margin-right: 12px;
          float: right;
          // width: 50px;
          // height: 25px;
          top: 50%;
          transform: translateY(-50%);
        }
        // .van-switch__node {
        //   width: 25px;
        //   height: 25px;
        // }
      }
      span {
        height: 17px;
        line-height: 17px;
        margin-right: 8px;
        font-size: 12px;
        color: rgba(52, 52, 52, 0.5);
      }
      .arrow {
        margin-right: 12px;
      }
      input {
        width: 51px;
        height: 24px;
        font-size: 12px;
        color: #343434;
        line-height: 24px;
        border-radius: 7px;
        // border: 1px solid rgba(185, 185, 185, 0.5);
        border: none;
        border: 1px solid #b9b9b9;
        text-align: center;
        margin-right: 12px;
        padding: 0;
        outline: none;
        background-color: #fff;
      }
      input::-webkit-input-placeholder {
        color: #b9b9b9;
        &:last-child {
          background-color: pink;
        }
      }
    }
  }
}
</style>
