### c-loadmore 用法

> 用法

- 默认用法
```
<c-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
  <ul>
    <li v-for="item in list"></li>
  </ul>
</c-loadmore>

```
- 自定义用法
  - pull：组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
  - drop：按下的距离不小于 topDistance，此时释放会触发 top-method
  - loading：组件已被释放，top-method 正在执行

```
<c-loadmore :top-method="loadTop" :top-status.sync="topStatus">
  <ul>
    <li v-for="item in list"></li>
  </ul>
  <div slot="top" class="c-loadmore-top">
    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
    <span v-show="topStatus === 'loading'">Loading...</span>
  </div>
</c-loadmore>

```

> 参数
- api

  |参数	|说明	|类型	|默认值|可选值|
  |-|-|-|-|-|
  |autoFill|	若为真，loadmore 会自动检测并撑满其容器|	Boolean	|	true|
  |topPullText|	topStatus 为 pull 时加载提示区域的文字	|String	|	'下拉刷新'|
  |topDropText｜topStatus 为 drop 时加载提示区域的文字	|String	|	'释放更新'|
  |topLoadingText｜	topStatus 为 loading 时加载提示区域的文字	|String	|	'加载中...'|
  |topDistance|触发 topMethod 的下拉距离阈值（像素）|	Number	|	70|
  |topMethod|	下拉刷新执行的方法	|Function	|	|
  |bottomPullText|	bottomStatus 为 pull 时加载提示区域的文字|	String	|	'上拉刷新'|
  |bottomDropText|	bottomStatus 为 drop 时加载提示区域的文字|	String	|	'释放更新'|
  |bottomLoadingText|	bottomStatus 为 loading 时加载提示区域的文字	|String	|	'加载中...'|
  |bottomDistance|	触发 bottomMethod 的上拉距离阈值（像素）|	Number	|	70|
  |bottomMethod|	上拉刷新执行的方法|	Function|		|
  |bottomAllLoaded|	若为真，则 bottomMethod 不会被再次触发	|Boolean|		false|

- solt

  |name|	描述|
  |-|-|
  |-	|数据列表|
  |top	|自定义顶部加载提示区域 HTML 模板|
  |bottom	|自定义底部加载提示区域 HTML 模板|

> 例子
- [loadmore](http://localhost:3200/#!/demo/loadmore)
- [pullup](http://localhost:3200/#!/demo/pullup)
- [pulldown](http://localhost:3200/#!/demo/pulldown)

> 其他
- [mint-ui](http://mint-ui.github.io/docs/#!/zh-cn/loadmore)
