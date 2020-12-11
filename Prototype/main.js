function Person(name) {
    this.name = name
}
let p = new Person("Rakib")
console.log(p)


var person = {
    name: "Rakib",
    age: 10
}
console.log(person)

for (let i in person) {
    console.log(i)
}
console.log(Object.keys(person))

let des = Object.getOwnPropertyDescriptor(person, "name")
console.log(des)

let baseObj = Object.getPrototypeOf(person)
console.log(baseObj)
let dec = Object.getOwnPropertyDescriptor(baseObj, "toString")
console.log(dec)

Object.defineProperty(person, "name", {
    enumerable: false,
    writable: false,
    configureable: false,
    value: "S"
})

function Person(name) {
    this.name = name
}
Person.prototype.PI = 3.1416
let p1 = new Person("Rakib")
let p2 = new Person("Smrity")
console.log(p2)
console.log(p1)
console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype)

function Sq (width) {
    this.width = width
    this.getWidth = function() {
        console.log(`Width is ${this.width}`)
        // this.draw()
    }
}

Sq.prototype = {
    draw: function() {
        console.log("Draw")
        this.getWidth()
    },
    toString: function() {
        return "My width is " + this.width
    }
}
let s1 = new Sq(10)
let s2 = new Sq(5)


let person = {
    name : name
}
console.log(Object.keys(person))
for (let i in person) {
    console.log(i)
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'))

let base = Object.getPrototypeOf(person)
let des = Object.getOwnPropertyDescriptor(base, "toString")
console.log(des)

Object.defineProperty(person, "name", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: "A"
})

function Person(value) {
    this.name = value
}
let p = new Person("Hi")
console.log(Object.getPrototypeOf(p))
console.log(Person.prototype)

function Square(width) {
    this.width = width
}
Square.prototype = {
    draw: function () {
        console.log("Draw")
    },
    toString: function() {
        return `My width is ${this.width}`
    }
}
let s1 = new Square(10)
let s2 = new Square(5)

prototypical Inheritance

function inherit(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}
function Shape(color) {
    this.color = color 
}
inherit(Shape, Sqr)
Shape.prototype = {
    common: function() {
        console.log("In method common")
    }
}

function Sqr(width, color) {
    Shape.call(this, color)
    this.width = width 
}
 
Sqr.prototype.draw = function() {
        console.log("Draw Sqr")
}

function Circle(color, radious) {
    this.radious = radious
    Shape.call(this, color)
}
inherit(Shape, Circle)
Circle.prototype.common = function() {
    Shape.prototype.common.call(this)
    console.log("Overriden common function")
}
let shape1 = new Shape()
let sq1 = new Sqr(10, 'green') 
let c = new Circle('red', 20)
