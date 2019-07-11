js深入了解
====
### map和parseInt   ['1','2','3'].map(parseInt)
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
```javascript
var array = [1,2,3,4];
array.map(x =>{x*2})  // [2,4,6,8]

```
