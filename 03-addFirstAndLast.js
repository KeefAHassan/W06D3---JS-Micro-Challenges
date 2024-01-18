// Create a function that takes in an array of numbers.
// Your function should return the sum of the first and last
// numbers from the array.

// Examples:

// addFirstAndLast([3, 2, 6])
//     should evaluate to 9

// addFirstAndLast([-9, 12, 33, 29])
//     should evaluate to 20


function addFirstAndLast(numArray) {
  const firstNumber = numArray[0]
  const lastNumber = numArray[numArray.length-1]
  let sum = firstNumber + lastNumber;
  return sum
}

try {
  module.exports = addFirstAndLast;
} catch (err) {
  // do nothing...
}