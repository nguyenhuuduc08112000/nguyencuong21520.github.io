//  1. Boolean
let b1 = true;
let b2 = false;
let x;
// x false: null, undefined,NaN, 0 , '',false;
// x true : else false;
if (x) {

}

//2.String
// ""  ''  ``

let name = 'Linh'
let message = `Hello ${name}` // message = 'Hello Linh'

let str = 'Abc'
str.length //3;
tr.toLowerCase() //'abc';
str.toUpperCase() //'ABC';

let str2 = 'ab c d e'
str2.trim() //'ab c d e'
str2.trim().split(' ') // ['ab','c','d','e']
str2.trim().split('') // tự tìm Hiểu

let str3 = `Hello i'm Cuong`
str3.startsWith('Hello') //true;
str3.endsWith('dcm') //false
str3.includes('l') // true


// regex ~ regular expression
let regex = /linh/gi;
let strs = ['Nam', 'Cuong', 'Huy', 'Ha']
for (let str of strs) {
    console.log(str, regex.test(str))
}
// 3.Number
parseInt('12.1') // 12
parseInt(12) // 12
pareseFloat('12.1') // 12.1
Math.sqrt(2)
Math.pow(2, 5)
Math.sin(Math.PI / 2)

Math.floor(10.5) // 10
Math.ceil(10.5) //11
//4. Class, Object
//Date vài ví dụ
let date1 = new Date()
let date2 = new Date('2019-05-21')

date1.toISOStirng();
//Error đây chỉ là vài ví dụ thôi
let err1 = new Error()
let err2 = new Error('hello')

err1.message
err1.name
err1.stack
err1.toString()

//5. Array
let arr = [2, 1, 5, 6]
arr.length //trả về số phần tử trong mảng
arr.push(0) // [2,1,5,6,0] thêm phần tử 0 và đít của mảng
arr.pop() //[2,1,5,6] xóa phần tử ở đít của mảng

arr.unshift(0) //[0,2,1,5,6] thêm phần tử 0 vào đầu mảng
arr.shift() //[2,1,5,6] xóa phần tử ở đầu mảng

arr.splice(2, 1) //[2,1,6] xóa 1 phần tử từ vị trí số 2
arr.splice(2, 0, 4) //[2,1,4,5,6] chèn phần tử 4 vào vị trí số 2 và k xóa phần tử nào

let arr5 = [1, 2, 3, 4]
//xet xem co phan tu nao o trong mang k
arr5.includes(3) //true
arr5.includes(10) //false

//tim vi tri
arr5.indexOf(1) //0
arr5.indexOf(2) //1

//loc mang
let filteredArray = arr5.filter(function (element) {
    return element > 1 // tra ve ca so >1
})
//filteredArray = [2,3,4]

// biến đổi mảng 

arr = [1,2,3] 

arr.map(function(element){
    return element * 2
}) // => [2,4,6]

//find
arr = [1,2,4,5,7]
let evenNumber = arr.find(function(element){
    return element % 2 ==0
}) //evenNumber = 2

//findIndex
let evenNumberIndex = arr.findIndex(function(element){
    return element % 2 ==0
}) //evenNumberIndex = 1

arr = [2,1,3]
arr.sort() //[1,2,3]
arr.sort(function(element1, element2){
    return element1 - element2 
}) // => [1,2,3]
arr.sort(function(element1, element2){
    return element2 - element1 
}) // => [3,2,1]



// 6. ES6  -- Các cú pháp trong js mới
// key word "es6 new features"

//arrow function
function sum(a,b){
    return a+b
}

const sum2 = (a,b) => (a + b)  // sum và sum2 là như nhau, chỉ là cách viết khác thui
