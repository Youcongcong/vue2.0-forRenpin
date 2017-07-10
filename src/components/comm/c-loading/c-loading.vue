<template>
  <div :class="['c-loading', class]">
    <div :class="['c-loading-' + theme]" :style="{
      'border-top-color': loadingColor,
      'border-left-color': loadingColor,
      'border-bottom-color': loadingColor,
      'height': loadingSize,
      'width': loadingSize
    }"></div>
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'c-loading',
  props: {
    class: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'snake'
    },
    color: {
      type: String,
      default: '#ccc9c9'
    },
    size: {
      type: Number,
      default: 2
    }
  },
  computed: {
    loadingColor() {
      return this.color || this.$parent.color;
    },

    loadingSize() {
      return (this.size || this.$parent.size) + 'rem';
    }
  }
}
</script>

<style src="./loading"></style>