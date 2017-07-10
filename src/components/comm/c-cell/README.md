### c-cell 用法

> 用法

```
    <c-cell title="标题文字"></c-cell>
    <c-cell title="标题文字" value="说明文字"></c-cell>
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
```

> 参数说明

- title 标题 
- value 内容
- icon 图标icon，比如icon="back"
- img 图片 attr为obejct（width,height,alt,title,src）,有src时才显示
- is-link 判断是非为链接，有点击样式效果
- label 标题下面的描述信息

> other
