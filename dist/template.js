"use strict";

//支持html标签
var zhangsan = "zhangsan-123";
var a = "<div>\n    <span>" + zhangsan + "</span>\n</div>";

document.write(a);

//支持运算
var b = 1,
    c = 2;

document.write(b + c + "<br/>");

//重复
var d = "he";
console.log(d.repeat(4)); //hehehehe

var e = "hello";
console.log(e.includes(d)); //true