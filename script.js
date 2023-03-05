"use strict";

//   ამოცანა 1.

// function sum(...numbers) {
//   let x = 0;
//   for (let item of numbers) {
//     if (item > 0) {
//       x = x + item;
//     }
//   }
//   console.log(x);
// }

// let y = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// ამოცანა 2.

// function sum(...numbers) {
//     let num3 = 0;
//     for (let item of numbers) {
//       // num3 = num3 + item;
//       num3 += item
//     }
//     return num3;
//   }

//   let resultSum = sum (10, 50, 6, 7, 8, 11, 6, 3, 9);
//   console.log(resultSum);

// ამოცანა 3.

// let user = {
//   firstname: "giorgi",
//   lastname: "saakadze",
//   age: 32,
//   isloggedin: true,
// };

// function printName(user) {
//   if (user.isloggedin) {
//     // return user.firstname + " " + user.lastname;
//     return `${user.firstname} ${user.lastname}`;
//   }
// }

// let resultFunction = printName(user);
// console.log(resultFunction);

// ამოცანა 4.

// function maxNumber() {
//   let max = 0;
//   for (let item of arguments) {
//     if (item > max) {
//       max = item;
//     }
//   }
//   return max;
// }

// let largest = maxNumber (10, 20, 30, 40, 50)
// console.log(largest);

// function maxNumber(...numbers) {
//   let x = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > x) {
//       x = numbers[i];
//     }
//   }
//   return x;
// }

// let y = maxNumber(10, 80, 2, 600)
// console.log(y);

// function maxValue(...numbers){
//     console.log(Math.max(20, 60, 80));
// }
// maxValue(20, 60, 80)

// ამოცანა 5.

// function number(x){
//     if (x % 2 == 0 ){
//         return "Even"
//     }
//     return "Odd"
// }

// let result = number(10)
// console.log(result);

// ამოცანა 6.

// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

// array.forEach(function(item){
//     if(item.length > 4 && item.includes("av")){
//         console.log(item);
//     }
// })

// ამოცანა 7.
// let array = [1, 2, 3, 4, 5];
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// ამოცანა 8.

// let age = (birthYear, YearNow) => {
//   let userAge = YearNow - birthYear;
  
// let result = userAge > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
// return result;
// };

// let resultFunc = age(1991, 2023);
// console.log(resultFunc);
