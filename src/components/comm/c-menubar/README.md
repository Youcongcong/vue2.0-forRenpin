### c-menubar 用法

> 用法
```
<c-menubar type="tab" :items="items" :selected.sync="selected" fixed></c-menubar>
```

> 参数

- type 默认为空不写，为`tab`时，显示在bottom底端
- fixed 为true，固定，默认不写
- selected 选择当前item
    ```
    :selected.sync="selected"
    ```
- items 数组对象
    ```
    items : [
        {id:"1", label:"选项一",icon:"back"},
        {id:"2", label:"选项二",icon:"check"},
        {id:"3", label:"选项三",icon:"back"}
    ]
    ```
    - id item唯一标示
    - label 标题
    - icon icon图标

> other 用法
```
<c-menubar :selected.sync="selected">
    <c-menubar-item :item='{id:"1"}'>选项一</c-menubar-item>
    <c-menubar-item :item='{id:"2"}'>选项一</c-menubar-item>
    <c-menubar-item :item='{id:"3"}'>选项一</c-menubar-item>
</c-menubar>
```