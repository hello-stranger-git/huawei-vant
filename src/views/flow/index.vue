<template>
  <div style="background:#eee" class="flow">
    <FlowTabs></FlowTabs>
  </div>
</template>

<script>
import FlowTabs from './components/flowTabs.vue'
export default {
  components: {
    FlowTabs
  }
}
</script>

<style lang="less" scoped>
.flow {
  background-color: #eee;
  padding-bottom: 95px;
}
</style>
