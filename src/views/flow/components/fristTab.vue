<template>
  <div>
    <DateSelect></DateSelect>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
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
    </van-pull-refresh>
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
    onRefresh() {
      console.log('下拉刷新')
    },
    onLoad() {
      this.loading = true
      setTimeout(() => {
        this.arr.push(this.userArr)
        console.log('上划加载')
        // if (this.arr.length > 8) {
        this.finished = true
        // }
      }, 1000)
      this.Loading = false
      console.log(this.Loading)
    }
  }
}
</script>

<style lang="less" scoped>
.van-row {
  background-color: #fff;
  text-align: center;
  padding: 5px 10px;
}
.todayCustomer {
  .van-row {
    padding-top: 20px;
    border-radius: 0 0 8px 8px;
  }
}
</style>
