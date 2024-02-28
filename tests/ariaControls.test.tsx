import React from "react";
import Hamburger from "../src";
import { render, screen } from "@testing-library/react";

it(`indicates the element that it's controlling`, () => {
  render(<Hamburger controls="primary-navigation" />);

  expect(screen.getByTestId("tilt")).toHaveAttribute(
    "aria-controls",
    "primary-navigation"
  );
});

it(`shouldn't indicate the element that it's controlling`, () => {
  render(<Hamburger />);

  expect(screen.getByTestId("tilt")).not.toHaveAttribute("aria-controls");
});
