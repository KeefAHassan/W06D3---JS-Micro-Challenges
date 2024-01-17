const compareTwoNumbers = require('../02-compareTwoNumbers.js');


test('compares 3 and 2', () => {
  expect(compareTwoNumbers(3, 2)).toBe("The first number was bigger!");
});

test('compares 2 and 7', () => {
  expect(compareTwoNumbers(2, 7)).toBe("The second number was bigger!");
});

test('compares 7 and 7', () => {
  expect(compareTwoNumbers(7, 7)).toBe("The numbers are the same!");
});
