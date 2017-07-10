<template>
  <div :class="['c-label', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-label',
  
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./label"></style>