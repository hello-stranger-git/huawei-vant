<template>
  <div class="userItem">
    <!-- 头像 -->
    <div class="headPortrait ">
      <img class="userImage" :src="img" />
      <img v-if="vip" class="vipImage" :src="vipIcon" />
    </div>
    <!-- 时间 -->
    <p class="date">
      <img :src="timeIcon" />
      <span>{{ date }}</span>
    </p>
    <!-- 年龄 -->
    <p class="age">
      <img :src="sex == 'woman' ? womanIcon : manIcon" />
      <span>{{ age }}岁</span>
    </p>
    <!-- 来店次数 -->
    <p :class="[count == 1 ? 'textColor' : '', 'frequency']">
      <img v-if="crossStore" :src="storeIcon" />
      <span :class="crossStore ? '' : 'marginLeft'" v-if="count != 1"
        >{{ count }}次到店</span
      >
      <span v-else>新客</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      // 客户头像
      type: String
    },
    date: {
      // 访问时间
      type: String
    },
    age: {
      // 年龄段
      type: String
    },
    count: {
      // 访问次数
      type: Number
    },
    sex: {
      // 性别
      type: String
    },
    crossStore: {
      // 跨店
      type: Boolean,
      default: false
    },
    vip: {
      // vip
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timeIcon: require('@/assets/icon/home/enterStore/timeIcon.png'), // 时间图标
      manIcon: require('@/assets/icon/home/enterStore/manIcon.png'), // 男性图标
      womanIcon: require('@/assets/icon/home/enterStore/womanIcon.png'), // 女性图标
      storeIcon: require('@/assets/icon/home/enterStore/storeIcon.png'), // 店铺图标
      vipIcon: require('@/assets/icon/home/enterStore/vipIcon.png') // 店铺图标
    }
  }
}
</script>

<style lang="less" scoped>
.userItem {
  p {
    font-size: 12px;
    line-height: 17px;
    display: flex;
    img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
      margin-top: 1px;
    }
  }
  .headPortrait {
    position: relative;
    display: flex;
    justify-content: center;
    .userImage {
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }
    .vipImage {
      width: 20px;
      height: 15px;
      position: absolute;
      bottom: 0px;
      right: 2px;
    }
  }
  .date,
  .age {
    color: #343434;
    span {
      opacity: 0.7;
    }
  }
  .date {
    margin-top: 4px;
  }
  .age {
    margin-top: 3px;
  }
  .frequency {
    color: #343434;
    margin-top: 6px;
  }
  .textColor {
    color: #4a92ff;
    margin-left: 16px;
  }
}
.marginLeft {
  margin-left: 16px;
}
</style>
