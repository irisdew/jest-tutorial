import { render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  Date.now = jest.fn(() => 11212342);
  // 고정된 숫자 반환하는 mockfunction
  // Date.now는 이제 고정값
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
