import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/lib/constants";
import { render, screen } from "@testing-library/react";

import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders a title", () => {
    render(<Navbar />);

    expect(screen.getByText("Pure")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("by")).toBeInTheDocument();
  });

  it("renders all icons", () => {
    render(<Navbar />);

    expect(screen.getByTestId("follow-twitter")).toContainElement(
      screen.getByTestId("twitter-icon"),
    );
    expect(screen.getByTestId("follow-youtube")).toContainElement(
      screen.getByTestId("youtube-icon"),
    );
    expect(screen.getByTestId("follow-github")).toContainElement(
      screen.getByTestId("github-icon"),
    );
    expect(screen.getByTestId("follow-linkedin")).toContainElement(
      screen.getByTestId("linkedin-icon"),
    );
  });

  it("renders a twitter link from title", () => {
    render(<Navbar />);

    const twitterUsername = screen.getByText("asyrafhussin4");
    expect(twitterUsername).toBeInTheDocument();
    expect(twitterUsername).toHaveAttribute("href", TWITTER_URL);
  });

  const links = [
    { id: "follow-twitter", href: TWITTER_URL },
    { id: "follow-youtube", href: YOUTUBE_URL },
    { id: "follow-github", href: GITHUB_URL },
    { id: "follow-linkedin", href: LINKEDIN_URL },
  ];

  it.each(links)("renders a $id link", ({ id, href }) => {
    render(<Navbar />);

    expect(screen.getByTestId(id)).toHaveAttribute("href", href);
  });

  it("opens links in new tab", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });

  it("renders links with proper accessibility attributes", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("aria-label");
    });
  });

  it("renders with the correct class name", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("navbar");
  });
});
