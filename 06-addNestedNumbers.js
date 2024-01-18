// Create a function that takes in an array of arrays. Like so:
  // [
  //   [1, 5],
  //   [2],
  //   [5, 10, 3]
  // ]

// Your function must add up all of the numbers in all of the 
// arrays and return the value.

// Examples:
// let nestedNumbers = [
//   [1, 5],
//   [2],
//   [5, 10, 3]
// ]

// addNestedNumbers()
//     should evaluate to 26


function addNestedNumbers(nestedNumbers) {
  let sum = 0;
  for (let index = 0; index < nestedNumbers.length; index++) {
    const innerloop = nestedNumbers[index];
    for (let j = 0; j < innerloop.length; j++) {
      const element = innerloop[j];
      sum = sum + element
    }
    
  }
  return sum;
}

try {
  module.exports = addNestedNumbers;
} catch (err) {
  // do nothing...
}
