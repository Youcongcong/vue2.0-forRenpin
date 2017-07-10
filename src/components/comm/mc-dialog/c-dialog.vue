<template>
    <div >
        <div class="fuzzylayer" v-show="show"></div>
        <div class="address-info-warning" v-show="show" transition="dialog">
            <c-icon class="icon-jinggao"></c-icon>
            <span>{{tips}}</span>
        </div>
    </div>
</template>


<script>
import Vue from 'vue'
import CIcon from '../c-icon'

export default Vue.extend({
  el(){
    var div = document.createElement("div")
    document.body.appendChild(div)
    return div
  },
  data () {
    return {
        tips:'操作成功',
        show: false,
        callback: () => {},
        clearTime: null
    }
  },
  computed:{
  },
    watch: {
    'show': {
        handler: function (val, oldVal) {
            if(val){
                this.clearTime && clearTimeout(this.clearTime);
                this.clearTime = setTimeout(()=>{
                    this.show = false;
                },1000);
            }
        },
        immediate: false
    }
  },
  methods: {
   
  },
  components: {
   CIcon
  },
  ready(){
    //   this.callback();
  }
})
</script>





<style src="./dialog"></style>