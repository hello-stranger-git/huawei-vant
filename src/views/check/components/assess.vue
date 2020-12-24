<template>
  <div class="assess">
    <!-- 头部区域 -->
    <TopMessage :title="'考评'"></TopMessage>
    <!-- 摄像头button区域 -->
    <CameraOption :cameraData="cameraData"></CameraOption>
    <div class="box" v-for="(query, index) in arr" :key="index">
      <div class="date">{{ date }}</div>
      <div class="video"><img :src="video" /></div>
      <div class="buttons">
        <div
          v-for="(item, i) in query"
          :key="i"
          :class="'button'"
          :style="{
            background: item.active ? '#4A92FF' : '',
            color: item.active ? '#fff' : '',
            border: item.active ? 'none' : ''
          }"
        >
          {{ item.value }}
        </div>
        <router-link :to="{ name: 'AssessDetails', query: { id: index } }">
          <img :src="more" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TopMessage from '@/components/top' // 顶部信息
import CameraOption from '@/components/check/cameraOption .vue' // 摄像头选项

export default {
  components: {
    TopMessage,
    CameraOption
  },
  data() {
    return {
      date: '18:20:02 12-15-2020',
      video: require('@/assets/videoImage/videoTest.png'),
      more: require('@/assets/icon/check/more.png'), // 菜单图标
      active: 1,
      arr: [
        [
          { value: '上班玩手机', active: false },
          { value: '展台有杂物', active: true },
          { value: '地面不整洁', active: false },
          { value: '收银台有杂物', active: true }
        ],
        [
          { value: '上班玩手机', active: true },
          { value: '展台有杂物', active: true },
          { value: '地面不整洁', active: false },
          { value: '收银台有杂物', active: true }
        ],
        [
          { value: '上班玩手机', active: false },
          { value: '展台有杂物', active: false },
          { value: '地面不整洁', active: false },
          { value: '收银台有杂物', active: true }
        ]
      ],
      // 摄像头数据
      cameraData: [
        '大厅-进门摄像头',
        '大厅-人脸识别摄像头',
        '大厅-进门摄像头',
        '摄像头1',
        '大厅摄像头背后1',
        '主厅摄像头背后6'
      ]
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.assess {
  .cameraOption {
    background-color: #fff;
    padding-top: 16px;
    margin-top: 88px;
  }
}
.box {
  height: 308px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 12px;
  .date {
    padding-top: 29px;
    color: #141414;
    font-weight: bold;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    padding-left: 12px;
  }
  .video {
    height: 184px;
    padding: 0 12px;
    margin-top: 8px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .buttons {
    display: flex;
    height: 25px;
    line-height: 25px;
    margin-top: 18px;
    .button {
      margin: 0 5px;
      box-sizing: border-box;
      flex: 1;
      height: 25px;
      line-height: 25px;
      font-size: 10px;
      color: #b9b9b9;
      text-align: center;
      border: 1px solid #b9b9b9;
      border-radius: 13px;
    }
    .button:first-child {
      margin-left: 7px;
    }
    img {
      width: 19px;
      height: 19px;
      margin: 0 24px 0 14px;
      padding-top: 4px;
    }
  }
}
</style>
