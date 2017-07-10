<template>
  <div :class="['c-title', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-title',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./title"></style>