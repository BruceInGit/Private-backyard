
/* 1.与类型别名不同的地方在于类型别名可以给基础类型，而接口只能给对象
   2.接口作用是实现、继承和约束
*/
interface Girls{ //接口
  name:string;
  age:number;
  bust?:number;// 非必选值得用?定义
  [propname: string]: any;//属性的名字是字符串类型，属性的值可以是任何类型
//   say(): string;
}

function getGirls(girl:Girls):string{
   if(girl.age<25){
     return  girl.name +'是小姐姐';
   }else{
    return  girl.name +'是大姐姐';
   }
}
let obj={
 name:'小姐姐',
 age:20,
 sex:'女',
//  say(){
//      return "hello"
//  }
}
getGirls(obj);

// 继承

interface meinv extends Girls{
  face:string,
  body:string
}

// 约束

interface person{
    a:Girls
  }

  let peo={
      a:{
          name:'1',
          age:28
      }
  }

function abc(obj:person){

}
abc(peo)