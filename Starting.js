functional programming
pure function-
1. It will return same results if given
argument is same
2. It won't cause any observeable side
effect

function sqrt(n) {
    return n*n
}
console.log(sqrt(4))
pure function will return same value if the 
arguments are same
won'y affect any observeable side effects

side effects 
let n = 10
function update() {
    n=100;
}
console.log(n)
update() // will update the value of n, this is side effect
console.log(n) 

first class function is js

function add(a,b) {
    return a+b
} 
have to maintain this rules:
1. A function can be stored in a variable

let sum = add
console.log(sum(1,2))
console.log(typeof sum)

2. A function can be store in an Array.

let arr = []
arr.push(add)
console.log(typeof arr)
console.log(arr)
console.log(arr[0](9,4))

3. A function can be stored in an Object.

let obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(10,20))

4. We can create function as we need .

setTimeout(function() {
    console.log("I've created....")
}, 1000)

first class function
function add(a,b) {
    return a+b
}

A function can be stored in a variable.
let sum = add
console.log(sum(4,4))
console.log(typeof sum)

A function can be stored in an array

let arr = []
arr.push(add)
console.log(arr)
console.log(typeof arr)
console.log(arr[0](5,5))

A function can be stored in an object
let obj = {
    sum : add
}
console.log(typeof obj)
console.log(typeof obj.sum)
console.log(obj.sum(9,9))

we can create function as we need

setTimeout(function() {
    console.log("Timeout")
}, 1000)
console.log(8+7+6+6)

// higher order function

function add(a,b) {
    return a+b
}

fucntion manipulate(a,b,func) {
    let x = a+b
    let y = a-b
    function multiply() {
        let m = func(a,b)
        return x*y*m
    }
    return multiply
}

let reuslt = manipulate
console.log(reuslt())

first class function 
we can pass function as an arguments
we can return function from another function

function add(a,b) {
    return a+b
}

function manipulation(a,b,func) {
    let x = a+b
    let y = a-b
    function mul() {
        let m = func(a,b)
        return x*y*m
    }
    return mul
}

let result = manipulation(1,2,add)
console.log(result())


closure 

let a = 10
function print() {
    let x = 10
    return function() {
        console.log(x) 
    }
}
let reuslt = print()
console.dir(reuslt())

callback 
function sample(a,b,cb) {
    let c = a+b
    let d = a-b
    return result = cb(c,d)
}

console.log(sample(5,6, function(c,d) {
    return c+d
}))

console.log(sample(5,6,function(c,d) {
    return c-d
}))
console.log(sample(5,6,function(c,d) {
    return c*d
}))
console.log(sample(5,6,function(c,d) {
    return c/d
}))

forEach

let arr = [1,2,3,4,5]
let sum=0
arr.forEach(function(value) {
    sum += value
})
console.log(sum) 

function for_each(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

for_each(arr, function(value, index, arr) {
    console.log(value, index, arr)
})

function addf(value, index, arr) {
    arr[index] = value+5
}

let a= for_each(arr, addf)
console.log(a)


map
let arr = [1,2,3]
let sqrt = arr.map(function (value) {
    return value*value
})
console.log(arr)
console.log(sqrt)

let arr = [1,2,3]

function myMap(arr, cb) {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
        let temp = cb(arr[i]) 
        newArr.push(temp)
    }
    return newArr
}

const result = myMap(arr, function(value) {
    return value*2
})
console.log(result)

let arr=[1,2,3,4,5]

function for_each(arr, cb) {
    for(let i=0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

for_each(arr, function(value, index, arr) {
    console.log(index, value, arr)
})

let arr = [1,2,3,4,5]

let arr1 = arr.map(function(value) {
    return value*value
})
console.log(arr)
// console.log(arr1)
let arr = [1,2,3,4,5]
function myMap(arr, cb) {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
        let temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}
function pr(val) {
    return val*5
}
console.log(arr)
console.log(myMap(arr,pr))

let arr = [1,2,3,4,5,6,7,8,9]
let filtered = arr.filter(function(value) {
    return value%2 === 0
})
console.log(arr)
console.log(filtered)

function myFilter(arr,cb) {
    let newArr =[]
    for (let i=0; i<arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
function logic(value) {
    return value%2 === 0
}
console.log(myFilter(arr,logic))
console.log(myFilter(arr, function(value) {
    return value%2 ===1
}))

reduce 
let arr = [1,2,3,4,50]
let sum = arr.reduce(function(prev, curr) {
    return prev + curr
}, 100)
console.log(sum)
let max = arr.reduce(function(prev,curr) {
    return Math.max(prev,curr)
}, 0)
console.log(max)

function myReduce(arr,cb,acc) {
    for (let i=0; i<arr.length; i++) {
        acc = cb(acc,arr[i])
    }
    return acc
}
let sum = myReduce(arr, function(prev,curr) {
    return prev+curr
}, 0)
let max = myReduce(arr,function(prev, curr) {
    return Math.max(prev,curr)
}, 0)
let min = myReduce(arr,function(prev, curr) {
    return Math.min(prev,curr)
}, arr[0])
console.log(sum, min, max)

let arr = [1,2,3,4,5]
let res = arr.find(function(value) {
    return value === 5
})
let res = arr.findIndex(function(value) {
    return value === 5
})
console.log(res)
function myFind(arr,cb) {
    for (let i=0; i<arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
}
console.log(myFind(arr, function(value) {
    return value === 5
}))
function myFindIndex(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
}
console.log(myFindIndex(arr, function(value) {
    return value === 5
}))


sort 

let arr = [9,0,1,1,5,3,8,100,2,4]
arr.sort(function(a,b) {
//     if (a>b) {
//         return -1
//     } else if (a<b) {
//         return 1
//     } else {
//         return 0
//     }

// })
// console.log(arr)

let person = [
    {
        name : "A",
        age : 1
    },
    {
        name : "B",
        age : 100
    },
    {
        name : "C",
        age : 20
    },
    {
        name : "D",
        age : 19
    },
    {
        name : "E",
        age : 50
    },
]

person.sort(function(a,b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(person)

some and every 

let arr = [0,1,2,3,4,5,6,7,8,9]

const r1 = arr.every(function(value) {
    return value>0
})
console.log(r1)
const r2 = arr.every(function(value) {
    return value < 0
})
console.log(r2)
const r3 = arr.some(function(value) {
    return value % 2 == 0
})
console.log(r3)
const r4 = arr.some(function(value) {
    return value % 2 == 1
})
console.log(r4)
for (let i=0; i<100; i++) {
    console.log(i)
}

function greet(msg) {
    function greetings(name) {
        return msg + ' ' + name
    }
    return greetings
}
let gm = greet("Hello")
// console.log(gm)
let r = gm("Tanaf")
console.log(r)

function base(b) {
    return function(n) {
        let rslt = 1
        for(let i=0; i<b; i++) {
            rslt *= n
        }
        return rslt
    }
}

const base10 = base(10)
const base5 = base(5)
const base2 =base(2)

console.log(base10(2))
console.log(base5(2))
console.log(base2(2))

recursive function
function sayHi(n) {
    if (n===0) {
        return
    }
    console.log("I'm calling")
    sayHi(n-1)
}
sayHi(100)

function add(n) {
    if (n==0) {
        return 0
    }
    return n + add(n-1)
}
// console.log(add(5))

function fact(n) {
    if (n===1) {
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))

let arr = [1,2,3,4,5]
function sumOfArray(arr,lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length-1))

currying

function currying(a) {
    return function(b) {
        return function(c) {
            return a+b+c
        }
    }
}

const result = currying(5)(10)(15)
console.log(result)

forEach
let arr = [1,2,3,4,5]
function myForEach(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
console.log(myForEach(arr, function(value, index, arr) {
    console.log(value, index, arr)
})) 

let arr = [1,2,3]
let newArr = arr.map(function(value) {
    return value * 5
})
console.log(arr)
console.log(newArr)

map implementation

let arr = [1,2,3,4,5]
function myMap(arr, cb) {
    let newArr = []
    for(let i=0; i<arr.length; i++) {
        let temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}

console.log(myMap(arr, function(value) {
    return value * 5
}))

filter implementation 
let arr = [1,2,3,4,5,6,7,8,9]
let newArr = arr.filter(function(value) {
    return value % 2 == 0
})
console.log(arr)
console.log(newArr)

let arr = [1,2,3,4,5,6,7,8,9]

function myFilter(arr, cb) {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function(value) {
    return value %2 == 0
}))


implementation of reduce
let arr = [1,2,3,4,5]
let r = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr)
}, arr[0])
console.log(r)

implementation of reduce 
let arr = [1,2,3,4,5]

function myReduce(arr, cb, acc) {
    for(let i=0; i< arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc 
}

let sum = myReduce(arr, function(prev, curr) {
    return prev + curr
}, 100)
console.log(sum) 

let max = myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr)
}, arr[0])
console.log(max) 

let min = myReduce(arr, function(prev, curr) {
    return Math.min(prev,curr)
}, arr[0])
console.log(min)

implementation of find and find index

let arr = [1,2,3,4,5]
let r = arr.find(function(value) {
    return value === 5
})
console.log(r)

let r = arr.findIndex(function(value) {
    return value === 5
})
console.log(r)

function myFind(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
        }
    }
}
let r = myFind(arr, function(value) {
    return value === 5
})

console.log(r)


implementation of find index

let arr = [1,2,3,4,5]

function myFindIndex(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            return i
        }
    }
}
console.log(myFindIndex(arr, function(value) {
    return value === 5
}))

sort 

let arr = [9,1,8,2,7,3,6,4,5,0,-1,-2,100]

arr.sort(function(a,b) {
    if (a>b) {
        return -1
    } if (a<b) {
        return 1
    } else {
        return 0
    }  
})
console.log(arr)

let arr = [
    {
        name : "A",
        age : 21
    },
    {
        name : "B",
        age : 18
    },
    {
        name : "C",
        age : 20
    },
    {
        name : "D",
        age : 22
    },
]
console.log(arr)
arr.sort(function(a,b) {
    if(a.age > b.age) {
        return 1
    } else if (a.age<b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)


every 

let arr = [1,2,3,4,5,6,7,8,9]
let r = arr.every(function(value) {
    return value %2 == 0
})
console.log(r)

let r = arr.some(function(value) {
    return value % 2 === 0
})
console.log(r)


return a function from another function

function greet(g) {
    function greetings(name) {
        return `${g}, ${name}!`
    }
    return greetings
}

const gm = greet("Good Morning")
// console.log(gm("Rakib Hasan"))

function base(b) {
    return function(n) {
        var result = 1
        for (let i=0; i<b; i++) {
            result *= n 
        }
        return result
    }
}

let base10 = base(10)
console.log(base10(2))
let base5 = base(5)
console.log(base5(2))

print hello ten times without using for loop

function print(n) {
    if (n===0) {
        return
    }
    console.log("Hello", n)
    print(n-1)
}
print(10)

add 1 to 100

function add(n) {
    if (n===1) {
        return 1
    }
    return n + add(n-1)
}
console.log(add(5))

fact 

function fact(n) {
    if (n===1) {
        return 1
    }  
    return n * fact(n-1)
}
console.log(fact(5))

let arr = [1,2,3,4,5]

function sumOfArray(arr, lastIndex) {
    if (lastIndex === 0) {
        return arr[0]
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex-1)
}
console.log(sumOfArray(arr, arr.length-1))

//currying 
function currying(a) {
    return function(b) {
        return function(c) {
            return a+b+c
        }
    }
}

let r = currying(5)(10)(15)
console.log(r)


composition

function print(n) {
    console.log(n)
}
function add(a,b) {
    return a+b
}
function mul(a) {
    return a*100
}
print(mul(add(10,12)))


function a() {
    function b() {
        console.log("Hello")
    }
    b()
} 
a() 

for (let i=0; i< 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000*i)
}