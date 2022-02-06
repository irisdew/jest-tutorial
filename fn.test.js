const { expect } = require("@jest/globals");
const fn = require("./fn.js");

test("1은 1이다", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5다", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("3 더하기 3은 5가 아니다", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

// test("이름, 나이를 입력하면 객체를 반환해줘 - toBe", () => {
//   expect(fn.makeUser("Mike", 30)).toBe({ name: "Mike", age: 30 });
// });

// test("이름, 나이를 입력하면 객체를 반환해줘 - toStrictEqaul", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({ name: "Mike", age: 30 });
// });

test("이름, 나이를 입력하면 객체를 반환해줘 - toEqaul", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});

// toBeNull
// toBeUndefined
// toBeDefined

test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

test("0은 false 입니다", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 true 입니다", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan
// toBeGreaterThanOrEqaul
// toBeLessThan
// toBeLessThanOrEqaul

test("id는 10자 이하여야 합니다", () => {
  const id = "The_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// // 자바스크립트는 소수 계산을 정확히 하지 못한다.
// test("0.1 더하기 0.2는 0.3 입니다", () => {
//   expect(fn.add(0.1, 0.2)).toBe(0.3);
// });

// 값이 근사치인지 판별
test("0.1 더하기 0.2는 0.3 입니다", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 정규표현식
test("Hello World에 H라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/H/);
});

test("Hello World에 h가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContain 배열
test("고객명단에 Mike가 있나?", () => {
  const user = "Mike";
  const customers = ["Mike", "John", "Amy"];
  expect(customers).toContain(user);
});
