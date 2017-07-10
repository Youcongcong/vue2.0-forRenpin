<template>
  <div :class="['c-pane', class, dir]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-pane',
  props: {
    class: {
      type: String,
      default: ''
    },
    dir: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./pane"></style>