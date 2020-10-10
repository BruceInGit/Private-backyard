// 只有联合类型存在的情况下，才需要类型保护
// 联合类型的关键符号是|

interface dog{
    run:()=>{
        
    }
    name:string
    type:boolean
}
interface cat{
    name:string
    type:boolean
    action:()=>{}
}

// 类型保护-类型断言
function jurgewho(animal:cat|dog){
    if (animal.type) {
        (animal as dog).run();
      }else{
        (animal as cat).action();
      }
}

// 类型保护-in 语法
function jurgewho2(animal:cat|dog){
    if ('run' in animal) {
        animal.run();
      }else{
        animal.action();
      }
}

// 类型保护-typeof  语法
function add(first:string|number,second:string|number){
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
      }
      return first + second;
}

// 类型保护-instanceof 语法
// 只能用在类上
class NumberObj{
    constructor(public count:number){}
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
      return first.count + second.count;
    }
    return 0;
  }
