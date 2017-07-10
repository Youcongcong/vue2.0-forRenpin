<template>
  <div :class="[type === 'tab' ? 'c-menubar-tab': 'c-menubar', class, {'is-fixed': fixed }]">
     <c-menubar-item v-for="item in items" :item="item" v-if="items" ></c-menubar-item>
     <slot></slot>
  </div>
</template>

<script>
/**
 * c-menubar
 * @module components/menubar
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 */
import CMenubarItem from './c-menubar-item'

export default {
  name: 'c-menubar',

  props: {
    type: {
      type: String,
      default: ""
    },
    class:{
      type:String,
      default:''
    },
    fixed: Boolean,
    selected: '',
    items:{
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    CMenubarItem
  }
};
</script>

<style src='./menubar'></style>

