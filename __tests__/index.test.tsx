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

  const links = [
    {
      id: "follow-twitter",
      href: "https://twitter.com/asyrafhussin4",
    },
    {
      id: "follow-youtube",
      href: "https://www.youtube.com/c/AsyrafHussin",
    },
    {
      id: "follow-github",
      href: "https://github.com/purecss-co",
    },
    {
      id: "follow-facebook",
      href: "https://www.facebook.com/asyrafHussin4",
    },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Navbar />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });
});
