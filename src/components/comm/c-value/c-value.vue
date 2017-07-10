<template>
  <div :class="['c-value', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-value',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./value"></style>