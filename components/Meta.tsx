import { NextPage } from "next";

const defaults = {
  title: `PureCSS Showcase by Asyraf Hussin`,
  description: `Explore a captivating collection of images created with PureCSS by Asyraf Hussin. Discover the elegance and beauty of PureCSS.co today.`,
  image: `https://purecss.co/banner.png`,
  url: `https://purecss.co`,
};

const Meta: NextPage = () => {
  return (
    <>
      <title>{defaults.title}</title>
      <meta name="description" content={defaults.description} />

      {/*<!-- Google / Search Engine Tags -->*/}
      <meta itemProp="name" content={defaults.title} />
      <meta itemProp="description" content={defaults.description} />
      <meta itemProp="image" content={defaults.image} />

      {/*<!-- Facebook Meta Tags -->*/}
      <meta property="og:title" content={defaults.title} />
      <meta property="og:description" content={defaults.description} />
      <meta property="og:image" content={defaults.image} />
      <meta property="og:url" content={defaults.url} />
      <meta property="og:type" content="website" />

      {/*<!-- Twitter Meta Tags -->*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@asyrafhussin4" />
      <meta name="twitter:title" content={defaults.title} />
      <meta name="twitter:description" content={defaults.description} />
      <meta name="twitter:image" content={defaults.image} />
      <meta name="twitter:image:alt" content="PureCSS Banner" />
    </>
  );
};

export default Meta;
