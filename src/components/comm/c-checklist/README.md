### c-checklist 用法

> 用法
```
checkbox用法

<c-checklist type='checkbox' class="page-part" title="复选框列表" :value.sync="value1" :options="options1"></c-checklist>

radio用法
<c-checklist type='radio' align="right" class="page-part" title="右对齐" :value.sync="value4" :options="options4"></c-checklist>
```

> 参数
- type 类型 默认为`checkbox`多选框, 为`radio`是单选框
- title 选择框标题
- align 对齐方式，默认左对齐，为`right`右对齐
- value 选中值，`checkbox`数据类型`array`，`radio`数据类型`string`
- options 参数类型，数组
    - label  与title一致
    - value  选中值
    - disabled 
    ```options
    options = ['选项A', '选项B', '选项C']
    或
    options = [{
            label: '被禁用',
            value: '值F',
            disabled: true
        },
        {
            label: '选中禁用',
            value: '选中禁用的值',
            disabled: true
        },
        {
            label: '选项A',
            value: '值A'
        },
        {
            label: '选项B',
            value: '值B'
        }]
    ```

> 例子
- [checkbox&radio](http://localhost:3200/#!/demo/checklist)

> 其他
-
