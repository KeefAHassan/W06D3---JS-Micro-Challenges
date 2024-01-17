const returnBearInfo = require('../00-example.js');


test('returns "Bears are good."', () => {
  expect(returnBearInfo()).toBe("Bears are good.");
});
