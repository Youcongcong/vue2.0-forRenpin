<template>
  <a class="c-menubar-item" @click="$parent.selected = item.id" :class="{ 'is-selected': $parent.selected === item.id }">
    <c-icon class="c-menubar-item-icon" :value="item.icon" v-if="item.icon"></c-icon>
    <c-label class="c-menubar-item-label"><slot></slot>{{item.label}}</c-label>
  </a>
</template>

<script>
/**
 * c-menubar-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <c-menubar-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </c-menubar-item>
 */
import CIcon from "components/c-icon" 
import CLabel from "components/c-label"

export default {
  name: 'c-menubar-item',

  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  components: {
    CIcon,
    CLabel
  }
};
</script>

<style src="./menubar-item"></style>