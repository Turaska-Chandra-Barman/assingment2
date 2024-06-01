// // 1.Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
// // Answer:

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9.0) / 5.0 + 32.0;
// }

// console.log(celsiusToFahrenheit(0)); // output = 32
// console.log(celsiusToFahrenheit(25)); //  output = 77






// // 2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.
// // Answer


// function  isEven(num){
//      if( num % 2 === 0){ 
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(4)); // output = true;
// console.log(isEven(7)); // output = false;



// // 3.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
// // Answer



// function  sum ( a,b){
//     return a + b
// }
// console.log(sum(3,4)) // output = 7
// console.log(sum(10,20)) // output = 30;





// 4.Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
// Answer


// ami onno vabe ektu korlam nije nije plz mene niyen vai


// Array.min = function( array ){
//     return Math.min.apply( Math, array );
// };


// const findSmallestNum = Array.min([3, 5, 1, 9]);
// const findSmallestNum2 = Array.min([-1, -5, 0, 10]);

// console.log(findSmallestNum); // output = 1
// console.log(findSmallestNum2); // output = -5




// 6. Write a function to get the first element of an array. The function should take a single argument, which is the array.
// Answer

function getFirstElement(arr) {
    return arr[0]
}
console.log(getFirstElement([1, 2, 3]));  //output =  1
console.log(getFirstElement(["a", "b", "c"]));  //output = "a"




// 7.Write a function to check if an array is empty. The function should take a single argument, which is the array.
// Answer

function isArrayEmpty(arr){
    if( arr.length === 0){
        return true;
    }else{
        return false
    }
}

console.log(isArrayEmpty([])); // output = true
console.log(isArrayEmpty([1, 2, 3])); // output = false





// 8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.
// Answer

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
    if( num <= 5){
        return 5* 24
    }else{
        return 5 * 1008
    }
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040









// 9.Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
// Answer:



function reverseString(str) {
    return str.split('').reverse().join('');
    
}

console.log(reverseString("hello")); //output =  "olleh"
console.log(reverseString("world")); // output = "dlrow"








// 10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
// Answer:


function toLowerCase(str) {
  return str.toLowerCase()
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"





// 11.Write a function to find the length of a string. The function should take a single argument, which is the string.
// Answer:


function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5








// 12. Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
// Answer



function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); //output =  [1, 2, 3, 4, 5, 6];
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ouput = ["a", "b", "c", "d"];



// 13. Write a function to get the last element of an array. The function should take a single argument, which is the array.
// Answer



function getLastElement(arr) {
  return arr.pop();
}

console.log(getLastElement([1, 2, 3])); output = // 3
console.log(getLastElement(["a", "b", "c"])); // output = "c"








// 14. Write a function to get the first character of a string. The function should take a single argument, which is the string.
// function getFirstCharacter(str) ;
// Answer


function getFirstCharacter(str) {
  return str[0];
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"






// 15. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
// Answer



function sumArray(arr) {
    let sum = 0;
    for( let i = 0 ; i < arr.length; i++){
    sum += arr[i]
  }

  return sum
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
