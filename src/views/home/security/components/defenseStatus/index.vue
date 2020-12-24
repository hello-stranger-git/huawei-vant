<template>
  <div>
    <div
      class="defenseStatus"
      v-for="item in defenseStatus"
      :key="item.id"
      style="background: #FFFFFF;"
    >
      <div class="content">
        <div>
          <img
            :src="item.status ? inStatus : onStatus"
            width="31px"
            height="31px"
            style="vertical-align: middle;"
          />
          <span
            style="font-size: 14px;font-weight: 400;color: #141414;margin-left:14px"
            >{{ item.title }}</span
          >
        </div>
        <span :class="[item.status ? 'normal' : 'fault', 'status']">{{
          item.status ? '正常' : '故障'
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defenseStatus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 在防御图标
      inStatus: require('@/assets/icon/home/security/defenseStatus/inStatus.png'),
      // 不在防御图标
      onStatus: require('@/assets/icon/home/security/defenseStatus/noStatus.png')
    }
  }
}
</script>
<style lang="less" scoped>
.defenseStatus {
  padding: 20px 9px 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
//状态字体样式
.status {
  font-size: 14px;
  font-weight: 400;
  color: #4a92ff;
}
//正常字体颜色
.normal {
  color: #4a92ff;
}
//故障字体颜色
.fault {
  color: #e60012;
}

.content {
  border-bottom: 1px solid #70707080;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
