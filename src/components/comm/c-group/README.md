### c-group 用法

> 用法
```
<c-group v-for="demo in demos" :title="__(demo.title)" :cells="demo.cells"></c-group>
```
> 参数
- title group标题
- cells c-group-cell的参数
    - label 
    - icon  
    - click 点击回调函数
    - extra 
        - isLink 是否为链接
        - isHTML 是否为html
    - value