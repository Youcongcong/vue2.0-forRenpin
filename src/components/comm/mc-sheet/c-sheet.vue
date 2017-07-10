<template>
<div class=''>
    <div class="fuzzylayer" v-show="show"></div>
    <div class="besure-receive" v-show="show" transition="sheet">
        <p class="text">
           {{title}}
        </p>
        <div class="btn">
            <span @click="cancol">取消</span>
            <span @click="confirm">确定</span>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    el(){
        var div = document.createElement("div")
        document.body.appendChild(div)
        return div
    },
    data () {
        return {
            title: '确定要执行当前操作？',
            show: true,
            confirmCb: () => {}
        }
    },
    computed: {
    },

    methods: {
        confirm(){
            this.confirmCb();
            this.show = false;
        },
        cancol(){
            this.show = false;
        }
    }
})
</script>

<style src='./sheet'></style>