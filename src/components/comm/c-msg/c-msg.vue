<template>
  <div class="null-tip-bg" v-show="show_msg">
      
      <div class="null-tip-font" >
        <c-icon class="icon-jinggao"></c-icon>
        <p>{{title}}</p>
      </div>
  </div>
</template>

<script>
import CIcon from 'components/c-icon'
export default {
  name: 'defaultnull',
  props: {
    show_msg:{
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default: ' '
    }
  },
  components: {
    CIcon
  }
 
}
</script>

<style src="./msg"></style>