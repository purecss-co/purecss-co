import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders a title", () => {
    render(<Navbar />);

    expect(screen.getByText("Pure")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("by")).toBeInTheDocument();
  });

  it("renders a twitter link from title", () => {
    render(<Navbar />);

    const twitterUsername = screen.getByText("asyrafhussin4");
    expect(twitterUsername).toBeInTheDocument();
    expect(twitterUsername).toHaveAttribute(
      "href",
      "https://twitter.com/asyrafhussin4",
    );
  });

  it("renders a follow link", () => {
    render(<Navbar />);

    expect(screen.getByTestId("follow-twitter")).toHaveAttribute(
      "href",
      "https://twitter.com/asyrafhussin4",
    );
    expect(screen.getByTestId("follow-youtube")).toHaveAttribute(
      "href",
      "https://www.youtube.com/c/AsyrafHussin",
    );
    expect(screen.getByTestId("follow-github")).toHaveAttribute(
      "href",
      "https://github.com/purecss-co",
    );
    expect(screen.getByTestId("follow-facebook")).toHaveAttribute(
      "href",
      "https://www.facebook.com/asyrafHussin4",
    );
  });
});
