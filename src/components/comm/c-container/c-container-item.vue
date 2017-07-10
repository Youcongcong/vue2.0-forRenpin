<template>
  <div v-show="id === $parent.active" class="c-container-item"><slot></slot></div>
</template>

<script>
/**
 * c-container-item
 * @desc 搭配 c-container 使用
 * @module components/c-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <c-container :active.sync="selected">
 *   <c-container-item id="1"> 内容A </c-container-item>
 *   <c-container-item id="2"> 内容B </c-container-item>
 *   <c-container-item id="3"> 内容C </c-container-item>
 * </c-container>
 */
export default {
  name: 'c-container-item',

  props: {
    id: ''
  }
};
</script>



