// make a class using constructor
let Rectangle = function(width, height) {
    this.width = width
    this.height = height
    this.draw = function() {
        console.log("This is a rectangle")
        this.printProperties()
    }
    this.printProperties = function() {
        console.log(`Height is ${this.height}`)
        console.log(`width is ${this.width}`)
    }
}

function myNew(constructor) {
    let obj = {}
    Object.setPrototypeOf(obj,constructor.prototype)
    let argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj;
}
let r1 = myNew(Rectangle, 45,30)
r1.draw()