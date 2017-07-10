<template>
  <div :class="['c-mask', class]" tabindex="-1" transition="fade">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-mask',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./mask"></style>