const fn = require("./fn");

let num = 10;

// 각 테스트 직전에 실행
afterEach(() => {
  num = 0;
});

test("0 더하기 1은 1이다.", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이다.", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이다.", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});
