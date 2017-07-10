<template>
    <div>
        <!--    用法一   -->
        <c-menubar type="tab" :items="items" :selected.sync="selected" fixed></c-menubar>
         
        <!--   用法二   -->
        <!--<c-menubar :items="items" :selected.sync="selected"></c-menubar>-->

        <!--   用法三   -->
        <c-menubar :selected.sync="selected">
            <c-menubar-item :item='{id:"1"}'>选项一</c-menubar-item>
            <c-menubar-item :item='{id:"2"}'>选项一</c-menubar-item>
            <c-menubar-item :item='{id:"3"}'>选项一</c-menubar-item>
        </c-menubar>

    <div>
      <c-cell class="page-part" title="当前选中">{{ selected }}</c-cell>
    </div>

    <c-container :active.sync="selected">
      <c-container-item id="1">
        <c-cell v-for="n in 10" :title="'内容 ' + n"></c-cell>
      </c-container-item>
      <c-container-item id="2">
        <c-cell v-for="n in 4" :title="'测试 ' + n"></c-cell>
      </c-container-item>
      <c-container-item id="3">
        <c-cell v-for="n in 6" :title="'选项 ' + n"></c-cell>
      </c-container-item>
    </c-container>
    </div>
</template>


<script>

import {CMenubar, CMenubarItem, CContainer, CContainerItem, CCell} from "components"

export default {
  data() {
    return {
      selected: '1',
      items : [
          {id:"1", label:"选项一",icon:"back"},
          {id:"2", label:"选项二",icon:"check"},
          {id:"3", label:"选项三",icon:"back"}
      ]
    };
  },
  components: {
      CMenubar,
      CMenubarItem,
      CContainer,
      CContainerItem,
      CCell
  }
};
</script>