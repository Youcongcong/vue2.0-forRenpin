<template>
  <i :class="['c-icon', class]">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'c-icon',
  props: ['class']
}
</script>

<style src="./icon"></style>
