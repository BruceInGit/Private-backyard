"use strict";
function getGirls(girl) {
    if (girl.age < 25) {
        return girl.name + '是小姐姐';
    }
    else {
        return girl.name + '是大姐姐';
    }
}
var obj = {
    name: '小姐姐',
    age: 20,
    sex: '女',
};
getGirls(obj);
var peo = {
    a: {
        name: '1',
        age: 28
    }
};
function abc(obj) {
}
abc(peo);
