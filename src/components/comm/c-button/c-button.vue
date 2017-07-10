<template>
  <button :class="['c-button', size, class]" :type="type" v-bind="attrs" @touchstart="handleClick">
    <span v-if="icon" class="c-button-icon">
      <c-icon :class="'icon-'+ icon"></c-icon>
    </span><slot></slot>
  </button>
</template>

<script>
import CIcon from 'components/comm/c-icon'

export default {
  name: 'c-button',
  props: {
    class: {
      type: [String,Object],
      default: 'default'
    },
    disabled: Boolean,
    icon: String,
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    attrs: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleClick($event) {
      if (this.disabled) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  },
  components: {
    CIcon
  }
}
</script>

<style src="./button"></style>