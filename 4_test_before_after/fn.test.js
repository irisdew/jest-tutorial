const fn = require("./fn");

describe("User DB 관련 작업", () => {
  let user;

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
});

describe("Car DB 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await fn.connectCarDB();
  });
  afterAll(() => {
    return fn.disconnectDB();
  });

  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });
  test("빨강색", () => {
    expect(car.color).toBe("red");
  });
});
