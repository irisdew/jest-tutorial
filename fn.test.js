const fn = require("./fn.js");

test("1은 1이다", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5다", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니다", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
