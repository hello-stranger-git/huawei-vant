<template>
  <div class="project">
    <dl v-for="(item, i) of datas" :key="i">
      <dt>
        <van-icon
          :name="item.icon"
          size="44"
          :badge="item.unread > 99 ? '···' : item.unread"
        />
      </dt>
      <dd>{{ item.name }}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    datas: Array
  }
}
</script>
<style lang="less" scoped>
.project {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl {
    // width: 142px;
    height: 64px;
    display: flex;
    flex-basis: 43%;
    align-items: center;
    padding-left: 16px;
    box-shadow: 0 0 6px #dedede;
    border-radius: 10px;
    background-color: #fff;
    margin: 0;
    dt {
      height: 44px;
      .van-info {
        border: none;
        background-color: #e30011;
        padding: 0 5px;
        min-height: 16px;
        line-height: 16px;
        font-size: 10px;
      }
    }
    dd {
      margin-left: 18px;
      font-size: 14px;
      color: #141414;
    }
  }
}
</style>
