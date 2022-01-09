import {render, screen} from "@testing-library/react";
import Card from "../Card";

describe("Card.test.js",() => {

  const exampleChildrenProp = "<h1>Example Children Text</h1>"

  beforeEach(() => {
    render(<Card>{exampleChildrenProp}</Card>);
  })

  it('should has an wrapper element with Card class', () => {
    const wrapperEl = screen.getByTestId('Card');
    expect(wrapperEl).toBeInTheDocument();
  });

  it('should print his children prop', () => {
    const wrapperEl = screen.getByTestId('Card');
    expect(wrapperEl.textContent).toBe(exampleChildrenProp);
  });

  it('should print nothing if it has no children props', () => {
    render(<Card></Card>);
    const wrapperEl = screen.getAllByTestId('Card');
    expect(wrapperEl[1].textContent).toBe('');
  });

})