<template>
  <div class="contain">
    <!-- box -->
    <div class="info" v-for="(item, i) in items" :key="i">
      <div class="date">{{ item.date }}</div>
      <div class="person">操作人：{{ item.person }}</div>
      <!-- 控制流程 -->
      <van-row v-for="(params, index) in item.control" :key="index">
        <van-col span="6"
          ><span class="statu"></span>
          <div class="time">{{ params.time }}</div></van-col
        >
        <van-col span="17"
          ><div class="content">
            {{ params.value }}
          </div></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: '2020/12/01',
          person: '刘德华',
          control: [
            { time: '07:05:34', value: '本地操作，进行了撤防操作，操作成功' }
          ]
        },
        {
          date: '2020/11/30',
          person: '张鹏',
          control: [
            { time: '22:01:34', value: '本地操作，进行了撤防操作，操作' },
            { time: '09:25:12', value: '本地操作，进行了撤防操作，操作' },
            {
              time: '01:17:22',
              value: '坐席：江西托克马克接警平台，进行了布防操作，操作成功'
            }
          ]
        },
        {
          date: '2020/11/30',
          person: '刘德华',
          control: [
            { time: '22:01:34', value: '本地操作，进行了撤防操作，操作' },
            { time: '09:25:12', value: '本地操作，进行了撤防操作，操作' },
            {
              time: '01:17:22',
              value: '坐席：江西托克马克接警平台，进行了布防操作，操作成功'
            }
          ]
        },
        {
          date: '2020/11/30',
          person: '张学友',
          control: [
            { time: '22:01:34', value: '系统与主机 断开连接' },
            {
              time: '09:25:12',
              value: '用户_1903262515，进行了撤防操作，操作成功'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  .info {
    position: relative;
    padding-top: 52px;
    background-color: #fff;
    color: #141414;
    padding-left: 10px;
    border-radius: 10px;
    margin-bottom: 12px;
    .date {
      position: absolute;
      top: 14px;
      left: 10px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
    }
    .person {
      position: absolute;
      top: 16px;
      right: 10px;
      font-size: 12px;
      height: 17px;
      line-height: 17px;
    }
    .statu {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #e60012;
    }
    .time {
      display: inline-block;
      padding-left: 5px;
      height: 17px;
      line-height: 17px;
      font-size: 12px;
    }
    .content {
      transform: translateY(2px);
      line-height: 17px;
      font-size: 12px;
      color: #959595;
    }
    .van-row {
      position: relative;
      padding-bottom: 32px;
    }
    .van-row::before {
      position: absolute;
      content: '';
      left: 3px;
      top: 3px;
      width: 1px;
      height: 64px;
      background-color: rgba(86, 86, 86, 0.5);
      transform: scale(0.5);
    }
    .van-row:last-child::before {
      width: 0;
    }
    .van-row:last-child {
      padding-bottom: 16px;
    }
  }
}
</style>
