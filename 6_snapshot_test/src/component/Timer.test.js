import { render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
