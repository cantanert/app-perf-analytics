import {render, screen} from "@testing-library/react";
import ChartContainer from "../ChartContainer";

const title = "Lorem Ipsum";

describe('ChartContainer.test.js', () => {

  it('should has p element with given title text', () => {
    render(<ChartContainer
      title={title}
      dataset={[]}
    />);
    const chartTitleEl = screen.getByTestId("chartTitle");
    expect(chartTitleEl.textContent).toBe(title);
  });

});





