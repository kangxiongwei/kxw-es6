//变量定义
let a = 15;
console.log(a);

//解构
let [b, c, d] = [0, 1, 2];
console.log(b, c, d);

let {age, name} = {name: "zhangsan", age: 15};
console.log(age + "," + name);

//对象扩展运算符和rest运算符
function jspang (...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
    console.log(args[4]);
}

jspang(1, 2, 3, 4);

let arr1 = ['www', 'jspang', 'com'];
//let arr2=arr1;
let arr2 = [...arr1]; //通过扩展符解决数组一被改变
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

//rest运算符
function zhangsan (first, ...args) {
    for (let val of args) {
        console.log(val);
    }
}

zhangsan(1, 2, 3, 4, 5, 6, 7, 8);
