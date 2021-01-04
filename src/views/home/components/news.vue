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
      <van-cell
        v-for="(item, i) of newsData"
        :key="i"
        :title="item.text"
        :value="item.time"
      >
        <template #icon>
          <!-- 已读图标 -->
          <p v-if="!item.read"></p>
          <!-- 头像 -->
          <img :src="item.icon" />
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log('已读')
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
</style>
