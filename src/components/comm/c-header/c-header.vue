<template>
  <header :class="['c-header', {'is-fixed': fixed }, class]">
    <div class="c-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="c-header-title" v-if="title" v-text="title"></h1>
    <slot></slot>
    <div class="c-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>


<script>
/**
 * c-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <c-header title="我是标题" fixed>
 *   <c-button slot="left" icon="back" @click="handleBack">返回</c-button>
 *   <c-button slot="right" icon="more"></c-button>
 * </c-header>
 */
export default {
  name: 'c-header',

  props: {
    class:{
      type: String,
      default: ''
    },
    fixed: Boolean,
    title: String
  }
};
</script>

<style src="./header"></style>