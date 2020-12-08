<template>
  <div>
    <ul class="app_block">
      <!-- 应用图标 -->
      <li class="appimg">
        <i :class="`iconfont ${item.icon}`" />
        <!-- <img :src="item.icon" /> -->
      </li>
      <!-- 应用名称 -->
      <li class="appname">
        <h3>{{ item.name }}</h3>
        <p>{{ item.text }}</p>
      </li>
      <!-- 安装 -->
      <li class="appinstall">
        <button>安 装</button>
      </li>
    </ul>
    <!-- 应用banner -->
    <div class="appbanner">
      <img :src="item.banner" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.app_block {
  display: flex;
  align-items: center;
  padding-top: 10px;
}
.appimg {
  align-self: flex-end;
}
.appimg > i {
  font-size: 42px;
}
.appname {
  flex-basis: 70%;
  margin-left: 10px;
}
.appname > h3 {
  font-size: 17px;
  line-height: 25px;
}
.appname > p {
  color: #888888;
  font-size: 13px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.appinstall > button {
  border-radius: 20px;
  background-color: #179bf3;
  color: #fff;
  width: 70px;
  font-size: 16px;
  line-height: 25px;
  border: none;
  outline: none;
}
.appbanner {
  padding: 15px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #fff;
}
/* 阿里图标样式 */
.iconanquan {
  color: #fb3737;
}
.iconkaoqinguanlix {
  color: #179bf3;
}
.iconcanpinhuihuiyuanv6 {
  color: #f2b43e;
}
</style>
