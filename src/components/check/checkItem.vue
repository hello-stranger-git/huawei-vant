<template>
  <div class="checkItem">
    <!-- 点检屏幕区域 -->
    <div class="screen">
      <img :src="screen" />
    </div>
    <!-- 操作区域 -->
    <van-row>
      <van-col span="2" offset="1">
        <i class="iconfont iconbi" />
      </van-col>
      <van-col span="2" offset="1">
        <i class="iconfont iconscreenpingmu" />
      </van-col>
      <van-col span="2" offset="15">
        <i class="iconfont iconchexiao" />
      </van-col>
    </van-row>
    <!-- 选项区域 -->
    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
        <div class="optionContent" v-if="active === 0">
          <van-checkbox-group v-model="checked">
            <van-checkbox v-for="(item, i) of itemsData" :key="i" :name="i">
              {{ item }}
              <template #icon="props">
                <i
                  :class="
                    `iconfont iconxuanzhong ${
                      props.checked ? 'Select' : 'Unchecked'
                    }`
                  "
                />
              </template>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </template>
    </van-tree-select>

    <!-- 备注 -->
    <van-field
      v-model="message"
      rows="2"
      type="textarea"
      placeholder="备注"
      show-word-limit
    />
    <!-- 提交按钮 -->
    <div class="Submit">
      <van-button type="info" block>提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 点检屏幕数据
      screen: require('@/assets/screenImage/screen1.png'),
      // 左侧选项默认选中项
      checked: [],
      message: '',
      active: 0,
      // 选项数据
      items: [
        { text: '店内环境' },
        { text: '员工衣着' },
        { text: '商品摆放' },
        { text: '宣传物料' },
        { text: '营销禁忌' }
      ],
      itemsData: [
        '厅内地面/点面垃圾清理(城区厅和县城厅10分钟，乡镇厅30分钟) 1分',
        '预处理物料:业厅配 业务预处理单、填写台、配有笔',
        '业厅各功能区域应设置醒目标志，业务办理台席应设置清晰的业务指示',
        '业厅各功能区域应设置醒目标志，业务办理台席应设置清晰的业务指示',
        '厅内应有服务标准 服务公约、服务监督牌厅内台席全部开放，有工作人员在现场协助维持秩序分流客户'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.checkItem {
  background-color: #eee;
  padding-bottom: 10px;
}
// 点检屏幕样式
.screen {
  font-size: 0;
}
.screen > img {
  width: 100%;
}
// 操作区域样式
.van-row {
  background-color: #fff;
  padding: 5px 0;
}
.van-row > .van-col {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.van-tree-select {
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
}
.van-sidebar-item {
  height: 60px;
  padding: 0;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  color: #909399;
  font-weight: 500;
}
// 左侧选中样式
.van-sidebar-item--select {
  color: #409eff;
}
// 隐藏原样式选中红边
.van-sidebar-item--select::before {
  height: 0;
}

// overflow: hidden;
.iconxuanzhong {
  font-size: 25px;
}
// 选项右侧样式
.van-checkbox {
  margin: 10px 0;
  font-size: 14px;
}
.van-checkbox-group {
  padding: 10px;
}
// .optionContent {
//   border: 1px solid red;
//    width: 100%;
// }
// .optionContent::-webkit-scrollbar {
//   width: 0;
//   height: 0;
// }
// 阿里图标样式
.iconbi,
.iconscreenpingmu,
.iconchexiao {
  font-size: 30px;
  color: #50a6ff;
}
// 阿里图标未选中样式
.Unchecked {
  color: #dbdbdb;
}
// 阿里图标选中样式
.Select {
  color: #5eacff;
}
// 文本框样式
.van-cell {
  margin: 15px;
  width: auto;
  border-radius: 7px;
}
// 按钮样式
.Submit {
  margin: 0 20px;
}
.van-button {
  border-radius: 4px;
  background-color: #409eff;
}
</style>
