import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders a current year", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer-year")).toHaveTextContent(
      new Date().getFullYear().toString(),
    );
  });

  it("renders a rights reserved", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer-year")).toHaveTextContent(
      "PureCSS. All rights reserved.",
    );
  });

  const links = [
    {
      id: "share-twitter",
      href: "https://twitter.com/share?url=https://purecss.co&text=Collection%20of%20PureCSS%20images%20by%20@asyrafhussin4",
    },
    {
      id: "share-facebook",
      href: "https://www.facebook.com/sharer/sharer.php?u=https://purecss.co",
    },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Footer />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });
});
