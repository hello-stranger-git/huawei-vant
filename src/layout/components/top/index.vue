<template>
  <div class="TopMessage">
    <van-row>
      <van-col :span="14">
        <div class="left">
          <img class="logo" :src="logoImage" />
          <span :title="currentStore" class="l-title" @click="show = true">{{
            currentStore
          }}</span>
          <img :src="dropDown" @click="show = true" />
        </div>
      </van-col>
      <van-col :span="10">
        <div class="right">
          <span class="username">兰宇贵</span>
          <van-icon @click="news" :name="information" badge="9" size="24px" />
        </div>
      </van-col>
    </van-row>
    <van-popup v-model="show" round position="bottom" class="qqq">
      <div class="cancel">
        <img
          :src="togger == 'index' ? indexSelected : indexSelect"
          width="30px"
          height="30px"
          @click="toTree"
          class="indexImag"
        />
        <img
          :src="togger == 'tree' ? treeSelected : treeSelect"
          width="30px"
          height="30px"
          @click="toIndex"
          class="treeImag"
        />
        <span class="selectStoreTitle">选择店面</span>
        <span @click="certain" class="certainBtn" v-if="togger == 'tree'"
          >确定</span
        >
        <span @click="show = false" class="cancelBtn" v-if="togger == 'tree'"
          >取消</span
        >
      </div>
      <!-- <Tree
        :data="data"
        v-show="togger == 'tree'"
        @getTreeTitle="getTreeTitle"
      ></Tree> -->

      <!-- <van-popup
        v-show="togger == 'tree'"
        v-model="showCascader"
        round
        position="bottom"
      > -->
      <template>
        <van-cascader
          v-show="togger == 'tree'"
          v-model="cascaderValue"
          :options="options"
          active-color="#1989fa"
          @close="showCascader = false"
          @finish="onFinish"
        />
      </template>
      <!-- </van-popup> -->

      <template v-if="togger == 'index'">
        <div class="search">
          <input
            type="text"
            class="searchInput"
            placeholder="输入关键词检索数据库"
          />
        </div>
        <van-index-bar :index-list="indexList">
          <template v-for="index in indexData">
            <template v-if="index.titles.length">
              <van-index-anchor
                :index="index.index"
                :key="index.index"
                class="indexAnchor"
              >
                {{ index.index }}
              </van-index-anchor>
              <template v-for="title in index.titles">
                <div
                  :key="title.id"
                  style="display:flex;align-items: center;"
                  @click="indexSelectStore(title.title)"
                >
                  <img
                    width="20px"
                    height="20px"
                    :src="storeIcon"
                    style="padding-left:16px"
                  />
                  <van-cell class="indexTitle" :title="title.title" />
                </div>
              </template>
            </template>
          </template>
        </van-index-bar>
      </template>
    </van-popup>
  </div>
</template>
<script>
// import Tree from '@/components/tree/tree'
export default {
  data() {
    return {
      logoImage: require('@/assets/icon/top/huawei.png'), // 华为logo
      dropDown: require('@/assets/icon/top/dropDown.png'), // 下拉箭头
      information: require('@/assets/icon/top/information.png'), // 消息图标
      storeIcon: require('@/assets/icon/top/storeIcon.png'), // 索引未选中图标
      indexSelect: require('@/assets/icon/top/indexSelect.png'), // 索引未选中图标
      indexSelected: require('@/assets/icon/top/indexSelected.png'), // 索引选中图标
      treeSelect: require('@/assets/icon/top/treeSelect.png'), // 树未选中图标
      treeSelected: require('@/assets/icon/top/treeSelected.png'), // 树选中图标
      magnifierIcon: require('@/assets/icon/top/magnifier.png'), // 放大镜图标图标
      currentStore: '龙岗区华为体验店', // title显示
      treeTltle: '',
      show: false,
      indexList: ['A', 'G', 'S'], // 索引的右边滑动数据
      serachStore: '',
      togger: 'tree', // 显示树(tree)还是索引(index)
      indexTitle: '', // 索引选中的title
      // 索引的数据
      indexData: [
        {
          index: 'A',
          titles: [
            { id: 1, title: '阿克苏沙雅县店' },
            { id: 2, title: '阿克苏库车东城店' },
            { id: 3, title: '阿克苏库车天山路店' },
            { id: 4, title: '阿克苏库车西大街店' },
            { id: 5, title: '阿克苏沙雅县店' },
            { id: 6, title: '阿克苏库车东城店' },
            { id: 7, title: '阿克苏库车天山路店' }
          ]
        },
        {
          index: 'G',
          titles: [
            { id: 8, title: '广州百信广场华为体验店' },
            { id: 9, title: '广州太和华为体验店' },
            { id: 10, title: '广州同和华为体验店' },
            { id: 11, title: '广州安华汇华华为体验店' },
            { id: 12, title: '广州百信广场华为体验店' },
            { id: 13, title: '广州同和华为体验店' },
            { id: 14, title: '广州同和华为体验店' },
            { id: 15, title: '深圳龙华星河COCOPark店' },
            { id: 16, title: '广州安华汇华华为体验店' },
            { id: 17, title: '广州安华汇华华为体验店' }
          ]
        },
        {
          index: 'S',
          titles: [
            { id: 18, title: '深圳龙华星河COCOPark店' },
            { id: 19, title: '深圳福田九方华华为体验店' },
            { id: 20, title: '上饶弋阳胜利路滨江时代广场店' },
            { id: 21, title: '深圳福田九方华华为体验店' },
            { id: 22, title: '深圳福田九方华华为体验店' },
            { id: 23, title: '阿克苏库车东城店' },
            { id: 24, title: '上饶弋阳胜利路滨江时代广场店' }
          ]
        }
      ],
      // 树title（标题）、select（是否选中）、expand（是否展开）、children（子集）、childrenSelect（是否显示灰色未选中状态）
      data: [
        {
          id: 1,
          title: '所有店',
          // 是否选中
          select: false,
          // 是否展开
          expand: false,
          children: [
            {
              id: 2,
              title: '西南地区',
              select: false,
              expand: false,
              children: [
                {
                  id: 3,
                  title: '广东',
                  select: false,
                  expand: false,
                  children: [
                    {
                      id: 4,
                      title: '深圳',
                      select: false,
                      expand: false,
                      children: [
                        {
                          id: 5,
                          title: '宝安区华为体验店',
                          select: false,
                          expand: false,
                          childrenSelect: false
                        },
                        {
                          id: 6,
                          title: '南山区华为体验店',
                          select: false,
                          expand: false,
                          childrenSelect: false
                        },
                        {
                          id: 7,
                          title: '龙华区华为体验店',
                          select: false,
                          expand: false,
                          childrenSelect: false
                        },
                        {
                          id: 8,
                          title: '盐田区华为体验店',
                          select: false,
                          expand: false,
                          childrenSelect: false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      cascaderValue: '', // 级联选择器值
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '华北区',
          value: '华北区',
          children: [
            {
              text: '北京',
              value: '北京',
              children: [
                { text: '朝阳区华为体验店', value: '朝阳区华为体验店' },
                { text: '西城区华为体验店', value: '西城区华为体验店' },
                { text: '丰台华为体验店', value: '丰台华为体验店' },
                { text: '石景山华为体验店', value: '石景山华为体验店' },
                { text: '门头沟华为体验店', value: '门头沟华为体验店' }
              ]
            },
            {
              text: '天津',
              value: '天津',

              children: [
                { text: '和平区华为体验店', value: '和平区华为体验店' }
              ]
            }
            // { text: '河北', value: '330300' },
            // { text: '山西', value: '330400' },
            // { text: '内蒙古', value: '330500' }
          ]
        },
        {
          text: '东北区',
          value: '东北区',
          children: [
            {
              text: '黑龙江',
              value: '黑龙江',

              children: [
                { text: '哈尔滨华为体验店', value: '哈尔滨华为体验店' }
              ]
            }
          ]
        },
        {
          text: '华东区',
          value: '华东区',
          children: [
            {
              text: '浙江',
              value: '浙江',
              children: [{ text: '浙江华为体验店', value: '浙江华为体验店' }]
            }
          ]
        },
        {
          text: '中南区',
          value: '中南区',
          children: [
            {
              text: '广东',
              value: '广东',

              children: [
                { text: '深圳体验店', value: '深圳体验店' },
                { text: '广州体验店', value: '广州体验店' },
                { text: '佛山体验店', value: '佛山体验店' }
              ]
            }
          ]
        }
      ],
      showCascader: true // 级联选择器显示隐藏
    }
  },
  methods: {
    // 点击索引图标
    toTree() {
      this.togger = 'index'
    },
    // 点击树的图标
    toIndex() {
      this.togger = 'tree'
    },
    certain() {
      if (!this.treeTltle) return
      this.currentStore = this.treeTltle
      this.show = false
    },
    // 点击索引获取选中的值
    indexSelectStore(title) {
      this.show = false
      this.currentStore = title
    },
    getTreeTitle(title) {
      this.treeTltle = title
    },
    // 点击跳转至消息页面
    news() {
      this.$router.push('/News')
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions, tabIndex }) {
      this.show = false
      this.fieldValue = selectedOptions.map(option => option.text).join('/')
      this.currentStore = value
    }
  },
  components: {
    // Tree
  }
}
</script>
<style lang="less" scoped>
.van-row {
  padding: 5px 21px 0 12px;
  width: 100%;
}
.TopMessage {
  background-color: #fbfbfb;
  height: 44px;
  font-size: 14px;
  box-shadow: 0px 2px 6px #99999924;
  display: flex;
  align-items: center;
}
// 左侧样式
.left {
  display: flex;
  align-items: center;
  .logo {
    width: 30px;
    height: 30px;
  }
  .l-title {
    padding: 0 3px 3px 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

// 右侧样式
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  .username {
    margin-right: 30px;
    padding-top: 3px;
  }
  .van-info {
    top: 2px;
    right: 1px;
    background-color: #e30011;
  }
}
.cancel {
  height: 54px;
  background-color: #fff;
  position: relative;
  .indexImag {
    position: absolute;
    left: 12px;
    top: 11px;
  }
  .treeImag {
    position: absolute;
    left: 58px;
    top: 11px;
  }
  .certainBtn {
    position: absolute;
    right: 70px;
    top: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #4a92ff;
  }
  .cancelBtn {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    color: rgba(20, 20, 20, 0.5);
  }
}
.indexAnchor {
  background: #efefef;
  font-size: 14px;
  font-weight: 400;
}
.indexTitle {
  background: #ffffff;
}
.van-popup--bottom {
  height: 605px;
}
.van-index-anchor {
  font-size: 14px;
  font-weight: 400;
  color: #141414;
}
.indexTitle {
  padding: 8px 0 8px 8px;
  font-size: 12px;
  color: #141414;
  font-weight: 400;
}
.selectStoreTitle {
  position: absolute;
  top: 15px;
  left: 156px;
  font-size: 16px;
  font-weight: bold;
  color: #141414;
}
.search {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  .searchInput {
    width: 281px;
    height: 36px;
    border-radius: 9px;
    border: 0;
    padding-left: 36px;
    background: url(../../../assets/icon/top/magnifier.png) no-repeat;
    background-size: 20px 20px;
    background-position: 10px 8px;
    background-color: #e2e2e2;
    &::placeholder {
      font-size: 12px;
      font-weight: 400;
      color: #b9b9b9;
    }
  }
  .magnifierIcon {
    position: absolute;
    top: 8px;
    left: 35px;
  }
}

//级联选择器
/deep/.van-cascader__header {
  display: none;
  height: 0;
}
</style>
