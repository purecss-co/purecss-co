import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import { FACEBOOK_SHARE_URL, TWITTER_SHARE_URL } from "../lib/constants";

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
    { id: "share-twitter", href: TWITTER_SHARE_URL },
    { id: "share-facebook", href: FACEBOOK_SHARE_URL },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Footer />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });
});
