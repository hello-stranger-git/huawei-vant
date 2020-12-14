<template>
  <div class="appUse">
    <div>
      <h3 v-if="item.title">{{ item.title }}</h3>
      <Project :datas="item.datas"></Project>
    </div>
  </div>
</template>
<script>
import Project from '@/components/app/appuses/Project.vue' // 使用中单个小模块

export default {
  props: {
    item: Object
  },
  components: {
    Project
  }
}
</script>
<style lang="less" scoped>
.appUse {
  margin-bottom: 40px;
}
.appUse > div > h3 {
  font-size: 16px;
  font-weight: bold;
  color: #141414;
  margin-bottom: 20px;
}
/deep/.project > dl {
  margin-top: 16px;
}
</style>
