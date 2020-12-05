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

let rect1 = new Rectangle(10, 20)
rect1.draw()
let rect2 = new Rectangle(11,21)
rect2.draw()