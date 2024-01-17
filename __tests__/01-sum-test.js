const sum = require('../01-sum.js');


test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('adds 2 + 7 to equal 9', () => {
  expect(sum(2, 7)).toBe(9);
});
