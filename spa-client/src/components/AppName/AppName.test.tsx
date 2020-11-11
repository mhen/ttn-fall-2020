import { render, screen } from "@testing-library/react";

import AppName from "./AppName";

describe("AppName render", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it("renders without crashing", () => {
    render(<AppName />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("renders with variable", () => {
    process.env.APP_NAME = "MYKEY";
    render(<AppName />);
    expect(screen.getByRole("heading")).toHaveTextContent("MYKEY");
  });
});
