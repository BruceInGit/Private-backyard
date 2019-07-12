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


### call、apply、bind的区别和用途
call、apply都是用来改变函数内的this指向，
call和apply第一个参数都是运行函数的作用域，call需要将传递的参数一一列举，而apply则是传入参数数组。
两个函数更大的用处在于扩大函数的作用域。
```javascript
MAth.min.call(null,1,2) //2
MAth.min.apply(null,[1,2]) //2

[].slice.apply(arguments)
```
bind()这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。<br>
[让你弄懂 call、apply、bind的应用和区别](https://juejin.im/post/5a9640335188257a7924d5ef)
