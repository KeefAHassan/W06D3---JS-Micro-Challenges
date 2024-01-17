const addNestedNumbers = require('../06-addNestedNumbers.js');


test('it calculates [[1, 5], [2], [5, 10, 3]] to be 26', () => {
  let nestedTestNumbers = [
    [1, 5],
    [2],
    [5, 10, 3]
  ];

  expect(addNestedNumbers(nestedTestNumbers)).toBe(26);
});
