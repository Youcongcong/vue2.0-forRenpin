<template>
  <div>
    <!--<c-header title="固定在顶部"></c-header>-->
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <c-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <c-button v-link="'/'" icon="back" slot="left">返回</c-button>
        <c-button icon="more" slot="right"></c-button>
      </c-header>

      <c-header title="多个按钮">
        <div slot="left">
          <c-button v-link="'/'" icon="back">返回</c-button>
          <c-button @click="handleClose">关闭</c-button>
        </div>
        <c-button icon="more" slot="right"></c-button>
      </c-header>

      <c-header title="左侧仅文字">
        <c-button v-link="'/'" slot="left">返回</c-button>
      </c-header>

      <c-header title="右侧仅文字">
        <c-button v-link="'/'" slot="right">分享</c-button>
      </c-header>

      <c-header title="仅图标">
        <c-button v-link="'/'" slot="left" icon="back"></c-button>
        <c-button slot="right" icon="more"></c-button>
      </c-header>
    </div>

  </div>
</template>

<script>
import {CHeader, CButton} from 'components'


export default {
  name: 'header',

  data() {
    return {

    };
  },

  components: {
      CHeader,
      CButton
  },

  methods: {
    handleClose() {
      alert('close this page');
    }
  }
};
</script>

<style lang="css">
  .page-header {
      &-main {
        margin-top: 50px;
        min-height: 120vh;

        &> * {
          margin-bottom: 15px;
        }
      }
    }
</style>
