<template>
  <div class="container">
    <!-- 店铺信息 -->
    <div class="store">
      <div class="logo">
        <van-icon :name="logo" size="32" />
      </div>
      <div class="storeInf">
        <div class="storeName">深圳龙岗区华为体验店</div>
        <span>店长：张鹏</span>
        <span>区域负责人：兰宇贵</span>
      </div>
      <van-icon size="14" :name="arrow" class="arrow" />
    </div>
    <!-- 单元格 -->
    <UserItem :data="cellData"></UserItem>
    <!-- logout -->
    <div class="logout">
      <span>退出账号</span>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import UserItem from './cpmponents/userItem'
import huawei from '@/assets/icon/user/userHuawei.png'
import arrow from '@/assets/icon/arrow14px.png'
import iconStatu from '@/assets/icon/user/userStoreStatu.png'
import iconAdress from '@/assets/icon/user/userAdress.png'
import iconTime from '@/assets/icon/user/userTime.png'
import iconSale from '@/assets/icon/user/userSale.png'
import iconAlarm from '@/assets/icon/user/userAlarm.png'
import iconLock from '@/assets/icon/user/userLock.png'
import iconOrder from '@/assets/icon/user/userOrder.png'
import iconAbout from '@/assets/icon/user/userAbout.png'

export default {
  components: {
    UserItem
  },
  data() {
    return {
      cellData: [],
      logo: huawei,
      arrow
    }
  },
  created() {
    this.cellData = [
      [
        {
          value: '营业状态',
          icon: iconStatu,
          // label: '营业',
          switch: true
        },
        {
          value: '地址',
          icon: iconAdress,
          arrow: true
        },
        {
          value: '上下班时间',
          icon: iconTime,
          label: '10:00-22:00',
          arrow: true
        }
      ],
      [
        {
          value: '销售额补录',
          icon: iconSale,
          input: true
        },
        {
          value: '报警主机',
          icon: iconAlarm,
          arrow: true
        },
        {
          value: '密码修改',
          icon: iconLock,
          arrow: true
        }
      ],
      [
        {
          value: '工单',
          icon: iconOrder,
          arrow: true
        },
        {
          value: '关于',
          icon: iconAbout,
          arrow: true
        }
      ]
    ]
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 12px 0;
  background-color: #efefef;
}
.store {
  margin-top: 12px;
  border-radius: 10px;
  position: relative;
  display: flex;
  background-color: #fff;
  height: 66px;
  .logo {
    width: 60px;
    height: 100%;
    .van-icon {
      padding: 18px 16px 16px 12px;
    }
  }
  .storeInf {
    flex: 1;
    height: 100%;
    color: #343434;
    .storeName {
      font-size: 16px;
      line-height: 22px;
      height: 22px;
      font-weight: bold;
      padding-top: 12px;
    }
    span {
      display: inline-block;
      height: 17px;
      line-height: 17px;
      font-size: 12px;
      margin: 3px 24px 0 0;
    }
  }
  .arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.logout {
  background-color: #fff;
  font-size: 16px;
  height: 51px;
  border-radius: 27px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    height: 22px;
    color: #e60012;
    line-height: 22px;
  }
}
.bottom {
  height: 83px;
  // background-color: pink;
}
</style>
