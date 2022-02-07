const fn = require("./fn");

// test는 통과하지만 실제로 유저가 생성되어버림!
test("유저를 만든다", () => {
  const user = fn.createUser("Monika");
  expect(user.name).toBe("Monika");
});
