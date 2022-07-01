import * as gtag from "../lib/gtag";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Meta />
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
