// mock function

const mockFn = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    // 여기에 들어갈 임의의 함수를 작성하지 말고, 빠르고 간단하게 mock 함수 만들기
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});
test("함수의 return으로 전달된 값은 11, 21, 31입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});
