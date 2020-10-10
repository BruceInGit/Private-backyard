// 函数泛型
// 使用场景，接收两个有多种类型的参数，但是两个参数要保持一致

function numcount(first:number|string,second:number|string){
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
      }
    return first + second;
}
// 泛型的定义使用<>（尖角号）进行定义的
function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
  }
  join <string> ("jspang", ".com");

// 泛型中数组的使用
//在工作中，我们经常使用<T>来作泛型的表示，当然这不是硬性的规定，只是大部分程序员的习惯性写法。
function myFun<T>(params: T[]) {
    return params;
  }
  myFun<string> (["123", "456"]);

function myFun2<T>(params:Array<T>){
    return params;
}

// 多个泛型
function join2<T,P>(first:T,second:P){
  return `${first}${second}`;
}
join2<string,number>('123',12);



// 类中泛型

class arrayList<T>{
   constructor(private arr:T[]){}
   getNum(index:number):T{
     return this.arr[index];
   }
}

let arrdemo=new arrayList<string>(['123','456']);
console.log(arrdemo.getNum(1));