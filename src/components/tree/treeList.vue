<template>
  <div>
    <ul>
      <template v-for="item in data">
        <li :key="item.id" class="treeLi">
          <div class="tree-title" :style="stylePadding">
            <img
              :src="item.select ? selected : select"
              width="17px"
              height="17px"
              class="checkImg"
              @click="togCheck(item.id)"
            />
            <div @click="togTree" style="display:inline-block">
              <span class="title">{{ item.title }}</span>
              <img
                v-if="item.children"
                :src="show ? open : close"
                width="10px"
                height="22px"
                class="togger"
              />
            </div>
          </div>
          <transition name="fade">
            <TreeList
              :increment="count"
              v-if="item.children"
              :data="item.children"
              v-show="show"
            ></TreeList>
          </transition>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import bus from '@/tools/bus.js'
export default {
  name: 'TreeList',
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    increment: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selected: require('@/assets/tree/selected.png'), // 选中
      select: require('@/assets/tree/select.png'), // 未选择
      open: require('@/assets/tree/show.png'), // 展开图标
      close: require('@/assets/tree/hidden.png'), // 收缩图标
      show: false
    }
  },
  methods: {
    togCheck(id, status) {
      // 切换check是否选中`
      bus.$emit('getTreeItemId', id) // 将递归组件的所有id用事件总线方式传出去
    },
    togTree(item) {
      this.show = !this.show
    }
  },
  computed: {
    count() {
      var c = this.increment
      return ++c
    },
    stylePadding() {
      return {
        'padding-left': this.count * 26 + 'px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tree-title {
  position: relative;
}
.treeLi {
  margin-top: 20px;
  &:last-child {
    margin-bottom: 50px;
  }
}
.togger {
  vertical-align: middle;
  position: absolute;
  right: 50px;
}
.checkImg {
  vertical-align: middle;
}
.title {
  font-size: 16px;
  font-weight: 400;
  color: #141414;
  opacity: 1;
  margin-left: 7px;
  vertical-align: middle;
}
//收缩展开动画
/* 简单的css transition实现动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
