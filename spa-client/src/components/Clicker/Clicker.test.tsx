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
    expect(screen.getByRole("text")).toHaveAttribute("data-counter", "0");
  });

  it("Check initial custom state", () => {
    render(<Clicker startCount={10} />);
    expect(screen.getByRole("text")).toHaveAttribute("data-counter", "10");
  });
});

describe("Clicker behavior", () => {
  it("Check increase click", () => {
    render(<Clicker />);

    const increaseButton = screen.getByTestId("counter-increase");

    userEvent.click(increaseButton);
    userEvent.click(increaseButton);

    expect(screen.getByRole("text")).toHaveAttribute("data-counter", "2");
  });
});
