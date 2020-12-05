let rect = {
    width: 110,
    height: 200,
    draw: function() {
        console.log("This is a rectangle")
        this.printProperties();
    },
    printProperties: function() {
        console.log(`Height is ${this.height}`)
        console.log(`Width is ${this.width}`)
    }
}
rect.draw();

let another = {
    width: 11,
    height: 21,
    print: rect.printProperties
}
another.print()