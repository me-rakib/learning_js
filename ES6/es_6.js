
let age = 20
let a = age > 18 ? "Adult" : "Not Adult"
console.log(a)

template string 

let name = "ABC"
console.log(name.padStart(5, 0))

Array function

let sum = (a,b) => a+b
console.log(sum(10,20))

let sqr = x => x*x
console.log(sqr(10))

let even_odd = x => {
    if (x%2==0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(even_odd(10))

Array Function

let test = () => {
    console.log(this)
}
test()


let aa = {name: "Rakib"}
let greetings = function(a,b,c) {
    return `Welcome, ${this.name}! in ${a}, ${b} and ${c}`
}
console.log(greetings.call(aa, "Dhaka", "Kolkata", "Delhi")) 


let arr = {
    name: "Rakib Hasan",
    print: function() {
        console.log("My name is - ")
        let f = () => {
            console.log(this.name)
        }
        f()
    }
}

arr.print()

bind

let aa = {name: "Rakib Hasan"}
let b = function(a,b,c) {
    return `Welcome ${this.name}! in ${a}, ${b} and ${c}`
}.bind(aa)
console.log(b("Dhaka", "Tangail", "Mymensingh"))
let obj = {
    name: "Rakib Hasan",
    print: function() {
        setTimeout(function() {
            alert(`Hello, ${this.name}`)
        }.bind(obj), 1000)
    }
}
obj.print()

and or

function sqr(n=10) {
    return n * n
}
console.log(sqr())

let name = (msg = "Hello", name = "Rakib Hasan") => {
    console.log(`${msg}!, ${name}`)
}
name()

let add = (...rest) => {
    return rest.reduce((a,b) => a+b)
}
console.log(add(1,2,3,4,5))

spread
let a =[1,2,3]
console.log(...a)

spread 
let obj = {
    a:1,
    b:2
}
let obj2 = {
    ...obj
}
console.log(obj2)