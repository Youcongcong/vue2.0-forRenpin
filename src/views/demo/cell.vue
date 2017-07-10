<template>
  <div class="page-cell">
    <c-cell title="标题文字"></c-cell>
    <c-cell title="标题文字" value="说明文字"></c-cell>
    <c-cell  value="说明文字"></c-cell>
    <c-cell title="标题文字" icon="back" value="带 icon"></c-cell>
    <c-cell title="标题文字" :img="attr"></c-cell>
    <c-cell title="标题文字" is-link value="带链接"></c-cell>
    <c-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </c-cell>
    <c-cell title="标题文字">
        <div class="c-cell-value">
            <c-button type="primary" disabled>按钮</c-button>
        </div>
    </c-cell>
    <c-cell title="标题" label="描述信息" is-link></c-cell>
    <c-cell><c-button type="primary">按钮</c-button></c-cell>
  </div>
</template>

<script>

import {CCell, CButton} from 'components'

export default {
    data(){
        return {
            attr :{
                src : '../assets/100x100.png',
                width : 24,
                height : 24
            }
        }
    },
    components: {
        CCell, 
        CButton
    }
}
</script>
