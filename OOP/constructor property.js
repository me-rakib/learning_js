/*
Constructor property and constructor function is not same 
*/
// let str = new String("Hello World")
// console.log(str.constructor)

//Bind, call, apply

function myFunc(c,d) {
    console.log(this.a+this.b+c+d)
}
// myFunc.call({a:10, b:20},1,2)
// myFunc.apply({a:1, b:5}, [1,2])

let myBind = myFunc.bind({a:10, b:20})
myBind(1,2)