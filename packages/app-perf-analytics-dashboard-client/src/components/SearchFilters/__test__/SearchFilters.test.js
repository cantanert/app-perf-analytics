import {render, screen} from "@testing-library/react";
import SearchFilters from "../SearchFilters";

describe('SearchFilters.test.js', () => {

  beforeEach(() => {
    render(<SearchFilters/>);
  });

  it('should be rendered', () => {
    const wrapper = screen.getByTestId('SearchFilters');
    expect(wrapper).toBeInTheDocument();
  });

  it('should has an input with "Start Time" label', () => {
    const startTimeInput = screen.getByTestId('startTime');
    expect(startTimeInput.textContent).toContain('Start Time');
  });

  it('should has an input with "End Time" label', () => {
    const endTimeInput = screen.getByTestId('endTime');
    expect(endTimeInput.textContent).toContain('End Time');
  });

  it('should has a secondary button with "Clear Filters" text', () => {
    const clearButton = screen.getByTestId('Secondary_Clear Filters_Button');
    expect(clearButton.textContent).toBe('Clear Filters');
  });

  it('should has a primary button with "Submit Search" text', () => {
    const submitButton = screen.getByTestId('Submit Search_Button');
    expect(submitButton.textContent).toBe('Submit Search');
  });

})