// mock function

const mockFn = jest.fn();

// mockResolvedValue : 비동기 함수 흉내
mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
