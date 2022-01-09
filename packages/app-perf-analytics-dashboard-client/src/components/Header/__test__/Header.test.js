import {render, screen, act} from "@testing-library/react";
import Header from "../Header";

const title = "PerfAnalytics Dashboard";
const subtitle = "Dashboard for performance analytics visualization"

describe('Header.test.js', () => {

  beforeEach(() => {
    render(<Header title={title} subtitle={subtitle}/>);
  });

  it("Header component has h1 element with text", () => {
    const headerTitleEl = screen.getByTestId("headerTitle");
    expect(headerTitleEl.textContent).toBe(title);
  });

  it("Header component has p element with text", () => {
    const headerSubtitleEl = screen.getByTestId("headerSubtitle");
    expect(headerSubtitleEl.textContent).toBe(subtitle);
  });

})
