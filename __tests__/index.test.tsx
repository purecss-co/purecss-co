import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders a navbar", () => {
    render(<Navbar />);

    expect(screen.getByText("Pure")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("by")).toBeInTheDocument();
    expect(screen.getByText("asyrafhussin4")).toBeInTheDocument();
  });
});
