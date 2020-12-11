<template>
  <div>
    <!-- 日期选择 -->
    <DateSelect></DateSelect>
    <!-- 懒加载图片列表 -->
    <div class="todayCustomer">
      <van-list
        v-model="loading"
        finished-text="没有更多了"
        @load="onLoad"
        :finished="finished"
      >
        <van-row
          v-for="(item, index) in arr"
          :key="index"
          type="flex"
          justify="space-around"
        >
          <van-col span="4" v-for="(item1, i) in item" :key="i">
            <UserItem
              :img="item1.img"
              :date="item1.date"
              :age="item1.age"
              :count="item1.count"
              :sex="item1.sex"
            ></UserItem>
          </van-col>
        </van-row>
      </van-list>
    </div>
  </div>
</template>
<script>
import DateSelect from './dateSelect.vue'
import UserItem from '@/components/home/userItem'
export default {
  components: {
    DateSelect,
    UserItem
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      loading: false,
      arr: [],
      finished: false,
      userArr: [
        {
          img: require('@/assets/enterStore/enterStore1.png'),
          date: '19:45:21',
          age: '35~40',
          count: 1,
          sex: 'woman'
        },
        {
          img: require('@/assets/enterStore/enterStore2.png'),
          date: '18:45:21',
          age: '35~40',
          count: 8,
          sex: 'man'
        },
        {
          img: require('@/assets/enterStore/enterStore3.png'),
          date: '17:45:21',
          age: '35~40',
          count: 1,
          sex: 'man'
        },
        {
          img: require('@/assets/enterStore/enterStore4.png'),
          date: '16:45:21',
          age: '35~40',
          count: 10,
          sex: 'man'
        },
        {
          img: require('@/assets/enterStore/enterStore5.png'),
          date: '15:45:21',
          age: '35~40',
          count: 3,
          sex: 'man'
        }
      ]
    }
  },
  created() {
    this.arr = [this.userArr, this.userArr, this.userArr, this.userArr]
  },
  methods: {
    onLoad() {
      this.loading = true
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.arr.push(this.userArr)
        }
        if (this.arr.length > 20) {
          this.finished = true
        } else {
          this.loading = false
        }
      }, 500)
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.todayCustomer {
  border-radius: 0 0 8px 8px;
  .van-row {
    padding-top: 20px;
    text-align: center;
    padding: 5px 10px;
    background-color: #fff;
  }
  .van-row:first-child {
    padding-top: 15px;
  }
}
</style>
<style>
body {
  height: 100%;
}
</style>
