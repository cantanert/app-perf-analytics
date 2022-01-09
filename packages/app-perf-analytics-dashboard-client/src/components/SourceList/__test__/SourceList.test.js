import {queryByTestId, render, screen} from "@testing-library/react";
import SourceList from "../SourceList";

describe('SourceList.test.js', () => {

  const resourceListProp = [
    {
      dateInfo: "Sat Feb 15 2020 04:39:30 GMT+0300 (GMT+03:00)",
      resources: []
    },
    {
      dateInfo: "Sun Jan 05 2003 03:26:09 GMT+0200 (GMT+03:00)",
      resources: []
    }
  ]

  it('should render a title with "Resource Timing Logs"', () => {
    render(<SourceList resourceList={[]}/>)
    const title = screen.getByText("Resource Timing Logs");
    expect(title.textContent).toBeTruthy();
  });

  it('should render List Item Containers as much as resource props length if the resourceList array not empty', () => {
    render(<SourceList resourceList={resourceListProp}/>)
    const listItemContainers = screen.getAllByTestId("SourceListItemTitleContainer");
    expect(listItemContainers).toBeTruthy();
    expect(listItemContainers.length).toBe(resourceListProp.length);
  });

  it('should render a title text for every element of resourceList param', () => {
    render(<SourceList resourceList={resourceListProp}/>)
    const text = screen.getAllByTestId('SourceListItemTitle');
    expect(text[0].textContent).toBe('15/02/2020 04:39:30');
    expect(text[1].textContent).toBe('05/01/2003 03:26:09');
  });

  it('should render a File Presenter component for every element of resourceList param', () => {
    render(<SourceList resourceList={resourceListProp}/>)
    const FilePresenter = screen.getAllByTestId('FilePresenterWrapper');
    expect(FilePresenter.length).toBe(2);
  });

  it('should not render a "There is no data exist." text if the resourceList array not empty', () => {
    render(<SourceList resourceList={[{dateInfo: "dateInfo", resources:[]}]}/>)
    const text = screen.queryByTestId('noEntryText');
    expect(text).toBeFalsy();
  });

  it('should not render any button if the resourceList array not empty', () => {
    render(<SourceList resourceList={[{dateInfo: "dateInfo", resources:[]}]}/>)
    const button = screen.queryByTestId('Secondary_Go to Data Provider App_Button');
    expect(button).toBeFalsy();
  });

  it('should not render any List Item Containers if the resourceList array empty', () => {
    render(<SourceList resourceList={[]}/>)
    const listItemContainers = screen.queryByTestId("SourceListItemTitleContainer");
    expect(listItemContainers).toBeFalsy();
  });

  it('should render a "There is no data exist." text if the resourceList array empty', () => {
    render(<SourceList resourceList={[]}/>)
    const text = screen.getByTestId('noEntryText');
    expect(text).toBeTruthy();
    expect(text.textContent).toBe("There is no data exist.");
  });

  it('should render a secondary button with "Go to Data Provider App" text if the resourceList array empty', () => {
    render(<SourceList resourceList={[]}/>)
    const button = screen.getByTestId('Secondary_Go to Data Provider App_Button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe("Go to Data Provider App");
  });

});