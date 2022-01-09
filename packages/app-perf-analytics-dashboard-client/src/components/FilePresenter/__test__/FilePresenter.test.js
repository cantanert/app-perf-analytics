import {render, screen} from "@testing-library/react";
import FilePresenter from "../FilePresenter";

describe("FilePresenter.test.js", () => {
  const fileDateProp = {
    "name": "https://app-perf-analytics.herokuapp.com/favicon.ico",
    "initiatorType": "img",
    "responseEnd": 3.23679999999702,
    "date": "2022-01-08T21:57:10.415Z"
  }

  it('should render initiatorType text', () => {
    render(<FilePresenter fileData={fileDateProp} />)
    const initiatorType = screen.getByTestId("initiatorType");
    expect(initiatorType.textContent).toBe("img");
  });

  it('should not render any initiatorType text if the initiatorType param nullish', () => {
    render(<FilePresenter fileData={{}} />)
    const initiatorType = screen.queryByTestId("initiatorType");
    expect(initiatorType.textContent).toBe("");
  });

  it('should render file name text', () => {
    render(<FilePresenter fileData={fileDateProp} />)
    const fileName = screen.getByTestId("name");
    expect(fileName.textContent).toBe("favicon.ico");
  });

  it('should not render any file name text if the name param nullish', () => {
    render(<FilePresenter fileData={{}} />)
    const fileName = screen.getByTestId("name");
    expect(fileName.textContent).toBe("");
  });

  it('should render response end text', () => {
    render(<FilePresenter fileData={fileDateProp} />)
    const responseEnd = screen.getByTestId("responseEnd");
    expect(responseEnd.textContent).toBe("3.24s");
  });

  it('should not render any response end text if the responseEnd param nullish', () => {
    render(<FilePresenter fileData={{}} />)
    const responseEnd = screen.getByTestId("responseEnd");
    expect(responseEnd.textContent).toBe("s");
  });

});