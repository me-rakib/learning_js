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

