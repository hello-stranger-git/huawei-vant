<template>
  <div>
    <van-cell
      v-for="(item, index) in cellData"
      :key="index"
      :is-link="item.isLink"
    >
      <template #title>
        <van-icon
          :class-prefix="item.cellIcon"
          size="26"
          :color="item.iconColor"
        />
        <span>{{ item.cellValue }}</span>
        <div class="inputBox" v-if="item.input">
          <input type="number" placeholder="昨日" />
          <input type="number" placeholder="今日" />
          <input type="number" placeholder="前日" />
        </div>
      </template>
      <!-- logout -->
    </van-cell>
    <van-cell title="退出登陆" class="logout" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cellData: []
    }
  },
  created() {
    this.cellData = [
      {
        cellValue: '广州百信广场华为旗舰店',
        cellIcon: 'iconfont iconhuawei',
        iconColor: '#ff3b3b'
      },
      {
        cellValue: '营业状态',
        cellIcon: 'iconfont iconopen',
        iconColor: '#cc2f7d'
      },
      {
        cellValue: '地址',
        cellIcon: 'iconfont icondizhi',
        iconColor: '#439bba'
      },
      {
        cellValue: '店长:刘德华',
        cellIcon: 'iconfont iconstranger-full',
        iconColor: '#13227a'
      },
      {
        cellValue: '区域负责人:张学友',
        cellIcon: 'iconfont iconfuzeren',
        iconColor: '#000'
      },
      {
        cellValue: '上下班时间:10:00-22:00',
        cellIcon: 'iconfont iconrili',
        iconColor: '#3781fb'
      },
      {
        cellValue: '销售额补录',
        cellIcon: 'iconfont iconqiandai',
        iconColor: '#fdcccd',
        input: true
      },
      {
        cellValue: '报警主机',
        cellIcon: 'iconfont iconapp_icons--',
        iconColor: '#d81e06'
      },
      {
        cellValue: '密码修改',
        cellIcon: 'iconfont iconsuo',
        iconColor: '#e0620d',
        isLink: true
      },
      {
        cellValue: '工单',
        cellIcon: 'iconfont iconEmail',
        iconColor: '#d4237a',
        isLink: true
      },
      {
        cellValue: '关于',
        cellIcon: 'iconfont icontishi',
        iconColor: '#7e82e0',
        isLink: true
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.van-cell {
  margin: 2px 0;
  background-color: #fff;
  font-size: 16px;
  border-radius: 8px;
  span,
  i {
    vertical-align: middle;
    padding-left: 10px;
  }
  span {
    padding-left: 20px;
  }
  .inputBox {
    float: right;
    input {
      text-align: center;
      margin-left: 10px;
      height: 24px;
      width: 40px;
      border-radius: 7px;
      border: 1px solid #eee;
      font-size: 12px;
    }
    input::-webkit-input-placeholder {
      color: #aab2bd;
      font-size: 12px;
    }
  }
}
.logout {
  margin-top: 15px;
  .van-cell__title {
    text-align: center;
    border-radius: 5px;
    span {
      color: #ff7272;
    }
  }
}
</style>
