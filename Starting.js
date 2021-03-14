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
let str = 100
console.log(str)
let str1 = String(str)
console.log(str1)

// https://youtu.be/BQ6fDZS0nFQ?list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1