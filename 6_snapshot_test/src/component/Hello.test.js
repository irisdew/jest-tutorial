import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 20,
};

const userWithoutName = {
  age: 20,
};

test("Hello라는 글자가 포함?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});

test("snapshot: name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot: name 없음", () => {
  const el = render(<Hello user={userWithoutName} />);
  expect(el).toMatchSnapshot();
});
