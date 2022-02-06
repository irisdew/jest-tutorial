const { expect } = require("@jest/globals");

const fn = {
  add: (num1, num2) => num1 + num2,
  connectUserDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  connectCarDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        setTimeout(() => {
          res();
        });
      }, 500);
    });
  },
};

// test.skip
test.skip("0 더하기 5는 5", () => {
  expect(fn.add(0, 5)).toBe(5);
});

module.exports = fn;
