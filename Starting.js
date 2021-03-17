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