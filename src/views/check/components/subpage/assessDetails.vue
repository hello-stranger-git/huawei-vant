<!-- 考评 -->
<template>
  <div class="assessDetails">
    <!-- 头部区域 -->
    <!-- <TopMessage :title="'考评'"></TopMessage> -->
    <!-- 视频区域 -->
    <VideoRegion :video="video"></VideoRegion>
    <!-- 摄像头、模板选择区域 -->
    <!-- 摄像头选项 -->
    <van-cell
      is-link
      title="选择摄像头"
      :value="camera"
      @click="show1 = true"
    />
    <van-action-sheet
      v-model="show1"
      :actions="cameraData"
      @select="onSelect1"
      title="选择摄像头"
      :closeable="true"
    />
    <!-- 模板选项 -->
    <van-cell
      is-link
      title="选择模板"
      :value="template"
      @click="show2 = true"
    />
    <van-action-sheet
      v-model="show2"
      :actions="templateData"
      @select="onSelect2"
      title="选择模板"
      :closeable="true"
    />
    <!-- 横向导航选项区域 -->
    <ul class="evaluationOption">
      <li
        v-for="(item, i) of transverseData"
        :key="i"
        @click="request(i)"
        :class="defaultStyle == i ? 'defaultStyle' : ''"
      >
        {{ item }}
      </li>
    </ul>
    <!-- 侧边导航区域 -->
    <van-tree-select
      :items="sideitem.items"
      :main-active-index.sync="active"
      height="auto"
    >
      <template #content>
        <div class="option" v-for="(item, i) of sideitem.itemsData" :key="i">
          <div v-if="i === active">
            <div v-for="(item1, index1) of item" :key="index1">
              {{ item1.text }}
              <div class="screenshot">
                <span
                  v-for="(item2, index2) of item1.screenshotData"
                  :key="index2"
                >
                  <van-icon
                    :name="cha"
                    @click="Delete(active, index1, index2)"
                  />
                  <img :src="item2" />
                </span>
                <span>
                  <img :src="tianjia" />
                </span>
              </div>
              <div class="buttonGroup">
                <van-button
                  :class="item1.qualified == 1 ? 'button_trigger' : ''"
                  @click="item1.qualified = 1"
                  >不适用</van-button
                >
                <van-button
                  :class="item1.qualified == 2 ? 'button_trigger' : ''"
                  @click="item1.qualified = 2"
                  >不合格</van-button
                >
                <van-button
                  :class="item1.qualified == 3 ? 'button_trigger' : ''"
                  @click="item1.qualified = 3"
                  >合格</van-button
                >
              </div>
              <!-- 备注区域 -->
              <van-field
                class="remarks"
                v-model="item1.message"
                rows="2"
                type="textarea"
                placeholder="备注"
                show-word-limit
              />
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>

    <!-- 整改人区域 -->
    <SendOut
      @change="Rec"
      :SelectionBoxData="RectificationData"
      :selectValues="Rectification"
    ></SendOut>
    <!-- 抄送区域 -->
    <SendOut
      @change="sen"
      :SelectionBoxData="sendOutData"
      :selectValues="sendOut"
    ></SendOut>
    <!-- 提交按钮区域 -->
    <div class="Submit">
      <p>得分：<span>100</span>/100</p>
      <van-button to="EvaluationDetails" type="info" @click="Submit"
        >提交</van-button
      >
    </div>
  </div>
</template>
<script>
// import TopMessage from '@/components/top' // 顶部信息
// import Notice from '@/layout/components/notice' // 通知栏
import VideoRegion from '@/components/video' // 视屏区域
import SendOut from '@/components/check/subpage/sendOut.vue' // 抄送

import { Toast, Dialog } from 'vant'
export default {
  components: {
    // TopMessage,
    // Notice,
    VideoRegion,
    SendOut
  },
  data() {
    return {
      tianjia: require('@/assets/icon/check/checkItem/tianjia.png'), // 截图添加图标
      cha: require('@/assets/icon/check/checkItem/cha.png'), // 删除图标

      camera: '大厅摄像头', // 默认摄像头
      template: '标准模板', // 默认模板
      // 摄像头弹出框
      show1: false,
      // 模板弹出框
      show2: false,
      // 横向导航选中项
      defaultStyle: 0,
      // 侧边导航选项数据
      sideitem: {},
      // 侧边导航默认选中项
      active: 0,
      // 侧边栏内按钮触发项
      trigger: '',
      // 备注输入值
      message: '',
      // 整改人选择值
      Rectification: [],
      // 抄送人选择值
      sendOut: [],

      // 视屏
      video: require('@/assets/videoImage/videoTest.png'),
      // 摄像头选项数据
      cameraData: [
        { name: '收银台左' },
        { name: '进门右' },
        { name: '收银台右' },
        { name: '进门左' },
        { name: '门外' },
        { name: '库房' },
        { name: '洗手区' }
      ],
      // 模板选项数据
      templateData: [
        { name: '标杆店及购物中心店模板' },
        { name: '超级旗舰店模板' },
        { name: '吉林省视频巡查模板1.0（吉林地区）' }
      ],

      // 横向导航数据
      transverseData: [
        '形象及陈列',
        '产品展示',
        '后方',
        '安全要求',
        '标准化服务流程'
      ],
      // 侧边导航选项数据
      sideData: [
        {
          items: [
            { text: '店内环境' },
            { text: '员工衣着' },
            { text: '商品摆放' },
            { text: '宣传物料' }
          ],
          itemsData: [
            [
              {
                text:
                  '厅内地面/点面垃圾清理(城区厅和县城厅10分钟，乡镇厅30分钟) 1分',
                screenshotData: [require('@/assets/icon/screenshot/jietu.png')],
                qualified: '', // 按钮选中项  1合适 2不合格 3合格
                message: '' // 备注
              }
            ],
            [
              {
                text: ' 员工衣着',
                screenshotData: [
                  require('@/assets/icon/screenshot/jietu.png'),
                  require('@/assets/icon/screenshot/jietu.png')
                ],
                qualified: '',
                message: ''
              }
            ],
            [
              {
                text: ' 商品摆放',
                screenshotData: [],
                qualified: '',
                message: ''
              }
            ],
            [
              {
                text: ' 宣传物料',
                screenshotData: [],
                qualified: '',
                message: ''
              }
            ]
          ]
        },
        {
          items: [{ text: '验机台' }, { text: '配件墙' }],
          itemsData: [
            [
              {
                text:
                  '机器陈列位无空位，演示机按照规范陈列，体验台.上氛围物料不可超过2个;体验机屏幕常亮，播放演示画面;体验桌体验设备处于顾客可以立即体验状态;体验台陈列物品无积灰，无污渍。',
                screenshotData: [],
                qualified: '',
                message: ''
              }
            ],
            [
              {
                text: '配件墙',
                screenshotData: [require('@/assets/icon/screenshot/jietu.png')],
                qualified: '',
                message: ''
              }
            ]
          ]
        }
      ],
      // 整改人可选数据
      RectificationData: {
        label: '整改人',
        text: '选择整改人',
        ccPerson: [
          {
            name: '张鹏',
            post: '店长'
          },
          {
            name: '李某某',
            post: '区域负责人'
          },
          {
            name: '陈某某',
            post: '客服中心'
          }
        ]
      },
      // 抄送数据
      sendOutData: {
        label: '抄送',
        text: '选择抄送人',
        ccPerson: [
          {
            name: '张鹏',
            post: '店长'
          },
          {
            name: '李某某',
            post: '区域负责人'
          },
          {
            name: '陈某某',
            post: '客服中心'
          },
          {
            name: '罗某',
            post: '巡检主管'
          },
          {
            name: '赵某某',
            post: '客服主管'
          },
          {
            name: '某某客服组',
            post: ''
          },
          {
            name: '某某巡检组',
            post: ''
          }
        ]
      }
    }
  },
  created() {
    // 页面初始对侧边栏进行赋值
    this.sideitem = this.sideData[this.defaultStyle]
  },
  methods: {
    // 触发关闭弹出层
    onSelect1(item) {
      this.show1 = false
      Dialog.confirm({
        message: '是否清除当前考评内容'
      })
        .then(d => {
          this.camera = item.name
          location.reload() // 确认选择刷新页面，重置操作数据
        })
        .catch(d => {
          console.log(d)
        })
    },
    onSelect2(item) {
      this.show2 = false
      Dialog.confirm({
        message: '是否清除当前考评内容'
      })
        .then(d => {
          this.template = item.name
          // location.reload() // 确认选择刷新页面，重置操作数据
        })
        .catch(d => {})
    },
    // 触发删除截图
    Delete(active, index1, index2) {
      this.itemsData.itemsData[active][index1].screenshotData.splice(index2, 1)
    },
    // 触发请求数据
    request(i) {
      if (this.sideData[i]) {
        this.sideitem = this.sideData[i]
        this.defaultStyle = i
        this.active = 0
      } else {
        Toast('暂无此数据')
      }
    },
    // 侧边栏内按钮触发项
    clickTrigger(i) {
      this.trigger = i
    },
    // 获取子组件整改人选择数据
    Rec(i) {
      console.log(i)
      this.Rectification = i
    },
    // 获取子组件抄送人数据
    sen(i) {
      console.log(i)
      this.sendOut = i
    },
    // 触发按钮提交信息
    Submit() {}
  }
}
</script>
<style lang="less" scoped>
.assessDetails {
  background-color: #efefef;
  // border: 1px solid red;
  padding-bottom: 36px;
  // 选项区域样式
  .van-cell::after {
    border: none;
  }
  .van-action-sheet__header {
    font-weight: bold;
    font-size: 18px;
  }
  .van-action-sheet__item {
    font-size: 14px;
  }
  .van-cell__value {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
// 影藏滚动条
::-webkit-scrollbar {
  display: none;
}
// 横向导航选项区域样式
.defaultStyle {
  color: #4a92ff;
  font-weight: bold;
}
.evaluationOption {
  display: flex;
  overflow: auto;
  color: #141414;
  font-size: 14px;
  margin: 36px 0 24px;
  li {
    flex-shrink: 0;
    margin-right: 32px;
    &:first-child {
      margin-left: 12px;
    }
  }
}

// 侧边导航样式
.van-tree-select {
  margin: 12px 12px 0 0;
  .van-sidebar-item {
    height: 53px;
    line-height: 53px;
    padding: 0;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    color: rgba(20, 20, 20, 0.7);
    background-color: #efefef;
  }
  /deep/.van-tree-select__nav {
    flex: 0 0 112px;
    background-color: #efefef;
  }

  // 左侧选中样式
  .van-sidebar-item.van-sidebar-item--select {
    background-color: #fff;
    color: #4a92ff;
    font-weight: bold;
  }
  .van-sidebar-item--select::before {
    height: 23px;
    width: 2px;
    background-color: #4a92ff;
  }
  /deep/.van-checkbox__icon {
    font-size: 17px;
  }

  // 选项右侧样式
  .van-tree-select__content {
    border-radius: 0px 10px 10px 10px;
    font-size: 12px;
    color: #141414;
    overflow: hidden;
    min-height: 240px;
    .option > div {
      padding: 17px 12px;
      .buttonGroup {
        display: flex;
        margin-top: 32px;
        justify-content: space-between;
      }
      .van-button {
        width: 70px;
        height: 27px;
        font-size: 12px;
        padding: 0;
        color: #141414;
        border: 1px solid #707070;
        border-radius: 5px;
        margin-bottom: 20px;
        &:nth-child(3) {
          color: #4a92ff;
          border: 1px solid #4a92ff;
        }
      }
      // 按钮触发样式
      .button_trigger {
        background-color: #4a92ff;
        border: 1px solid #4a92ff;
        color: #fff !important;
      }
    }
    .screenshot {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 40px;
      span {
        position: relative;
        display: inline-block;
        margin-bottom: 12px;
        border-radius: 10px;
        width: 99px;
        height: 99px;
        .van-icon {
          width: 23px;
          height: 23px;
          font-size: 23px;
          position: absolute;
          right: -11px;
          top: -11px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
// 备注样式
.remarks {
  width: auto;
  height: 42px;
  border-radius: 7px;
  width: 100%;
  background: #efefef;
  margin-bottom: 20px;
}

.sendOut {
  margin-top: 12px;
}

//  提交按钮区域样式
.Submit {
  margin: 12px;
  border-radius: 10px;
  background-color: #fff;
  line-height: 42px;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  p span {
    color: red;
  }
  .van-button {
    width: 94px;
    background-color: #4a92ff;
  }
}
</style>
