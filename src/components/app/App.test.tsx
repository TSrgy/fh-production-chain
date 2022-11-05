import { render, screen } from "@testing-library/react";

import { App } from "./App";
import React from "react";
import { ResizeObserver } from "mocks/ResizeObserver";

window.ResizeObserver = ResizeObserver;

test("renders app label", () => {
    render(<App />);
    const linkElement = screen.getByText(/blueprint/i);
    expect(linkElement).toBeInTheDocument();
});
