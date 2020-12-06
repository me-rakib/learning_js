/*
Constructor property and constructor function is not same 
*/
// let str = new String("Hello World")
// console.log(str.constructor)

//Bind, call, apply

// function myFunc(c,d) {
//     console.log(this.a+this.b+c+d)
// }
// // myFunc.call({a:10, b:20},1,2)
// // myFunc.apply({a:1, b:5}, [1,2])

// let myBind = myFunc.bind({a:10, b:20})
// myBind(1,2)

// pass by value vs pass by reference

// function sqr(x) {
//     x = x*x;
//     return x;
// }
// let y = 10
// let res = sqr(y)
// console.log(y)
// console.log(res)

// let n = 10
// function cng(n) {
//     n = n+10
//     console.log(n)
// }
// cng(n)
// console.log(n)


let obj = {
    a: 10,
    b: 20
}

function chn(obj) {
    obj.a = obj.a +100
    obj.b = obj.b + 200
    console.log(obj)
}
chn(obj)
console.log(obj)