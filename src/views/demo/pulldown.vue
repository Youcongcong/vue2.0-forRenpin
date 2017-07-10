<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull down</h1>
    <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <div class="page-loadmore-wrapper" v-el:wrapper :style="{ height: wrapperHeight + 'px' }">
      <c-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="top" class="c-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <c-loading :size="1.5"></c-loading>
          </span>
        </div>
      </c-loadmore>
    </div>
  </div>
</template>

<style>
    .page-loadmore-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }

      .page-loadmore-listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      .page-loadmore-wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      .c-loading {
        display: inline-block;
        vertical-align: middle;
      }

  c-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      &.is-rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>

<script>
  import {CLoadmore, CLoading} from 'components'
  
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        wrapperHeight: 0
      };
    },
    components: {
      CLoadmore,
      CLoading
    },
    methods: {
      loadTop(id) {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$broadcast('onTopLoaded', id);
        }, 1500);
      }
    },

    compiled() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    ready() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top;
    }
  };
</script>
