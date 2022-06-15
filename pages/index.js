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
        <meta
          name="keywords"
          content="PureCSS.co,purecss.co,purecss,pure css,pure css images,Asyraf Hussin,scss"
        />
        <meta name="author" content="Asyraf Hussin" />

        <meta itemProp="name" content="PureCSS by Asyraf Hussin" />
        <meta
          itemProp="description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta itemProp="image" content="/banner.png" />

        <meta property="og:url" content="https://purecss.co" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PureCSS by Asyraf Hussin" />
        <meta
          property="og:description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta property="og:image" content="/banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PureCSS by Asyraf Hussin" />
        <meta
          name="twitter:description"
          content="Collection of PureCSS images by Asyraf Hussin"
        />
        <meta name="twitter:image" content="/banner.png" />

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
