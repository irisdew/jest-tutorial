// mock function

const mockFn = jest.fn();

mockFn();
mockFn(1);

test("dd", () => {
  console.log(mockFn.mock.calls); // [ [], [ 1 ] ]
  expect("dd").toBe("dd");
});
