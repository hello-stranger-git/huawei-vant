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
  },
  created() {
    window.sessionStorage.setItem('activeTab', 1)
  }
}
</script>

<style lang="less" scoped>
.flow {
  background-color: #eee;
  padding-bottom: 95px;
}
</style>
