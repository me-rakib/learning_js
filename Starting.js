/* JS data type 
1. Premitive - Number, String, Boolean,
NaN, undefined 
2. Object - Function, Array, Object 

*/

// Number 

// console.log(11)
// console.log("11")
// let n = 11
// console.log(n.toString())
// n = "11.222"
// console.log(Number.parseInt(n))
// console.log(Number.parseFloat(n))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// string 

// let str = 'This is a string'
// let str1 = "This is also a string"
// let str2 = `This is a string using back tick`

// let str3 = String(123454)  //string constructor
// console.log(str, str1, str2, str3)

// boolean 

// let b1 = true
// let b2 = false
// let b3 = Boolean()
// console.log(b3)
// b3 = Boolean('')
// console.log(b3)
// b3 = Boolean(1)
// console.log(b3)
// b3 = Boolean(0)
// console.log(b3)

// null and undefined 

// let abc
// let x = null
// console.log(abc ,x)

// type conversion 

// let a = 100
// console.log(a)
// console.log(a.toString())
// let b = "101.11"
// console.log(Number.parseInt(b))
// console.log(Number.parseFloat(b))

// console.log(Number('1111'))
// console.log(String(111))

// truthy and falsey 

// falsy - 
// console.log(Boolean())
// console.log(Boolean(''))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(1/0))
// console.log(Boolean(0))


// hexadecimal 

// let x = 0xff;
// let y = 0544;
// console.log(x)
// console.log(y)
// console.log(typeof)


// let a = 5.4001
// let b = 5.6001
// console.log(Math.abs(a))  
// console.log(Math.abs(b))
// console.log(Math.round(a))
// console.log(Math.round(b))
// console.log(Math.floor(a))
// console.log(Math.floor(a))
// console.log(Math.ceil(b))
// console.log(Math.ceil(b))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(9))
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.round(Math.random()*50+1))


// Date

// let date = new Date()
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.getTime())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getTimezoneOffset())
// console.log(date.setHours(10))

// let birthday = date.setDate(1995, 11, 17) 
// console.log(birthday)

// conditional operator 

// let a = 20
// let b = 20

// if(a>b) {
//     console.log("A>B")
// } else if (a<b) {
//     console.log("A<B")
// } else {
//     console.log("They both are same.")
// }

// even odd

// let a = -10

// if(a<=0)
// {
//     console.log("Negative or zero number ditected")
// } else if(a%2==0) {
//     console.log("Entered number is even")
// } else {
//     console.log("Entered number is odd")
// }

// let date = new Date()

// let day = date.getDay()
// switch(day)
// {
//     case 1:
//         console.log("SUN")
//         break
//     case 1:
//         console.log("MON")
//         break
//     case 3:
//         console.log("Hello")
//         break
//     default:
//         console.log("Nothing")
//         break
// }


// && || !

// let a = 1
// let b = 1

// let check = Number((a==1))
// console.log(check)

// https://youtu.be/xUfqVbtNdaM?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1


// ternary operator 

// let num = 201
// let odd_even = num % 2 === 0 ? "EVEN" : "ODD"
// console.log(odd_even) 

// And or shorthand 

// let name = 'Rakib Hasan'
// let fulname = name || "Unknown"
// console.log(fulname)

// let isOk = false
// isOk && console.log("Everything is ok")

// for (let i=1; i<=10; i++)
// {
//     console.log(`${i} * 5 = ${5*i}`)
// }

// https://youtu.be/rZHeuqMFSLA?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1

// for(let i=1; i<=10; i++) {
//     console.log(`${i} * 5 = ${i*5}`)
// }

// let i=1
// while(i<=10) {
//     console.log(`${i} * 5 = ${i*5}`)
//     i++
// }

// let isRunning = true
// while(isRunning) {
//     let rn = Math.round(Math.random()*(10-1)+1)
//     if(rn!==9) {
//         console.log(`${rn} - Winner`)
//     } else
//     {
//         isRunning = false
//     }
// }

// let rn = Math.round(Math.random()*10)
// console.log(rn)

// use of while 

// let isOk = true
// while(isOk) {
//     let rn = Math.round(Math.random()*(10-1)+1)
//     if(rn!=9) {
//         console.log(`Random: ${rn} Winner`)
//     } else {
//         isOk = false
//     }
// }


// do while - will exicute first time whether condition is true or not 

// let isOk = false

// do {
//     console.log("Winner")
// } while(isOk)

/*
print this 
1 
1 2
1 2 3
*/

// for (let i=1; i<=20; i++) {
//     let result = ''
//     for(let j=1; j<=i; j++) {
//         result += j + ' '
//     }
//     console.log(result)
// }

// for(let i=1; i<=10; i++) {
//     let result = ''
//     for(let j=1; j<=20; j++) {
//         result += '* '
//     }
//     console.log(result)
// }

// break 

// for(let i=1; i<10; i++) {
//     if(i%5===0) {
//         break
//     } else {
//         console.log(i)
//     }
// }

// continue 

// for(let i=0; i<10; i++) {
//     if(i==3 || i==7) {
//         continue;
//     } else {
//         console.log(i)
//     }
// } 


// string literal vs string constructor 
// let str = 100
// console.log(str)
// let str1 = String(str)
// console.log(str1)

// https://youtu.be/BQ6fDZS0nFQ?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1

// escape character 

// let nam = 'Hello \'world\''
// nam = 'Hello \tworld'
// nam = 'Hello \nworld'
// console.log(nam)

// string comparison 

// let a = 'a'
// let b = 'a '

// console.log(b>a) // space has a value 

// z>a and Z>A because of ASCII value 


// string method

// let a = 'I am'
// let b = 'Rakib Hasan'
// let c = a.concat(' ', b)
// let d = c.charAt(5)
// let e = c.substr(5, 5)
//console.log(e)

// console.log(c.startsWith('I am'))
// console.log(c.endsWith('Hasan'))

// console.log(c.toUpperCase())
// console.log(c.toLowerCase())

// console.log('    he  hhhh  lll   '.trim())
// console.log(c.split(' '))

// let a = 'Rakib Hasan'
// let length = 0
// while(true) {
//     if(a.charAt(length) == '') {
//         console.log(length)
//         break
//     } else {
//         length++
//     }
// }

// let a = 'Rakib Hasan'
// console.log(a.length)

// https://youtu.be/448YqBQLlOk?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1

// Array

// let arr = [1,2,3,4,5,6,7,8]

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// let arr = [1,2,3,4,5,6,7,8]

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]+2)
// }

// let arr = [1,2,3,4,5,6,7,8]
// let sum = 0
// for(let i=0; i<arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// let arr = [1,2,3,4,5,6,7,8]
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]%2===0) {
//         console.log(arr[i])
//     }
// }

// let arr = [1,2,6,7,8]
// arr.push(90)
// arr.unshift(100)
// console.log(arr)
// arr.splice(1, 2, 100)
// console.log(arr)


// let arr = [1,2,3,4]
// arr.splice(0, 2, 10,20,30)
// console.log(arr)

// let arr = [1,2,3,4,5]
// arr.splice(0, 1)
// console.log(arr)

// let arr = [1,2,3]
// arr.splice(0, 1, 100)
// console.log(arr)

// let arr = [1,2,3,4,5,6,7,8]
// let n = 0
// let search = 8
// for(let i=0; i<arr.length; i++) {
//     if(search===arr[i]) {
//         n = 1;
//         break
//     }
// }
// if(n===1) {
//     console.log("Found")
// } else {
//     console.log("Not Found")
// }


// https://youtu.be/Ei7kbCe8YEw?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1

// two dimentional array

// let arr = [
//     [1,2,3,4],
//     [10,20,30],
//     [40,50]
// ]

// console.log(arr)

// for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr[i].length; j++) {
//         console.log(`Element of ${i} = ${arr[i][j]}`)
//     }
// }

// reverse an array 
// let arr = [1,2,3,4,5]

// for(let i=0; i<(arr.length)/2; i++) {
//     let temp = arr[i]
//     arr[i] = arr[arr.length-1-i]
//     arr[arr.length-1-i] = temp
// }
// console.log(arr)

// let arr = [1,2,3,4,5]
// console.log(arr.reverse())

// array method 

// let arr = [1,2,3,4,5]
// console.log(arr.join(', '))
// console.log(arr.fill("Hello"))

// let arr2 = [10,20,30];
// let arr3 = arr.concat(arr2)
// console.log(arr3)

// console.log(Array.isArray(arr))

// let arr2 = Array.from(arr)
// console.log(arr2)

// let a = [1,2]
// let b = a
// b[0] = 100
// console.log(a)
// let b = Array.from(a)
// b[0] = 100
// console.log(a, b)

// https://youtu.be/bS0hd6plTF4?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1

// let obj = {}
// console.log(typeof obj)

// obj literal
// let point = {
//     x: 10, 
//     y: 20
// }
// point.z = 100
// console.log(point)

// Object constructor
// let obj = Object()
// obj.a = 10
// console.log(obj)

// let obj2 = new Object()
// obj2.b = 100
// console.log(obj2)


// accessing object element 

// let marks = {
//     x: 10,
//     y: 20,
//     z: 30
// }

// console.log(marks.x)
// console.log(marks.y)
// console.log(marks.x + marks.y)
// console.log(marks['x'])
// console.log(marks['y'])

// let show = 'x'
// console.log(marks[show])

// add or replace obj
// let marks = {
//     x: 10,
//     y: 20,
//     z: 30
// }
// console.log(marks)

// marks.x = 33
// marks.a = 40

// let change = 'z'
// marks[change] = -10

// let aaa = 'b'
// marks[aaa] = -111
// console.log(marks)


// remove from object 


// let marks = {
//     x: 10,
//     y: 20,
//     z: 30
// }

// marks['a'] = 13
// console.log(marks)

// delete marks['a']
// delete marks.x
// console.log(marks)


// Object compare 

// let obj1 = {
//     x: 10,
//     y: 20
// }

// let obj2 = {
//     x: 10,
//     y: 20
// }

// if((obj1.x===obj2.x) && (obj1.y===obj2.y)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// console.log(obj1)
// console.log(JSON.stringify(obj1))

// console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

//https://youtu.be/TyMrsaDp5gE?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1


// iterate object properties in JS

// let obj = {
//     x: 10,
//     y: 20,
//     z: 30
// }
// console.log('x' in obj)
// console.log('p' in obj)

// for(i in obj) {
    // console.log(i)
    // console.log(obj[i])
    // console.log(`${i}: ${obj[i]}`)
// }

// let arr = [1,2,1,1,1]
// let ar2 = Array.from(arr)
// ar2[0] = 10
// console.log(arr)
// console.log(ar2)

// let obj = {
//     x: 10,
//     y: 20,
//     z: 30
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// copy an object

// let obj2 = Object.assign(obj)
// obj2.z = 10
// obj['x'] = 50
// console.log(obj2)

// function

// let date = new Date()
// console.log(date.getFullYear())

// function 

// function add(a,b) {
//     let result = a+b
//     console.log(result)
// }

// add(10, 20)

// function sub(a,b) {
//     let result = a - b
//     console.log(result)
// }
// sub(10,20)

// let arr1 = [1,2,3,4,5]
// let arr2 = [2,10,5,7]
// let arr3 = [10,20]

// function sumOfArray(arr) {
//     let sum = 0
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

// to duplicate - Shift + Alt + Down
//62
//https://youtu.be/pQJf2PY-8Ls?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1


// Argument object in javascript 

// function print_num() {
//     for(let i=0; i<arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// print_num(1,2,3,4,5)

// function hello(a,b,c) {
//     console.log(arguments)
// }
// hello(1,2,3)


// add as many number as you want 

// function add() {
//     let sum = 0
//     for(let i=0; i<arguments.length; i++) {
//         sum += arguments[i]
//     }
//     console.log(sum)
// }
// add(1,2,3,4,5)
// add(1,2)

// return 

// function add(a,b) {
//     return a+b
// }

// let sum = add(1,2)
// console.log(sum)

// function person(name, email) {
//     return {
//         name: name,
//         email: email
//     }
// }

// let p1 = person('Rakib', 'rakib.cs132@gmail.com')
// console.log(p1) 

// function expression 

// let add = function(a,b) {
//     return a+b
// }

// let addition = add

// console.log(addition(1,10))


// setTimeout(function() {
//     console.log(`I'll print after 5 sec`)
// }, 5000)

// inner function 

// function sayHi(greet, name) {
//     function getFirstName() {
//         if(name) {
//             return name.split(' ')[0]
//         } else {
//             return 'User'
//         }
//     }
//     console.log(greet, getFirstName())
// }
// sayHi('Good Morning')

// function sayHi(greet, name) {
//     function getFirstName() {
//         if(name) {
//             return name.split(' ')[0]
//         } else {
//             return 'User'
//         }
//     }
//     console.log(greet, getFirstName())
// }
// sayHi('Good Night', 'Rakib Hasan')

// https://youtu.be/y2cT2E2u_Mg

// scope 

// console.log(a)
// let a = 'Hello world'

// console.log(a)


// fun()
// function fun() {
//     console.log("Hello")
// }

// let ac = 'hello'

// function a() {
//     ac = "Inside a"
//     function b() {
//         ac = 'INSIDE b'
//         console.log(ac)
//     }
//     console.log(ac)
//     b()
// }
// console.log(ac)
// a()

// function fun(n) {
//     function a() {
//         return n%3 === 0
//     }
//     function b() {
//         return n%5 === 0
//     }
//     if(a() && b()) {
//         console.log("True")
//     } else {
//         console.log("False")
//     }
// }
// fun(15)


// https://www.youtube.com/watch?v=mSESQG-ek8I&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=68&ab_channel=StackLearner

// https://www.youtube.com/watch?v=pOcNXZlhhMU&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=69


// Pure function

/*
It'll return the same result if the same argument is given.
It does not cause any observeable side effects.
*/

// function sq(n) {
//     return n*n
// }

// console.log(5)

// let n = 100
// function change() {
//     n = 10
// }

// console.log(n)
// change()
// console.log(n)

// let point = {
//     x: 10,
//     y: 20
// }

// function change(point) {
//     point.x = 100
//     point.y = 200
// }
// console.log(point)
// change(point)
// console.log(point)

// first class function

// function add(x, y) {
//     return x+y
// }
// 1. function can be stored in a variable 
// let sum = add
// console.log(typeof sum)
// console.log(sum(1,2))

// 2. function can be stored in an array

// let arr = []
// arr.push(add)
// console.log(arr)
// console.log(typeof arr[0])
// console.log(arr[0](1,3))

// 3. Function can be stored in an object

// let obj = {
//     Obj_add: add
// }

// console.log(obj)
// console.log(typeof obj.Obj_add)
// console.log(obj.Obj_add(2,3))

// 4. we can create function as need

// setTimeout(function() {
//     console.log("Hello ")
// },2000)

// higher order function 

// 1. pass function as argument 
// 2. return function from a function 

// function add(a,b) {
//     return a+b
// }

// function multiply(a, b, sum) {
//     let c = sum(a,b)
//     let d = a - b
//     return function() {
//         return c*d*sum(a,b)
//     }
// }

// let rs = multiply(3,4,add)
// console.log(rs())

// closure 

// function c() {
//     var x = 5
//     return function() {
//         console.log(x)
//     }
// }
// var abc = c()
// console.dir(abc)

// callback function

// function sample(a, b, cb) {
//     let c = a+b
//     let d = a-b
//     let result = cb(c,d)
//     return result
// }
// function add(a,b) {
//     return a+b
// }
// let res = sample(5,4,add)
// console.log(res)
// let res1 = sample(5,4, function(a,b) {
//     return a+b
// })
// console.log(res1)

// let res2 = sample(5,4, function(a,b) {
//     return a*b
// })
// console.log(res2 )
// let res3 = sample(5,4,function(a,b) {
//     return a/b
// })
// console.log(res3)


// https://www.youtube.com/watch?v=1mItbWuvrMw&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=74


// for each 

// let arr= [1,2,3,4,5]
// arr.forEach(function(value, index, array) {
//     console.log(value, index, array)
// })

// let sum = 0
// arr.forEach(function(value, index, array) {
//     sum+=value
// })
// console.log(sum)

//for each implementation 

// function forEach(arr, cb) {
//     for(let i=0; i<arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// let sum=0
// forEach(arr, function(value, index, array) {
//      console.log(value, index, array)
//     //sum+=value
// })

// forEach(arr, function(value, index, array) {
//     arr[index] = value + 5
// })
// console.log(arr)

// map function

// let arr = [1,2,3]

// let sqr = arr.map(function(value) {
//     return value * value
// })
// console.log(arr)
// console.log(sqr)

// function myMap(arr, cb) {
//     let newArr = []
//     for(let i=0; i<arr.length; i++) {
//         let temp = cb(arr[i])
//         newArr.push(temp)
//     }
//     return newArr
// }
// let sq = myMap(arr, function(value) {
//     return value * value 
// })
// console.log(arr)
// console.log(sq)

// filter 

// let arr = [1,2,3,4,5,6,7,8,9]

// let ev = arr.filter(function(value) {
//     return value%2===0
// })
// console.log(ev)

// let odd = arr.filter(function(value) {
//     return value%2===1
// })
// console.log(odd)

// function myFilter(arr, cb) {
//     let newArr = []
//     for(let i=0; i<arr.length; i++) {
//         if(cb(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(myFilter(arr, function(value) {
//      return value % 2 == 0
// }))

// console.log(myFilter(arr, function(value) {
//     return value %2 ==1
// }))


// https://www.youtube.com/watch?v=YAvJVcVKwu8&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=77&ab_channel=StackLearner


// reduce 

// let arr1 = [1,2,3,4,5]
// let sum = arr1.reduce(function(prev, curr) {
//     return prev+curr
// })
// console.log(sum)

// let max = arr1.reduce(function(prev, curr) {
//     return Math.max(curr,prev)
// })
// console.log(max)

// let arr1 = [1, 2, 3, 4, 5]

// let min = arr1.reduce(function(prev, curr) {
//     return Math.min(prev, curr)
// })
// console.log(min)


// reduce 

// let arr = [1, 2, 3, 4, 5]

// let res = arr.reduce(function(prev, curr) {
//     return prev + curr
// })

// console.log(res)

// let max = arr.reduce(function(prev, curr) {
//     return Math.max(prev, curr)
// })

// console.log(max)

// let min = arr.reduce(function(prev, curr) {
//     return Math.min(prev, curr)
// })
// console.log(min)

// implementation of reduce 

// let arr = [1,2,3,4,5]
// function myReduce(arr, cb, acc) {
//     for(let i=0; i<arr.length; i++) {
//         acc = cb(acc, arr[i])
//     }
//     return acc
// }

// let sum = myReduce(arr, function(prev, curr) {
//     return prev+curr
// }, 0)

// let max = myReduce(arr, function(prev, curr) {
//     return Math.max(prev,curr)
// }, arr[0])

// let min = myReduce(arr, function(prev, curr) {
//     return Math.min(prev, curr)
// }, arr[0])

// console.log(sum, max, min)


// find and find index

// let arr = [1,2,3,4,5,6,7,8]

// let r = arr.find(function(value) {
//     return value === 8
// })

// console.log(r)

// let r = arr.findIndex(function(value) {
//     return value == 3
// })
// console.log(r)

// function myFind(arr, cb) {
//     for(let i=0; i<arr.length; i++) {
//         if(cb(arr[i])) {
//             return arr[i]
//         }
//     }
// }

// let r = myFind(arr, function(value) {
//     return value === 80
// })

// console.log(r)

// function myFindIndex(arr, cb) {
//     for(let i=0; i<arr.length; i++) {
//         if(cb(arr[i])) {
//             return i
//         }
//     }
// }

// let r = myFindIndex(arr, function(value) {
//     return value === 1
// })

// console.log(r)


// https://www.youtube.com/watch?v=IHjLft2UU_g&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=79&ab_channel=StackLearner


// sort some and every

// let arr = [-1,2,1,7,3,-8,0,356,84,100]
// let arr1 = arr
// assending order 
// arr.sort(function(a,b) {
//     if(a>b) {
//         return 1
//     } else if(a<b) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(arr)

// descending order 
// arr1.sort(function(a,b) {
//     if(a>b) {
//         return -1
//     } else if(a<b) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(arr1)

// let arr = [
//     {Obj: 1, name: "A"},
//     {Obj: 2, name: "C"},
//     {Obj: 3, name: "B"},
//     {Obj: -1, name: "Z"}
// ] 

// arr.sort(function(a,b) {
//     if(a.Obj>b.Obj) {
//         return 1
//     } else if(a.Obj<b.Obj) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log(arr)

// arr.sort(function(a,b) {
//     if(a.Obj>b.Obj) {
//         return -1
//     } else if(a.Obj<b.Obj) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(arr) 


// some every 

// let arr = [0,1,2,3,4,5,6,7,8]

// let res1 = arr.every(function(value) {
//     return value % 2 === 0
// })

// let res1 = arr.some(function(value) {
//     return value % 2 === 0 
// })
// console.log(res1)

// let res1 = arr.some(function(value) {
//     return value % 2 === 0
// })

// let res2 = arr.every(function(value) {
//     return value % 2 === 0
// })

// console.log(res1, res2)


// return function

// function greet(greetings) {
//     function name(pass_name) {
//         return `${greetings}, ${pass_name}!`
//     }
//     return name
// }

// let name = greet("Good Morning")
// console.log(name("Rakib Hasan"))




// function base(b) {
//     return function(n) {
//         let res = 1
//         for(let i=0; i<b; i++) {
//             res *= n
//         }
//         return res
//     }
// }

// let base10 = base(10)
// let base5 = base(5)
// let base2 = base(2)

// console.log(base5(2))

// https://www.youtube.com/watch?v=5eMlqhgb6i0&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=81&ab_channel=StackLearner


// recursion 

// function print(n) {
//     if (n===0) {
//         return
//     }
//     print(n-1)
//     console.log(`Hello - ${n}`)
// }
// print(10)

// function fact(n) {
//     if(n===1) {
//         return 1
//     }
//     return n * fact(n-1)
// }
// let res = fact(5)
// console.log(res)

// let arr = [1,2,3,4,5]
// function sumOfArray(arr, lastIndex) {
//     if(lastIndex<0) {
//         return 0
//     }
//     return arr[lastIndex] + sumOfArray(arr, lastIndex-1)
// }

// let res = sumOfArray(arr, arr.length-1)
// console.log(res)

// carrying in javascript 

// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }

// }

// let res = add(5)(5)(5)
// console.log(res)

// function composition 

// function print(n) {
//     console.log(n)
// }

// function multiplyBy5(n) {
//     return n * 5
// }

// function add(a,b) {
//     return a+b
// }

// print(multiplyBy5(add(1,2)))

// https://www.youtube.com/watch?v=33HALfGri7Q&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=85