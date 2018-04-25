//支持html标签
let zhangsan = "zhangsan-123"
let a = `<div>
    <span>${zhangsan}</span>
</div>`;

document.write(a);

//支持运算
let [b, c] = [1, 2];
document.write(`${b + c}<br/>`);

//重复
let d = "he";
console.log(d.repeat(4)); //hehehehe

let e = "hello";
console.log(e.includes(d)); //true

