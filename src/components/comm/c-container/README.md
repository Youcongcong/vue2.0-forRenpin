### c-container 用法

> 用法 （可参考c-menubar示例）
```
<c-container :active.sync="active">
  <c-container-item id="tab-container1">
    <c-cell v-for="(index, n) in 10" :title="'tab-container1 ' + index"></c-cell>
  </c-container-item>
  <c-container-item id="tab-container2">
    <c-cell v-for="(index, n) in 5" :title="'tab-container2 ' + index"></c-cell>
  </c-container-item>
  <c-container-item id="tab-container3">
    <c-cell v-for="(index, n) in 7" :title="'tab-container3 ' + index"></c-cell>
  </c-container-item>
</c-container>

```

> 参数

- active    当前激活的 id	
- id	    item 的 id	

