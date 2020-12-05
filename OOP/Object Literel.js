// Object literal

let rect = {
    width: 100,
    height: 200,
    draw : function() {
        console.log("This is a rectangle")
        console.log(`Height of this rectangle is ${this.height}`)
        console.log(`Width of this rectangle is ${this.width}`)
    }
}
rect.draw()
rect.height = 10
rect.draw()