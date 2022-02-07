// mock function

const mockFn = jest.fn((num) => num + 1);
// jest.fn 의 첫번째 인수로 함수를 전달

mockFn(10);
mockFn(20);
mockFn(30);

test("함수 호출은 3번 됩니다.", () => {
  console.log(mockFn.mock.results);
  /*
  [
    { type: "return", value: 11 },
    { type: "return", value: 21 },
    { type: "return", value: 31 },
  ];
  */
  expect(mockFn.mock.calls.length).toBe(3);
});
