// Intro
// Write a function greet that takes in a string argument, s, and returns the string "hey s". No tricks here. Run the tests to check your work.

// const greet = (s) => {
//   return 'hey' + ' ' + s
// };

// console.log(greet('Christian'))

// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {
  let maxVal = nums[0]
  for(let i = 1; i < nums.length; i++){
    if(nums[i] > maxVal){
      maxVal = nums[i]
    }
  }
  return maxVal
};
