// mock function

const mockFn = jest.fn((num) => num + 1);

// 매번 다른 값을 return 해주는 mock 함수
mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
  // [
  //   { type: "return", value: 10 },
  //   { type: "return", value: 20 },
  //   { type: "return", value: 30 },
  //   { type: "return", value: 40 },
  //   { type: "return", value: 40 },
  // ];
  expect("dd").toBe("dd");
});
