<template>
  <div
    class="contain"
    :style="{
      height: title ? '100%' : '',
      backgroundColor: title ? '#fff' : ''
    }"
  >
    <!-- 头部 -->
    <!-- <div class="header"></div> -->
    <!-- 没有query就选择默认值 -->
    <div class="statu">
      {{ title ? title : '查看详情' }}
      <div class="back" @click="$router.go(-1)"><img :src="goBack" /></div>
    </div>
    <!-- 整改、审核详情公用 -->
    <template v-if="!title">
      <div class="detail" v-for="(item, i) in data" :key="i">
        <h3>{{ item.title }}</h3>
        <div class="item" v-for="(query, k) in item.problem" :key="k">
          <div class="title">
            {{ query.position }}<span>{{ query.score }}</span>
          </div>
          <div class="text">{{ query.value }}</div>
        </div>
      </div>
    </template>
    <!-- tab1申诉详情 -->
    <div class="main" v-else>
      <div class="detailPic">
        <div><img :src="pic" alt="" /></div>
        <div><img :src="pic" alt="" /></div>
        <div><img :src="pic" alt="" /></div>
      </div>
      <div class="flex">
        <textarea cols="30" rows="10" placeholder="请输入处理意见"></textarea>
      </div>
    </div>

    <div class="submit" v-if="title" @click="submit">提交</div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import goBack from '@/assets/icon/home/navTabs/back.png'
import pic from '@/assets/icon/home/navTabs/lookDetail.png' // 照片

export default {
  data() {
    return {
      goBack,
      pic,
      data: [
        {
          title: '后方',
          problem: [
            {
              position: '仓库',
              score: '-6',
              value: '提供多样店铺模板，快速搭建网上商城 '
            },
            {
              position: '收银台',
              score: '-6',
              value:
                '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失'
            }
          ]
        },
        {
          title: '后方',
          problem: [
            {
              position: '仓库',
              score: '-6',
              value: '提供多样店铺模板，快速搭建网上商城 '
            },
            {
              position: '收银台',
              score: '-6',
              value:
                '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失'
            }
          ]
        },
        {
          title: '标准化服务流程',
          problem: [
            {
              position: '迎宾',
              score: '-6',
              value: '提供多样店铺模板，快速搭建网上商城'
            },
            {
              position: '送宾',
              score: '-6',
              value:
                '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失'
            }
          ]
        }
      ],
      data1: '',
      title: ''
    }
  },
  created() {
    this.title = this.$route.query.title
  },
  methods: {
    submit() {
      Toast('操作成功')
      this.$router.push({ name: 'Repair' })
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  position: relative;
  background-color: #efefef;
  // padding-bottom: 32px;
  .header {
    height: 44px;
    background-color: #fff;
  }
  .statu {
    background-color: #fff;
    position: relative;
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    .back {
      position: absolute;
      left: 12px;
      top: 5px;
    }
  }
  .detail {
    // height: 295px;
    margin: 12px 12px 0;
    padding: 16px 16px 0;
    background-color: #fff;
    border-radius: 10px;
    h3 {
      font-size: 16px;
      padding-bottom: 12px;
    }
    .item {
      margin-top: 18px;
      padding-bottom: 19px;
      border-bottom: 1px solid rgba(112, 112, 112, 0.5);
      font-size: 14px;
      color: #141414;
      &:last-child {
        border-bottom: none;
      }
      .title {
        height: 20px;
        line-height: 20px;
        span {
          float: right;
          color: #e60012;
        }
      }
      .text {
        margin-top: 10px;
        font-size: 12px;
        color: #b9b9b9;
      }
    }
  }
}
.detailPic {
  display: flex;
  // margin: 12px 12px 0;
  height: 116px;
  width: 100%;
  & > div {
    width: 112px;
    margin-left: 8px;
    &:first-child {
      margin-left: 12px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.flex {
  display: flex;
  margin: 34px 12px 0;
  textarea {
    flex: 1;
    padding: 10px 10px 0 12px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #959595;
    color: #141414;
    height: 143px;
    font-size: 12px;
    line-height: 17px;
  }
}
.main {
  // background-color: #fff;
  position: relative;
}
.submit {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 32px;
  width: 309px;
  height: 39px;
  line-height: 39px;
  border-radius: 23px;
  background-color: #4a92ff;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
</style>
