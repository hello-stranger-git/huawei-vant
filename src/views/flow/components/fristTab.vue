<template>
  <div>
    <DateSelect></DateSelect>
    <div class="todayCustomer">
      <van-row type="flex">
        <van-col span="4" v-for="(item, index) in userArr" :key="index">
          <UserItem
            :img="item.img"
            :date="item.date"
            :age="item.age"
            :count="item.count"
            :sex="item.sex"
          ></UserItem>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import DateSelect from './dateSelect.vue'
import UserItem from '../../../components/home/userItem'
export default {
  components: {
    DateSelect,
    UserItem
  },
  data() {
    return {
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
    this.userArr = [
      ...this.userArr,
      ...this.userArr,
      ...this.userArr,
      ...this.userArr
    ]
  }
}
</script>

<style lang="less" scoped>
.van-row {
  // margin: 0 15px;
  // display: flex;
  // justify-content: space-between;
  // overflow-y: auto;
  background-color: #fff;
  text-align: center;
  padding: 5px 10px;
  // flex-wrap: wrap;
  // flex-direction: row;
}
.todayCustomer {
  // border-radius: 0 0 8px 8px;
  .van-row {
    padding-top: 20px;

    border-radius: 0 0 8px 8px;
  }
}
</style>
