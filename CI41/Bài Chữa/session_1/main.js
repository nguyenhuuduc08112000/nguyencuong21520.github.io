// 1. Khai bao bien ham
// let, const

let number = 1
let number2 = 2

console.log(sum(number, number2))
function sum(a, b) {
  return a + b
}

// 2. Su dung if/else switch/case
// false ~ 0, '', null, undefined, NaN, false
// true ~ else
let name = "Nguyen The Linh"
if(name.length > 20) {
  console.log('name too long!', name)
} else {
  console.log('valid name!', name)
}

let input = ''
if(input) {
  console.log('valid input!')
} else {
  console.log('invalid input')
}

let count = 1
switch(count) {
  case 1: {
    console.log('count = 1')
    break
  }
  case 2: {
    console.log('count = 2')
    break
  }
}
// 3. Vong lap (for, while, do/while)

let arr = [1, 2, 3]
for(let i = 0; i < arr.length; i++) {
  let number = arr[i]
  console.log(number)
}

for(let number of arr) {
  console.log(number)
}

let i = 0
while(i < arr.length) {
  let number = arr[i]
  console.log(number)
  i++
}