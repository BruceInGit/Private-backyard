"use strict";
/******************* 静态类型 **************************** */
// 只要在声明变量的后边加一个:号，然后加上对应的类型
/*
  基础静态类型 number,string,null,undefinde,symbol,boolean，void
*/
var count = 1;
var str = '';
var a = null;
/*
 对象静态类型
*/
// 1.对象类型
var xiaoJieJie = {
    name: "大脚",
    age: 18,
};
// 2.数组类型
var xiojiejie = ['大脚', '18'];
// 3.类类型
var girls = /** @class */ (function () {
    function girls() {
        this.name = '123';
        this.age = 18;
    }
    return girls;
}());
var xiaojiejie = new girls();
// 4.函数类型
var jianXiaoJieJie = function () {
    return "大脚";
};
/***************  类型注解和类型推断  *********************** */
var boo;
boo = false;
var boot = true;
// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
/******************函数的参数类型和返回值类型**************************** */
function getTotal(one, two) {
    return one + two;
}
//返回值为空
function sayHello() {
    console.log("hello world");
}
//参数为对象
function add(_a) {
    var one = _a.one, two = _a.two;
    return one + two;
}
/***************** 数组类型********************* */
var arr = [1, '2', 3];
var arrObj = [{ a: 1, b: '2' }]; //太麻烦一般不用
var arrobj2 = [{ a: 1, b: '2' }];
/******************元组********************** */
// 用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var xiaojiejie2 = ["dajiao", "teacher", 28];
