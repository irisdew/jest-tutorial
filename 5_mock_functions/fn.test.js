const fn = require("./fn");

jest.mock("./fn");
// jest.mock으로 fn 모듈을 mocking 모듈로 만들어줌

fn.createUser.mockReturnValue({ name: "Monika" });

test("유저를 만든다", () => {
  const user = fn.createUser("Monika");
  expect(user.name).toBe("Monika");
});
// test 통과
// 실제로 유저가 생성되지 않음 = 실제 createUser 함수가 실행되지 않음
