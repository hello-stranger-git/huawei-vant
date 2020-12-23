<template>
  <div class="login">
    <div class="logoImag">
      <img :src="logo" width="104px" height="104px" />
      <p>乐客店·好望</p>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        class="input"
        name="用户名"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        class="input password"
        :right-icon="eyes"
      />
      <div class="check">
        <van-checkbox v-model="checked" icon-size="12px">记住密码</van-checkbox>
      </div>
      <div style="width:308px;height:52px;margin:auto;margin-top:65px">
        <van-button @click="login" round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
      <div class="bottom">
        <span style="cursor: pointer;" @click="rePassword">忘记密码</span>
        <!-- <span class="line">|</span> -->
        <!-- <span style="cursor: pointer;" @click="regist">
          立即注册
        </span> -->
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
      logo: require('@/assets/icon/login/huawei-logo.png'),
      checked: false,
      eyes: require('@/assets/icon/login/eyes.png')
    }
  },
  methods: {
    // 点击提交按钮
    onSubmit(values) {},
    // 注册跳转
    regist() {
      this.$router.push({ name: 'Register', params: { jump: false } })
    },
    // 忘记密码
    rePassword() {
      this.$router.push({ name: 'Register', params: { jump: true } })
    },
    login() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-color: #ffffff;
  height: 100%;
  .logoImag {
    display: flex;
    align-items: center;
    padding-top: 99px;
    flex-direction: column;
    p {
      margin-top: 6px;
      color: #e60012;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .input {
    background-color: #ececec;
    width: 308px;
    height: 52px;
    margin: auto;
    margin-top: 48px;
    border-radius: 27px;
    padding: 0;
    line-height: 52px;
    /deep/.van-field__control {
      text-align: center;
    }
    &.password {
      margin-top: 24px;
    }
  }
  .van-button {
    height: 52px;
  }
  .check {
    width: 308px;
    margin: auto;
    .van-checkbox {
      justify-content: flex-end;
      margin-top: 18px;
      /deep/.van-checkbox__label {
        font-size: 12px;
        color: #141414;
        margin-left: 4px;
      }
    }
  }
  /deep/.van-button--info {
    background-color: #e60012;
    border: 1px solid #e60012;
    .van-button__text {
      font-size: 14px;
      color: #ffffff;
    }
  }

  /deep/.van-field__right-icon {
    position: absolute;
    right: 18px;
  }
  .bottom {
    margin: auto;
    text-align: center;
    width: 308px;
    margin-top: 120px;
    color: #141414;
    font-size: 14px;
    .line {
      margin: 0 41px;
    }
  }
}
</style>
