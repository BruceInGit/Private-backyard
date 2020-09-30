/******************* 静态类型 **************************** */

// 只要在声明变量的后边加一个:号，然后加上对应的类型
/*
  基础静态类型 number,string,null,undefinde,symbol,boolean，void
*/
const count:number=1;
const str:string='';
const a:null=null

/* 
 对象静态类型
*/
// 1.对象类型
const xiaoJieJie: {
    name: string,
    age: number,
  } = {
    name: "大脚",
    age: 18,
  };

// 2.数组类型
const xiojiejie:string[]=['大脚','18'];

// 3.类类型
class girls{
    name:string
    age:number
}
const xiaojiejie:girls=new girls();

// 4.函数类型
const jianXiaoJieJie: () => string = () => {
    return "大脚";
  };


/***************  类型注解和类型推断  *********************** */

let boo:boolean;
boo=false;

let boot=true

// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解


/******************函数的参数类型和返回值类型**************************** */

function getTotal(one:number, two:number):number {
  return one + two;
}
//返回值为空
function sayHello(): void {
  console.log("hello world");
}
//参数为对象
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

/***************** 数组类型********************* */

let arr:(string|number)[]=[1,'2',3];

let arrObj:{a:number,b:string}[]=[{a:1,b:'2'}];//太麻烦一般不用
//使用类型别名
type obj={a:number,b:string}
let arrobj2:obj[]=[{a:1,b:'2'}]

/******************元组********************** */
// 用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同

let xiaojiejie2: [string, string, number] = ["dajiao", "teacher", 28];