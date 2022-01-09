import {render, screen} from "@testing-library/react";
import Button from "../Button";

describe("Button.test.js", () => {

  it('should render an empty content without any children prop', () => {
    render(<Button></Button>);
    const ButtonWrapper = screen.getByTestId("_Button");
    expect(ButtonWrapper.textContent).toBe("");
  });

  it('should render a button with given children prop', () => {
    const childrenProp = "Test Button"
    render(<Button>{childrenProp}</Button>);
    const ButtonWrapper = screen.getByTestId(`${childrenProp}_Button`);
    expect(ButtonWrapper.textContent).toBe(childrenProp);
  });

})