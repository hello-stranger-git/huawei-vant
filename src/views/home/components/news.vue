<template>
  <div class="news">
    <!-- 头部区域 -->
    <van-nav-bar
      title="消息"
      left-arrow
      @click-left="onClickLeft"
      right-text="全部已读"
      @click-right="onClickRight"
    />
    <!-- 消息区域 -->
    <div class="newsBody">
      <div v-for="(item, i) of newsData" :key="i" @click="getMessage(item)">
        <van-cell :title="item.text" :value="item.time">
          <template #icon>
            <!-- 已读图标 -->
            <p v-if="!item.read"></p>
            <!-- 头像 -->
            <img :src="item.icon" />
          </template>
        </van-cell>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <!-- <div class="block" /> -->
        <div class="imgDiv">
          <img :src="cha" width="14px" height="14px" @click="close" />
        </div>
        <div class="message">
          <van-col span="12">
            <img :src="userMessage.icon" style="border-radius:50%" />
          </van-col>
          <van-col span="12" class="userMessage">
            <p>姓名：<span>张鹏</span></p>
            <p>部门：<span>技术部</span></p>
            <p>考勤时间：<span>08:52</span></p>
            <p style="color:#E60012">考勤状态：<span>考勤成功</span></p>
          </van-col>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cha: require('@/assets/icon/top/cha.png'),
      // 消息数据
      newsData: [
        {
          id: 1,
          icon: require('@/assets/icon/home/news/xiaoxi.png'),
          text: '店长张鹏登录成功',
          time: '2020/12/17 16:04',
          read: true
        },
        {
          id: 2,
          icon: require('@/assets/icon/home/news/touxiang.png'),
          text: '有新客进入门店，请注意接待！',
          time: '2020/12/17 16:04',
          read: false
        },
        {
          id: 3,
          icon: require('@/assets/icon/home/news/touxiang.png'),
          text: '有新客进入门店，请注意接待！',
          time: '2020/12/17 16:04',
          read: false
        },
        {
          id: 4,
          icon: require('@/assets/icon/home/news/touxiang.png'),
          text: '张某某进入门店，请注意接待！',
          time: '2020/12/17 16:04',
          read: true
        },
        {
          id: 5,
          icon: require('@/assets/icon/home/news/xiaoxi.png'),
          text: '密码修改成功',
          time: '2020/12/17 16:04',
          read: false
        },
        {
          id: 6,
          icon: require('@/assets/icon/home/news/touxiang.png'),
          text: '有新款进入门店，请注意接待！',
          time: '2020/12/17 16:04',
          read: false
        }
      ],
      userMessage: { icon: require('@/assets/icon/home/news/touxiang.png') },
      show: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log('已读')
    },
    getMessage(data) {
      this.show = true
      // this.userMessage = data
    },
    close() {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.news {
  // border: 1px solid red;
  height: 100%;
  background: #fff;
}
// 头部样式
/deep/.van-nav-bar {
  padding-top: 11px;
  .van-nav-bar__content {
    height: auto;
    line-height: 25px;
  }
  .van-nav-bar__left {
    .van-icon {
      font-size: 23px;
      color: #141414;
    }
  }
  .van-nav-bar__title {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
  .van-nav-bar__right {
    .van-nav-bar__text {
      color: #000000;
      font-size: 14px;
    }
  }
}
.van-hairline--bottom::after {
  border: 0;
}
// 消息区域样式
.newsBody {
  padding: 20px 0 16px;
  .van-cell {
    line-height: 40px;
    padding: 12px 12px 12px 18px;
    & > p {
      width: 0;
      height: 0;
      border: 4px solid #4a92ff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    & > img {
      width: 40px;
      height: 40px;
      margin-left: 16px;
    }
    .van-cell__title {
      font-size: 12px;
      flex: 0 0 182px;
      padding-left: 16px;
    }
    .van-cell__value {
      font-size: 10px;
    }
    &::after {
      margin-left: 53px;
    }
  }
}
//遮罩层
.van-overlay {
  .wrapper {
    background-color: #fff;
    position: absolute;
    top: 50%;
    height: 204px;
    width: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .imgDiv {
    position: absolute;
    top: 13px;
    right: 15px;
  }
  .message {
    margin-top: 50px;
    text-align: center;
    .userMessage {
      margin-top: 6px;
      p {
        font-size: 12px;
        font-weight: 400;
        padding-left: 15px;
        color: #141414;
        margin-bottom: 14px;
        text-align: left;
        span {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
