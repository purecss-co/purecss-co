import Meta from "@/components/Meta";
import { render } from "@testing-library/react";

describe("Meta", () => {
  it("renders all meta tags", () => {
    render(<Meta />);

    const metaTags = document.querySelectorAll(
      "meta[name='viewport'], meta[charset], meta[name='description'], meta[itemprop='name'], meta[itemprop='description'], meta[itemprop='image'], meta[property='og:title'], meta[property='og:description'], meta[property='og:image'], meta[property='og:url'], meta[property='og:type'], meta[name='twitter:card'], meta[name='twitter:site'], meta[name='twitter:title'], meta[name='twitter:description'], meta[name='twitter:image'], meta[name='twitter:image:alt']",
    );

    expect(metaTags).toHaveLength(15);
  });

  it("renders meta tags with the correct content", () => {
    render(<Meta />);

    const titleTag = document.querySelector("title");
    expect(titleTag).toHaveTextContent("PureCSS Showcase by Asyraf Hussin");

    const descriptionTag = document.querySelector("meta[name='description']");
    expect(descriptionTag).toHaveAttribute(
      "content",
      "Explore a captivating collection of images created with PureCSS by Asyraf Hussin. Discover the elegance and beauty of PureCSS.co today.",
    );

    const ogTitleTag = document.querySelector("meta[property='og:title']");
    expect(ogTitleTag).toHaveAttribute(
      "content",
      "PureCSS Showcase by Asyraf Hussin",
    );

    const ogDescriptionTag = document.querySelector(
      "meta[property='og:description']",
    );
    expect(ogDescriptionTag).toHaveAttribute(
      "content",
      "Explore a captivating collection of images created with PureCSS by Asyraf Hussin. Discover the elegance and beauty of PureCSS.co today.",
    );

    const ogImageTag = document.querySelector("meta[property='og:image']");
    expect(ogImageTag).toHaveAttribute(
      "content",
      "https://purecss.co/banner.png",
    );

    const ogUrlTag = document.querySelector("meta[property='og:url']");
    expect(ogUrlTag).toHaveAttribute("content", "https://purecss.co");

    const ogTypeTag = document.querySelector("meta[property='og:type']");
    expect(ogTypeTag).toHaveAttribute("content", "website");

    const twitterSiteTag = document.querySelector("meta[name='twitter:site']");
    expect(twitterSiteTag).toHaveAttribute("content", "@asyrafhussin4");

    const twitterTitleTag = document.querySelector(
      "meta[name='twitter:title']",
    );
    expect(twitterTitleTag).toHaveAttribute(
      "content",
      "PureCSS Showcase by Asyraf Hussin",
    );

    const twitterDescriptionTag = document.querySelector(
      "meta[name='twitter:description']",
    );
    expect(twitterDescriptionTag).toHaveAttribute(
      "content",
      "Explore a captivating collection of images created with PureCSS by Asyraf Hussin. Discover the elegance and beauty of PureCSS.co today.",
    );

    const twitterImageTag = document.querySelector(
      "meta[name='twitter:image']",
    );
    expect(twitterImageTag).toHaveAttribute(
      "content",
      "https://purecss.co/banner.png",
    );

    const twitterImageAltTag = document.querySelector(
      "meta[name='twitter:image:alt']",
    );
    expect(twitterImageAltTag).toHaveAttribute("content", "PureCSS Banner");
  });
});
