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

test("이름, 나이를 입력하면 객체를 반환해줘 - toBe", () => {
  expect(fn.makeUser("Mike", 30)).toBe({ name: "Mike", age: 30 });
});

test("이름, 나이를 입력하면 객체를 반환해줘 - toStrictEqaul", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({ name: "Mike", age: 30 });
});

test("이름, 나이를 입력하면 객체를 반환해줘 - toEqaul", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({ name: "Mike", age: 30 });
});
