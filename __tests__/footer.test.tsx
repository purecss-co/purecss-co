import { FACEBOOK_SHARE_URL, TWITTER_SHARE_URL } from "@/lib/constants";
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

  it("renders all icons", () => {
    render(<Footer />);

    expect(screen.getByTestId("share-twitter")).toContainElement(
      screen.getByTestId("twitter-icon"),
    );
    expect(screen.getByTestId("share-facebook")).toContainElement(
      screen.getByTestId("facebook-icon"),
    );
  });

  const links = [
    { id: "share-twitter", href: TWITTER_SHARE_URL },
    { id: "share-facebook", href: FACEBOOK_SHARE_URL },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Footer />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });

  it("opens links in new tab", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });

  it("renders links with proper accessibility attributes", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("aria-label");
    });
  });

  it("renders with the correct class name", () => {
    render(<Footer />);

    const footer = screen.getByRole("footer");
    expect(footer).toHaveClass("footer");
  });
});
