<template>
  <div class="register">
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed />
    <!-- 输入表单--注册 -->
    <van-form @submit="onSubmit">
      <!-- 手机号 -->
      <van-field
        v-model="username"
        label="+86"
        placeholder="请输入手机号"
        center
        clearable
      >
        <template #left-icon>
          <img :src="shoujiIcon" />
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field
        class="verification"
        v-model="Verification"
        center
        clearable
        placeholder="请输入验证码"
      >
        <template #left-icon>
          <img :src="yanzhengIcon" />
        </template>
        <template #button>
          <van-button plain type="primary">获取验证码</van-button>
        </template>
      </van-field>
      <!-- 密码 -->
      <van-field
        v-model="password"
        type="password"
        :placeholder="show ? '请输入新密码' : '请输入密码'"
        center
        clearable
      >
        <template #left-icon>
          <img :src="mimaIcon" />
        </template>
      </van-field>
      <!-- 再次输入新密码 -->
      <van-field
        v-if="show"
        v-model="password2"
        type="password"
        placeholder="请再次输入密码"
        center
        clearable
      >
        <template #left-icon>
          <img :src="mimaIcon" />
        </template>
      </van-field>
      <p>密码长度为6-14位，数字、字母、字符至少包含两种</p>
      <div class="submit">
        <van-button v-if="show" round block type="info" native-type="submit">
          提交
        </van-button>
        <van-button v-else round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 手机号初始值
      username: '',
      shoujiIcon: require('@/assets/icon/register/shouji.png'),
      // 验证码初始值
      Verification: '',
      yanzhengIcon: require('@/assets/icon/register/yanzheng.png'),
      // 密码初始值
      password: '',
      password2: '',
      mimaIcon: require('@/assets/icon/register/mima.png'),
      // 显示模块
      show: false
    }
  },

  methods: {
    // 路由跳转至上一页面
    onClickLeft() {
      this.$router.push({ name: 'Login' })
    },
    onSubmit(values) {
      console.log('submit', values)
    }
  },
  mounted() {
    this.show = this.$route.params.jump
  }
}
</script>
<style lang="less" scoped>
.register {
  background-color: #fff;
  height: 100%;
  .van-hairline--bottom::after {
    border: none;
  }
  /deep/.van-nav-bar__content {
    height: 44px;
    margin-top: 44px;
  }
  /deep/.van-nav-bar__left > i {
    color: #141414;
    font-size: 18px;
  }
  .van-form {
    margin: 116px 24px 18px;
    /deep/.van-cell {
      padding: 0px 12px;
      &:not(:first-child) {
        margin-top: 38px;
      }
    }
    /deep/.van-field__label {
      width: 36px;
      border-right: 1px solid #141414;
      line-height: 15px;
    }
    .van-field__left-icon > img {
      width: 25px;
      height: 25px;
      padding-top: 10px;
      padding-right: 6px;
    }
    .van-button--info {
      background-color: #e60012;
      border: none;
    }
    .van-button {
      height: 52px;
    }
    & > p {
      padding: 6px 16px 0;
      color: #141414;
      font-size: 10px;
      opacity: 0.5;
    }
    .submit {
      margin: 100px 33px 0;
    }
  }
  .verification {
    .van-button {
      border: 1px solid #e60012;
      color: #e60012;
      height: 36px;
      border-radius: 7px;
      margin-bottom: 5px;
    }
  }
}
</style>
