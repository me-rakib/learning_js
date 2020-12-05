// factory pattern
let createRect = function(width, height) {
    return {
        width: width,
        height: height,
        draw: function() {
            console.log("this is a rectangle")
            this.printProperties();
        },
        printProperties: function() {
            console.log(`Height is ${this.height}`)
            console.log(`Width is ${this.width}`)
        }
    }
}
let rect1 = createRect(10,20)
rect1.draw()
let rect2 = createRect(11,22)
rect2.draw()