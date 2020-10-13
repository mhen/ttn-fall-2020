import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Clicker from "./Clicker";

describe("Clicker render", () => {
  it("renders without crashing", () => {
    render(<Clicker />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("Check initial default state", () => {
    render(<Clicker />);
    expect(screen.getByTestId("counter-data")).toHaveAttribute("data-counter", "0");
  });

  it("Check initial custom state", () => {
    render(<Clicker startCount={10} />);
    expect(screen.getByTestId("counter-data")).toHaveAttribute("data-counter", "10");
  });
});

describe("Clicker behavior", () => {
  it("Check increase click", () => {
    render(<Clicker />);

    const increaseButton = screen.getByTestId("counter-increase");

    userEvent.click(increaseButton);

    expect(screen.getByTestId("counter-data")).toHaveAttribute("data-counter", "1");
  });

  it("Check increase click 20 times", () => {
    const timesToClick = 20;

    render(<Clicker />);

    const increaseButton = screen.getByTestId("counter-increase");
    for (let index = 0; index < timesToClick; index++) {
      userEvent.click(increaseButton);
    }

    expect(screen.getByTestId("counter-data")).toHaveAttribute(
      "data-counter",
      timesToClick.toString()
    );
  });

  it("Check increase click then reset", () => {
    render(<Clicker />);

    const increaseButton = screen.getByTestId("counter-increase");
    const resetButton = screen.getByTestId("counter-reset");

    userEvent.click(increaseButton);

    expect(screen.getByTestId("counter-data")).toHaveAttribute("data-counter", "1");

    userEvent.click(resetButton);

    expect(screen.getByTestId("counter-data")).toHaveAttribute("data-counter", "0");
  });
});
