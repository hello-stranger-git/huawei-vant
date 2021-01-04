<template>
  <div class="contain">
    <div class="header"></div>
    <div class="statu">
      {{ $route.query.appeal ? '申诉详情' : '整改详情' }}
      <div
        class="back"
        @click="$router.push({ name: 'Repair', params: { index: 1 } })"
      >
        <img :src="goBack" />
      </div>
      <div class="process" @click="$router.push({ name: 'checkProcess' })">
        <img :src="process" />
      </div>
    </div>
    <div class="main">
      <div class="date">
        <div class="person"><img :src="person" /><span>刘德华</span></div>
        <div class="time">{{ date }}</div>
      </div>
      <div class="camera">
        <img :src="img" alt="" />
      </div>
      <div class="problem">
        <img :src="protect" />
        <div class="right">
          <div>标杆店及购物中心店模板</div>
          <div class="number">3个点检问题</div>
          <div class="score">-6分</div>
        </div>
      </div>
      <div class="detail">
        <div class="more" @click="$router.push({ name: 'lookDetails' })">
          查看更多
        </div>
      </div>
      <div class="flex">
        <textarea cols="30" rows="10" placeholder="请输入处理意见"></textarea>
      </div>
    </div>
    <div class="footer">
      <div class="appeal" @click="submit">不通过</div>
      <div class="change" @click="submit">通过</div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/screenImage/repairImage.png' // 照片
import person from '@/assets/icon/home/navTabs/person.png' // 照片
import goBack from '@/assets/icon/home/navTabs/back.png' // 照片
import process from '@/assets/icon/home/navTabs/process.png' // 照片
import protect from '@/assets/icon/home/navTabs/protect.png' // 照片
import { Toast } from 'vant'
export default {
  components: {},
  data() {
    return {
      img,
      person,
      goBack,
      process,
      protect,
      date: new Date().toLocaleString()
    }
  },
  created() {
    // console.log(this.$route.params)
  },
  methods: {
    submit() {
      Toast('操作成功')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  position: relative;
  // height: 100%;
  background-color: #fff;
  .footer {
    height: 140px;
  }
  .appeal,
  .change {
    position: absolute;
    bottom: 34px;
    width: 100px;
    height: 39px;
    line-height: 39px;
    border-radius: 23px;
    font-size: 14px;
    text-align: center;
    background-color: #ff7b40;
    color: #fff;
  }
  .appeal {
    left: 70px;
  }
  .change {
    right: 70px;
    background-color: #4a92ff;
  }
}
.header {
  height: 44px;
}
.statu {
  position: relative;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  text-align: center;
  .back {
    position: absolute;
    left: 12px;
    top: 5px;
  }
  .process {
    position: absolute;
    right: 12px;
    top: 5px;
  }
}
.main {
  .date {
    position: relative;
    height: 46px;
    .person {
      position: absolute;
      left: 12px;
      bottom: 12px;
      font-size: 14px;
      img {
        vertical-align: bottom;
        margin-right: 6px;
      }
    }
    .time {
      position: absolute;
      right: 13px;
      bottom: 10px;
      height: 17px;
      line-height: 17px;
      color: #959595;
      font-size: 12px;
    }
  }
  .camera {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .problem {
    position: relative;
    display: flex;
    font-size: 14px;
    margin-top: 32px;
    margin-left: 12px;
    .right {
      padding-left: 6px;
      & > div {
        height: 20px;
      }
      .number {
        line-height: 24px;
        font-size: 12px;
        color: #e60012;
        vertical-align: bottom;
      }
      .score {
        position: absolute;
        right: 12px;
        top: 12px;
        color: #e60012;
      }
    }
  }
  .detail {
    height: 45px;
    position: relative;
    .more {
      position: absolute;
      right: 12px;
      bottom: 0;
      font-size: 12px;
      color: #4a92ff;
    }
  }
  .flex {
    display: flex;
    textarea {
      flex: 1;
      margin: 54px 12px 0;
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
}
</style>
