import Card from "../components/Card";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>PureCSS by Asyraf Hussin</title>
        <meta
          name="description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta name="author" content="Asyraf Hussin" />

        <meta itemProp="name" content="PureCSS by Asyraf Hussin" />
        <meta
          itemProp="description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta
          itemProp="image"
          content="https://ik.imagekit.io/asyrafhussin/purecss/banner_4tgZv1Ryx.png"
        />

        <meta property="og:title" content="PureCSS by Asyraf Hussin" />
        <meta
          property="og:description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/asyrafhussin/purecss/banner_4tgZv1Ryx.png"
        />
        <meta property="og:url" content="https://purecss.co" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="PureCSS by Asyraf Hussin" />
        <meta
          name="twitter:description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/asyrafhussin/purecss/banner_4tgZv1Ryx.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MT3GSW79HP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MT3GSW79HP');
        `}
      </Script>

      <Navbar />
      <Card />
      <Footer />
    </>
  );
}
