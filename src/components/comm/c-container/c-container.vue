<template>
  <div :class="['c-container', class]"><slot></slot></div>
</template>

<script>

/**
 * c-container
 * @desc 面板，搭配 c-container-item 使用
 * @module components/c-container
 *
 * @param {number|string} [active] - 当前激活的 tabId
 *
 * @example
 * <c-container :active.sync="selected">
 *   <c-container-item id="1"> 内容A </c-container-item>
 *   <c-container-item id="2"> 内容B </c-container-item>
 *   <c-container-item id="3"> 内容C </c-container-item>
 * </c-container>
 */
export default {
  name: 'c-container',

  props: {
    class:{
      type: String,
      default: ''
    },
    active: ''
  }
};
</script>

<style src="./container"></style>