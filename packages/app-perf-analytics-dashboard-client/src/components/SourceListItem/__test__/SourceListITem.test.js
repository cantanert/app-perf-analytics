import {queryByTestId, render, screen} from "@testing-library/react";
import SourceListItem from "../SourceListItem";

describe("SourceListItem.test.js", () => {

  const resourceParam = [
    {
      "name": "https://app-perf-analytics.herokuapp.com/static/js/main.cf38c3f8.js",
      "initiatorType": "script",
      "responseEnd": 3.23679999999702,
      "date": "2022-01-08T21:57:10.415Z"
    },
    {
      "name": "https://app-perf-analytics.herokuapp.com/favicon.ico",
      "initiatorType": "img",
      "responseEnd": 3.23679999999702,
      "date": "2022-01-08T21:57:10.415Z"
    },
  ];

  it('should not contain anything as content if the resource param empty', () => {
    render(<SourceListItem resource={[]} />);
    const FilePresenterWrapper = screen.getByTestId('FilePresenterWrapper');
    expect(FilePresenterWrapper.textContent).toBeFalsy();
  });

  it('should render File Presenter component as much as resource params lenght', () => {
    render(<SourceListItem resource={resourceParam} />);
    const FilePresenterWrappers = screen.getAllByTestId('FilePresenter');
    expect(FilePresenterWrappers.length).toBe(resourceParam.length);
  });

});