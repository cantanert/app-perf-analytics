import {render, screen} from "@testing-library/react";
import MonitoringArea from "../MonitoringArea";

describe("MonitoringArea.test.js", () => {

  beforeEach(() => {
    render(<MonitoringArea />)
  })

  it('should return two wrapper div with Card component', () => {
      const wrapperDivs = screen.getAllByTestId("Card");
      expect(wrapperDivs.length).toBe(2);
  });

  it('should return one "MonitoringAreaRow" for each two Card component', () => {
    const monitoringAreaRows = screen.getAllByTestId("MonitoringAreaRow");
    expect(monitoringAreaRows.length).toBe(2);
  });

});