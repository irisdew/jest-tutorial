const { expect } = require("@jest/globals");
const fn = require("./fn");

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});

test("서버 에러?", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }
  fn.throwErr(callback);
});

// Promise
test("3초 후에 받아온 나이는 20", () => {
  // Promise를 사용할 때는 return 필수!
  return fn.getAge().then((age) => {
    expect(age).toBe(20);
  });
});

// resolves, rejects
test("3초 후에 받아온 나이는 20 - resolves", () => {
  return expect(fn.getAge()).resolves.toBe(20);
});

test("3초 후에 받아온 나이는 20 - rejects", () => {
  return expect(fn.throwErrPromise()).rejects.toMatch("error");
});
