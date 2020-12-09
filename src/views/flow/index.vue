<template>
  <div style="background:#eee">
    <NavBar></NavBar>
    <FlowTabs></FlowTabs>
  </div>
</template>

<script>
import NavBar from '@/layout/components/navBar'
import FlowTabs from './components/flowTabs.vue'
export default {
  components: {
    NavBar,
    FlowTabs
  }
}
</script>

<style lang="less" scoped></style>
