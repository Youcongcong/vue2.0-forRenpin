<template>
  <div :class="['c-progress', class]" :style="{width: '' + progress + '%'}"></div>
</template>

<script>
export default {
  name: 'c-progress',
  props: {
    class: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style src="./progress"></style>