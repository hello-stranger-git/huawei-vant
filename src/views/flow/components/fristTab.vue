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
        <ul class="user">
          <li
            v-for="(item, i) of arr"
            :key="i"
            @click="clickDetails(item.details)"
          >
            <UserItem
              :img="item.img"
              :date="item.date"
              :age="item.age"
              :count="item.count"
              :sex="item.sex"
              :vip="item.vip"
              :crossStore="item.crossStore"
            ></UserItem>
          </li>
        </ul>
        <!-- 加载中图标 -->
        <template #loading>
          <van-loading type="spinner" size="24px" />
        </template>
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
      // 今日进店数据
      userArr: [
        {
          img: require('@/assets/enterStore/enterStore1.png'),
          date: '19:45:21',
          age: '35~40',
          count: 1,
          sex: 'woman',
          details: {
            name: '陈总',
            sex: '女',
            age: '23岁',
            userImg: require('@/assets/enterStore/enterStore1.png'),
            consume: '10,1411,00',
            latelyDate: '12月6日 10::22:04',
            record: [
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore1.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '陈某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore1.png'),
                store: '深圳龙岗区华为体验店'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore1.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某'
              }
            ]
          }
        },
        {
          img: require('@/assets/enterStore/enterStore2.png'),
          date: '18:45:21',
          age: '35~40',
          count: 2,
          sex: 'man',
          vip: true,
          crossStore: true,
          details: {
            name: '刘总',
            sex: '男',
            age: '23岁',
            userImg: require('@/assets/enterStore/enterStore2.png'),
            consume: '10,1411,00',
            latelyDate: '12月6日 10::22:04',
            record: [
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore2.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore2.png'),
                store: '深圳龙岗区华为体验店'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore2.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore2.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore2.png'),
                store: '深圳龙岗区华为体验店'
              }
            ]
          }
        },
        {
          img: require('@/assets/enterStore/enterStore3.png'),
          date: '17:45:21',
          age: '35~40',
          count: 6,
          sex: 'man',
          crossStore: true,
          details: {
            name: '吴总',
            sex: '男',
            age: '23岁',
            userImg: require('@/assets/enterStore/enterStore3.png'),
            consume: '10,1411,00',
            latelyDate: '12月6日 10::22:04',
            record: [
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore3.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore3.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              }
            ]
          }
        },
        {
          img: require('@/assets/enterStore/enterStore4.png'),
          date: '16:45:21',
          age: '35~40',
          count: 3,
          sex: 'man',
          vip: true,
          details: {
            name: '李总',
            sex: '男',
            age: '23岁',
            userImg: require('@/assets/enterStore/enterStore4.png'),
            consume: '10,1411,00',
            latelyDate: '12月6日 10::22:04',
            record: [
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore4.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore4.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              },
              {
                recordDate: '12月6日 10:22:04',
                userImg: require('@/assets/enterStore/enterStore4.png'),
                store: '深圳龙岗区华为体验店',
                receptionist: '李某某',
                money: '2,2200,00'
              }
            ]
          }
        }
      ]
    }
  },
  created() {
    for (var i of this.userArr) {
      this.arr.push(i)
    }
  },
  methods: {
    onLoad() {
      this.loading = true
      setTimeout(() => {
        for (var i of this.userArr) {
          this.arr.push(i)
        }
        if (this.arr.length > 100) {
          this.finished = true
        } else {
          this.loading = false
        }
      }, 500)
    },
    clickDetails(e) {
      this.$router.push({
        name: 'CustomerInfoItem',
        params: {
          detailsData: e
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.todayCustomer {
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  padding-bottom: 29px;
  .user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      flex-shrink: 1;
      margin: 21px 12px 19px;
    }
  }
  /deep/.van-list__finished-text {
    height: 19px;
    line-height: 19px;
    margin-top: 23px;
  }
}
</style>
