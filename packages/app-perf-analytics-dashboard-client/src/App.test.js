import { render, screen } from '@testing-library/react';
import App from './App';


describe("App.test.js", () => {

  beforeEach(() => {
    render(<App />);
  })

  it('should have a Title with "PerfAnalytics Dashboard" text', () => {
    const linkElement = screen.getByText(/PerfAnalytics Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should have a Subtitle with "Dashboard for performance analytics visualization" text\'', () => {
    const linkElement = screen.getByText(/Dashboard for performance analytics visualization/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('should have an element with "header-badge', () => {
    const headerBadgeElement = screen.getByTestId('header-badge');
    expect(headerBadgeElement).toHaveClass("header-badge")
  });

})
