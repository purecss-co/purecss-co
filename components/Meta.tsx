import { NextPage } from "next";

const defaults = {
  title: `PureCSS by Asyraf Hussin`,
  description: `Experience a mesmerizing collection of images crafted using PureCSS by Asyraf Hussin. Discover the beauty of PureCSS.co now`,
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
