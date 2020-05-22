// let arr = [];

// arr.push(5);
// arr.push(6);
// let a = arr.pop(); // lay phan tu cuoi cung
// arr.unshift(12); // them vao dau
// //console.log(a);
// console.log(arr);
// let b = arr.shift() // lay phan tu dau tien
// console.log(b);

// let arr = [];
// do{
// let name = prompt("Nhap ten:");
// let age = prompt("Nhap tuoi:");
// let student ={
//   Name: name,
//   Age: age
// };
// arr.push(student);
// }
// while(confirm("Nhap Nua hay thoi:"));
// console.log(arr);

//let arr = [4,5,6,7,8,9];
// arr.splice(1,1);// xóa 1 phần tử ở vị trí số 1
// arr.splice(1,0,69,70) // Thêm phần tử 69,70 vào vị trí 1,2
// console.log(arr);
//console.log(arr.join("-")) // thêm kí tự vào giữa các giá trị

//  let arr1 =[1,2,3];
//  let arr2 = [4,5,6];
//  console.log(arr1.concat(arr2)) // Nối hai mảng lại

// let arr1 = [5,9,84,3,1]
// //console.log(arr1.sort()) // sắp xếp kiểu 1,xxx 2,xxx
// console.log(arr1.sort(function(a,b)
// {
//   return a-b; // thấy không đúng ý thì đổi lại thành b-a
// }));

// let arr = [1,2,9,6,9];
// //console.log(Math.random())
// console.log(arr.sort(function(a,b){return 0.5 - Math.random()}))

let arr23 = [1, 8, 5, 1, 7]
arr23.forEach(function(value) {
  console.log(value)
});

// arr.forEach((value,index) => {console.log(value);});

// let arr2 = arr.map((i) => {
//   return i + 1;
// }); // value chứa giá trị, index chứa vị trí 
// // hai cái chỉ là biến :D
// console.log(arr2);

let arrname = [
  {
    Name: "Cuong",
    Age: 15
  },
  {
    Name: "Ha",
    Age: 19
  },
];

let arrname2 = arrname.filter((value, index) => {
  return value.Age > 16;
});
//console.log(arrname2)

//filter tìm ra các phần tử thỏa mãn điều kiện
// find tìm ra phần tử đầu tiên thỏa mãn điều kiện
let arrname3 = arrname.find((value, index) => {
  return value.Age > 14
});
console.log(arrname3)
//findIndex là tìm ra vị trí của nó
//indexof()
let arr = [1, 2, 8, 4, 7, 6, 7]
console.log(arr.indexOf(7)) // tìm ra vị trí
console.log(arr.indexOf(7))

console.log(arr.some((value) => {
  return value > 5;
}));
console.log(arr.every((value) => {
  return value > 5
}))

let arrt = [4, 6, 7, 6]
// let sum=0;
// arrt.forEach((value)=>{
//   console.log(value);
// });
// //console.log(sum)

// có thể dùng function hoặc =>
let sum1 = arrt.reduce(function(tong, value, index) {console.log(value+"**");
console.log(tong +"Tong Day")
  return tong + value;
}, 0 /* giá trị đầu tiên của biến tong*/ )
console.log(sum1)

let arr3 = arrt.map((value) => {
  return value * 2
})
console.log(arr3)
// {} là một object rỗng, để kha báo
let ten = [
  {
    Name: "Cuong",
    Age: 12
  },
  {
    Name: "Ha",
    Age: 15
  },
  {
    Name: "Ha11",
    Age: 11
  },
];
let tenGiaNhat = ten.reduce((oldest, value, index) => {
  console.log(oldest)
  if (oldest.Age > value.Age) {return oldest } else { return value }
}, {})
//console.log(tenGiaNhat)