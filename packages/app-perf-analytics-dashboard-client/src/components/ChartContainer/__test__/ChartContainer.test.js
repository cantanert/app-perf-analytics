import {render, screen} from "@testing-library/react";
import ChartContainer from "../ChartContainer";


const title = "Lorem Ipsum";

beforeEach(() => {
  const {debug} = render(<ChartContainer title={title} />);
  debug();
})

test("ChartContainer component has p element with title text", () => {
  const chartTitleEl = screen.getByTestId("chartTitle");
  expect(chartTitleEl.textContent).toBe(title);
})





