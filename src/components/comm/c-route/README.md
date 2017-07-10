### c-route 用法

> 引用 
```
import {CRoute, CRouteLink} from 'components/c-route'
或
import {CRoute, CRouteLink} from 'components'
```

> 用法

```í
 <c-route :routes="routes"></c-route>
 <c-route-link :route="{ link: { path: '/', exact: true }, title: __('header.title') }"></c-route-link>
```

> 参数
- link 访问链接
    - path 路由地址
    - name 路由名称
    - exact 是否添加在上级目录后面，为`true`添加，与path配合使用
- icon 
- title 
- subRoutes 子路由(暂未用到)