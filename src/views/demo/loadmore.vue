<!--  可以参考pullup 与 pulldown 定制个性化 -->
<template>
    <div class="example-wrapper" id="example1">
        <c-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
            <ul class="example-list">
                <li v-for="item in list" class="example-listitem">{{ item }}</li>
            </ul>
        </c-loadmore>
    </div>
</template>

<style>
    .example-list {
        padding: 4px 4px 0;
        list-style: none; 
    }
    .example-listitem {
        height: 50px;
        line-height: 50px;
        border: solid 1px #999;
        border-radius: 2px;
        margin-bottom: 4px;
        text-align: center;
    }
    
    .example-listitem:last-child {
        margin-bottom: 0;
    }
    
    .example-wrapper {
        height: 100%;
        overflow: scroll;
    }
    
    .c-loadmore-top span {
        display: inline-block;
        transition: .2s linear;
    }
    
    .rotate {
        transform: rotate(180deg);
    }
</style>
<title>vue-loadmore example</title>
</style>

<script>
    import {CLoadmore} from 'components'
    
    export default {
        components: {
            CLoadmore
        },

        data() {
            return {
                list: [],
                allLoaded: false
            };
        },

        methods: {
            loadTop(id) {
                setTimeout(() => {
                    if (this.list[0] === 1) {
                        for (let i = 0; i >= -10; i--) {
                            this.list.unshift(i);
                        }
                    }
                    this.$broadcast('onTopLoaded', id);
                }, 1500);
            },

            loadBottom(id) {
                setTimeout(() => {
                    let lastValue = this.list[this.list.length - 1];
                    if (lastValue < 40) {
                        for (let i = 1; i <= 10; i++) {
                            this.list.push(lastValue + i);
                        }
                    } else {
                        this.allLoaded = true;
                    }
                    this.$broadcast('onBottomLoaded', id);
                }, 1500);
            }
        },

        compiled() {
            for (let i = 1; i <= 20; i++) {
                this.list.push(i);
            }
        }

    }
</script>