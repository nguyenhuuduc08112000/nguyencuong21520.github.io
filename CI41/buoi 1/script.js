console.log('hello Word')
// các cái sẽ học
// 1. khai báo biến let/var/const
let message = 'Hellooooooo'
console.log(message)
let number = 1
number = number + 1
let number2 = 1.2
console.log(number)
// 1.2 khai baso hàm
function sum(a, b) {
    return a + b
} // khai báo ở dưới cùng cx đc
console.log(sum(2, 3))
// 2. câu lệnh điều kiện(if/else- switch/case)
// false = 0,null,undefined,NaN,false (JS tính những cái đấy là false)
// true =! false (trg hợp còn lại là true)
let name = "Nguyen Van Cuong"
if (name.length > 20) {
    console.log('name too long', name)
} else {
    console.log('name vua day', name)
}
if (0)
    console.log('not run')
if (1)
    console.log('run')
let input = ''
if (input)
    console.log('nhap gi day')
else
    console.log(' k nhap gi')
let count = 1
switch (count) {
    case 1: {
        console.log('count = 1')
        break
    }
    case 2: {
        console.log('count = 2')
        break
    }
}
// 3.vòng lặp(for, while, do/while)
let arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    console.log(number)
}
for (let number of arr) {
    console.log(number)
}