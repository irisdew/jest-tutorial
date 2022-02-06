const fn = require("./fn");

let user;

// 각 테스트마다 실행되지 않고 모든 테스트 진행 전/후로 1번만 실행
beforeAll(async () => {
  user = await fn.connectUserDB();
});
afterAll(() => {
  return fn.disconnectDB();
});

test("유저 이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});
test("유저 나이는 30", () => {
  expect(user.age).toBe(30);
});
