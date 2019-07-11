js深入了解
====
### map和parseInt   ['1','2','3'].map(parseInt)
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
```javascript
var array = [1,2,3,4];
array.map(x =>{x*2})  // [2,4,6,8]
```
parseInt()方法 两个参数 string和radix， radix是表示要解析的数字的基数（以何种进制转换）

['1','2','3'].map(parseInt)实际上是

```javascript
['1','2','3'].map((item,index) =>{
return parseInt(item,index)
})
```
而 parseInt('1',0) // 1   <br>
   parseInt('2',1) // NaN  <br>
   parseInt('3',2) // NaN  <br>
['1','2','3'].map(parseInt)  //[1,NaN,NaN]
