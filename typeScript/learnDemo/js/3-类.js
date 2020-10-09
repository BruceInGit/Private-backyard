"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.name = '123';
        this.age = 18;
    }
    Person.prototype.skill = function () {
        return '';
    };
    ;
    Person.prototype.eat = function () {
        return '吃饭';
    };
    return Person;
}());
//继承和重写
var boy = /** @class */ (function (_super) {
    __extends(boy, _super);
    function boy() {
        var _this = _super.call(this) || this;
        _this.name = '男孩';
        _this.sex = 'male';
        return _this;
    }
    boy.prototype.skill = function () {
        return '打游戏';
    };
    boy.prototype.eatFood = function () {
        return _super.prototype.eat.call(this) + '喝水'; //super关键字，它代表父类中的方法
    };
    return boy;
}(Person));
console.log(new boy().eatFood());
/*************类中的访问类型********************/
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = '消化'; //可以在类的外部访问到
        this.age = '1'; //只能在当前的类里使用
    }
    Dog.prototype.hi = function () {
        return "\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86";
    };
    return Dog;
}());
/*****************类的构造函数******************** */
//关键字constructor声明构造函数
// class Person2{
//     public name :string ;
//     constructor(name:string){ //构造函数
//         this.name=name
//     }
// }
//更简单的写法
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
//在子类里写构造函数时，必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, 'jspang') || this;
        _this.age = age;
        return _this;
    }
    return Teacher;
}(Person2));
/******************* 类的getter、setter、static、readOnly **************************** */
//用get和set去设置private属性
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(_age) {
        this._age = _age;
    }
    Object.defineProperty(Xiaojiejie.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Xiaojiejie;
}());
//static定义的属性存在于类本身，而不是类的实例上，访问它不需要实例化
var Girl = /** @class */ (function () {
    function Girl() {
    }
    Girl.sayLove = function () {
        return "I Love you";
    };
    return Girl;
}());
console.log(Girl.sayLove());
//readOnly表示只读，不允许修改
/***************************抽象类***************************** */
//关键字abstract
var Girl2 = /** @class */ (function () {
    function Girl2() {
    }
    return Girl2;
}());
var Waiter = /** @class */ (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Waiter.prototype.skill = function () {
        console.log('大爷，请喝水！');
    };
    return Waiter;
}(Girl));
