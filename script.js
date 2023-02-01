// Intro
// Write a function greet that takes in a string argument, s, and returns the string "hey s". No tricks here. Run the tests to check your work.

// const greet = (s) => {
//   return 'hey' + ' ' + s
// };

// console.log(greet('Christian'))

// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

// const maxValue = (nums) => {
//   let maxVal = nums[0]
//   for(let i = 1; i < nums.length; i++){
//     if(nums[i] > maxVal){
//       maxVal = nums[i]
//     }
//   }
//   return maxVal
// };


// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// const isPrime = (n) => {
//   if(n < 2) return false
//   for(let i = 2; i < n; i++){
//     if(n % i === 0){
//       return false
//     }
//   }
//  return true
// };

// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:


// const uncompress = (s) => {
//   let newString = []
//   let i = 0;
//   let j = 0;
//   let numbers = '0123456789'
//   while(j < s.length){
//     if(numbers.includes(s[j])){
//       j++
//     }else {
// //       if it includes a character that is not a number, take the number that precedes the non-digit character
//       let number = s.slice(i, j)
//       for(let count = 0; count < number; count++){
//         newString.push(s[j])
//       }
//     j++
//     i = j
//     }
  
//   }
//   return newString.join('')
// };


// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.


// const compress = (s) => {
//   let firstPointer = 0
//   let secondPointer = 0
//   let newArr = []
//   while(firstPointer <= s.length){
//     if(s[firstPointer] === s[secondPointer]){
//       firstPointer++
//     }else {
//       const num = firstPointer - secondPointer
//       if(num === 1){
//         newArr.push(s[secondPointer])
//       }else {
//         newArr.push(String(num), s[secondPointer])
//       }
//       secondPointer = firstPointer
//     }
   
//   }
  
//   return console.log(newArr.join(''))
// };

// compress('ccaaatsss')

