<template>
  <div>
    <div class="container1" v-for="(query, index) in data" :key="index">
      <div class="cell" v-for="(item, i) in query" :key="i">
        <div class="icon">
          <van-icon :name="icons[item.icon]" size="24" />
        </div>
        <div class="main" :class="i === query.length - 1 ? 'noBorder' : ''">
          {{ item.value }}
        </div>
        <div class="right">
          <span>{{ item.label }}</span>
          <van-icon :name="arrow" size="14" class="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import huawei from '@/assets/icon/huawei.png'
import arrow from '@/assets/icon/arrow14px.png'
import iconStatu from '@/assets/icon/userStoreStatu.png'
import iconAdress from '@/assets/icon/userAdress.png'
import iconTime from '@/assets/icon/userTime.png'
import iconSale from '@/assets/icon/userSale.png'
import iconAlaarm from '@/assets/icon/userAlarm.png'
import iconLock from '@/assets/icon/userLock.png'
import iconOrder from '@/assets/icon/userOrder.png'
import iconAbout from '@/assets/icon/userAbout.png'

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
      // data: cellData,
      icons: [
        iconStatu,
        iconAdress,
        iconTime,
        iconSale,
        iconAlaarm,
        iconLock,
        iconOrder,
        iconAbout
      ],
      logo: huawei,
      arrow,
      items: [{ value: '营业状态', label: '营业' }, { value: '地址' }]
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
      border-bottom: 0.3px solid rgba(112, 112, 112, 0.5);
    }
    .noBorder {
      border: 0;
    }
    .right {
      // float: right;
      span {
        height: 17px;
        line-height: 17px;
        position: absolute;
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
        color: rgba(52, 52, 52, 0.5);
      }
      .arrow {
        position: absolute;
        right: 12px;
        top: 48%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
