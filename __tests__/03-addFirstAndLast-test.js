const addFirstAndLast = require('../03-addFirstAndLast.js');


test('solves [3, 2, 6]', () => {
  expect(addFirstAndLast([3, 2, 6])).toBe(9);
});

test('solves [-9, 12, 33, 29]', () => {
  expect(addFirstAndLast([-9, 12, 33, 29])).toBe(20);
});
