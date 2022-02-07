// mock function

const mockFn = jest.fn();

// 홀수만 반환해주는 callback 함수가 필요함
// 이 callback 함수를 짜기 귀찮다면? => mock function 사용
// [1, 2, 3, 4, 5].filter((num) => callback(num));

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

console.log(result);

test("홀수는 1, 3, 5", () => {
  expect(result).toStrictEqual([1, 3, 5]); // 배열을 확인할 때는 toBe가 아니라 toStrictEqual을 사용해야함
});
