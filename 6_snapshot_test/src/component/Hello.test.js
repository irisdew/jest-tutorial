import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Mike",
  age: 20,
};

test("Hello라는 글자가 포함?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
