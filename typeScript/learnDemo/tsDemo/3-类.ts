class Person {
    name: string;
    age: number;
    constructor(){
        this.name='123';
        this.age=18
    }
    skill() {
        return ''
    };
    eat() {
        return '吃饭'
    }
}
//继承和重写
class boy extends Person {
    sex: 'male';
    name: '男孩';
    constructor(){
        super();
        this.name='男孩';
        this.sex='male'
    }
    skill() {
        return '打游戏'
    }
    eatFood(): string {
        return super.eat() + '喝水';//super关键字，它代表父类中的方法
    }
}
console.log(new boy().eatFood());

/*************类中的访问类型********************/

class Dog {
    public name = '消化'; //可以在类的外部访问到
    private age = '1'; //只能在当前的类里使用
    protected hi() {   //可以在继承它的类里使用
        return `我叫${this.name},我今年${this.age}岁了`
    }
}


/*****************类的构造函数******************** */
//关键字constructor声明构造函数
// class Person2{
//     public name :string ;
//     constructor(name:string){ //构造函数
//         this.name=name
//     }
// }

//更简单的写法
class Person2{
    constructor(public name:string){

    }
}
//在子类里写构造函数时，必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
class Teacher extends Person2{
    constructor(public age:number){
        super('jspang')
    }
}

/******************* 类的getter、setter、static、readOnly **************************** */

//用get和set去设置private属性
class Xiaojiejie {
    constructor(private _age:number){}
    get age(){
        return this._age
    }
    set age(age:number){
        this._age=age
      }
  }

//static定义的属性存在于类本身，而不是类的实例上，访问它不需要实例化
class Girl {
    static sayLove() {
      return "I Love you";
    }
  }
  console.log(Girl.sayLove());

//readOnly表示只读，不允许修改


/***************************抽象类***************************** */
//关键字abstract

abstract class Girl2{
    abstract skill():void  //因为没有具体的方法，所以我们这里不写括号
}
class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
    }
}
