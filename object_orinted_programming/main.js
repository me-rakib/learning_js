// const rect = {
//     width: 100,
//     height: 50,
//     draw: function() {
//         console.log("I'm drawing.")
//         this.printProperties()
//     },
//     printProperties: function() {
//         console.log(`My width is ${this.width}`)
//         console.log(`My height is ${this.height}`)
//         console.log(this)
//     }
// }

// rect.draw()

// const abc = {
//     width: 1,
//     height: 2,
//     d: rect.printProperties
// }
// abc.d()

// function a() {
//     console.log(this)
// }
// a()


// https://www.youtube.com/watch?v=h_h7FDOkl2A&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=110

// factory pattern 

// let creatRect = function(width, height) {
//     return {
//         width: width,
//         height: height,
//         draw: function() {
//             console.log("I'll draw ractangle")
//             this.printProperties()
//         },
//         printProperties: function() {
//             console.log(`My height is ${this.height}`)
//             console.log(`My width is ${this.width}`)
//         }
//     }
// }

// let rect1 = creatRect(10, 20)
// rect1.draw()
// console.log("\n")

// let rect2 = creatRect(44, 55)
// rect2.draw()


// constructor patterm 

// let Ractangle = function(width, height) {
//     this.width = width 
//     this.height = height
//     this.draw = function() {
//         console.log("I'll draw ractangle")
//         this.printProperties()
//     }
//     this.printProperties = function() {
//         console.log(`My width is ${this.width}`)
//         console.log(`My height is ${this.height}`)
//     }
// }

// let rect1 = new Ractangle(10, 15)
// rect1.draw()


// implementation of new keyword  

// function myNew(constructor) {
//     let obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     let argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj
// }

// let rect3 = myNew(Ractangle, 10, 20)
// rect3.draw()


// https://www.youtube.com/watch?v=kAUptUeN3Gg&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=114

// constructor pattern 

// const Ractangle = function(width, height) {
//     this.width = width
//     this.height = height
    
//     this.draw = function() {
//         console.log("Drawing Ractangel")
//         this.printProperties()
//     }
//     this.printProperties = function() {
//         console.log(`My width is ${this.width}`)
//         console.log(`My height is ${this.height}`)
//     }
// }

// Factory pattern

// let creatRect = function(wid, hei) {
//     return {
//         width: wid,
//         height: hei,
//         draw: function() {
//             console.log('Draw')
//             this.print()
//         },
//         print: function() {
//             console.log(`Height = ${this.height}`)
//         }
//     }
// }

// let r = creatRect(10,20)
// r.draw()

// function myFunc(a,b) {
//     console.log(this)
//     console.log(a)
//     console.log(b)
//     console.log(this.a)
//     console.log(this.b)
// }
// // myFunc()
// const ob = {
//     a:100,
//     b:200
// }
// // myFunc.call({b:10, a:11}, 1,2)
// // myFunc.apply(ob, [0, 0])

// const myBind = myFunc.bind(ob)
// myBind(5,6)

// pass by value and pass by reference 

// let n = 10
// function change(n) {
//     n = n + 12
//     console.log(n)
// }

// change(n) 
// console.log(n)

// let obj = {
//     a: 10,
//     b: 11
// }
// function changeMe(obj) {
//     obj.a = 120
//     obj.b = 52
//     console.log(obj)
// }
// changeMe(obj)
// console.log(obj)


// constructor pattern 
// abstruction

// const Rectangle = function(wi, hi) {
//     this.width = wi
//     this.height = hi 
//     const position = {
//         x: 10,
//         y: -20
//     }
//     const printProperties = function(){
//         console.log(`Width is ${this.width}`)
//         console.log(`Height is ${this.height}`)
//     }.bind(this)
//     this.draw = function() {
//         console.log('Drawing')
//         printProperties()
//         console.log(`Position - X = ${position.x}, Y = ${position.y}`)
//     }
// }

// const r1 = new Rectangle(123, 456)


// constructor pattern 
// getter and setter

// const Rectangle = function(wi, hi) {
//     this.width = wi
//     this.height = hi
//     let position = {
//         x: 10,
//         y: 20
//     }
//     const printProperties = function() {
//         console.log(`Height = ${this.height}`)
//         console.log(`Width = ${this.width}`)
//     }.bind(this)
//     this.draw = function() {
//         console.log('Drawing')
//         printProperties()
//         console.log(`x = ${position.x}, y = ${position.y}`)
//     }
//     Object.defineProperty(this,'pos', {
//         get: function() {
//             return position
//         },
//         set: function (value) {
//             position = value 
//         }
//     })
    
// }

// let rect2 = new Rectangle(123, 456)
// rect2.draw()
// rect2.pos = {
//     x: 2,
//     y: 1
// }
// console.log(rect2.pos)

// https://www.youtube.com/watch?v=T4pvbWvvCDA&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=121&ab_channel=StackLearner