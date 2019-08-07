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

### JavaScript事件循环
```javascript
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
```
[事件执行](https://www.cnblogs.com/HanJie0824/p/7913003.html)
[题解](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)
[js事件循环详解](https://juejin.im/post/59e85eebf265da430d571f89)
