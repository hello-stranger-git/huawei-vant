<template>
  <div class="userItem">
    <img class="userImage" :src="img" />
    <p class="date">{{ date }}</p>
    <p class="age">
      <i
        :class="[
          sex == 'woman' ? 'woman' : 'man',
          'iconfont',
          'iconweibiaoti4'
        ]"
      ></i>
      {{ age }}
    </p>
    <p :class="[count == 1 ? 'firstCount' : '', 'count']">
      <span v-if="count != 1">{{ count }}次到店</span>
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
    }
  }
}
</script>

<style lang="less" scoped>
.userItem {
  .userImage {
    width: 50px;
    height: 55px;
    border-radius: 5px;
  }
  .date {
    color: #909090;
    font-size: 10px;
  }
  .age {
    font-size: 10px;
    .iconfont {
      font-size: 10px;
    }
    .woman {
      color: #f98181;
    }
    .man {
      color: #2194d1;
    }
  }
  .count {
    font-size: 10px;
    text-align: center;
  }

  .firstCount {
    background-color: #50a6ff;
    color: #ffffff;
    border-radius: 5px;
    font-size: 10px;
    width: 50px;
    margin: auto;
    text-align: center;
  }
}
</style>
