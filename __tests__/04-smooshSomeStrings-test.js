const smooshSomeStrings = require('../04-smooshSomeStrings.js');


test('smooshSomeStrings(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3) evaluates to "HiThere!"', () => {
  expect(smooshSomeStrings(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3)).toBe("HiThere!");
});

test('smooshSomeStrings(["Turtle", "dolphin", "Boop", "Beep", "Boop"], 1) evaluates to "dolphinBoopBeepBoop"', () => {
  expect(smooshSomeStrings(["Turtle", "dolphin", "Boop", "Beep", "Boop"], 1)).toBe("dolphinBoopBeepBoop");
});
