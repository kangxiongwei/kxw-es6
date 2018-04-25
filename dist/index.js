"use strict";

//变量定义
var a = 15;
console.log(a);

//解构
var b = 0,
    c = 1,
    d = 2;

console.log(b, c, d);

var _name$age = { name: "zhangsan", age: 15 },
    age = _name$age.age,
    name = _name$age.name;

console.log(age + "," + name);

//对象扩展运算符和rest运算符
function jspang() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
    console.log(arguments.length <= 4 ? undefined : arguments[4]);
}

jspang(1, 2, 3, 4);

var arr1 = ['www', 'jspang', 'com'];
//let arr2=arr1;
var arr2 = [].concat(arr1); //通过扩展符解决数组一被改变
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

//rest运算符
function zhangsan(first) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

zhangsan(1, 2, 3, 4, 5, 6, 7, 8);