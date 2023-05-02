import { FACEBOOK_SHARE_URL, TWITTER_SHARE_URL } from "@/lib/constants";
import { FacebookIcon, TwitterIcon } from "@/components/icons";

import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="footer" role="footer">
      <p data-testid="footer-year">
        &copy;
        {new Date().getFullYear()} PureCSS. All rights reserved.
      </p>
      <div className="footer-link">
        <p className="footer-link-title">Share: </p>
        <a
          data-testid="share-twitter"
          className="footer-twitter"
          href={TWITTER_SHARE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Share link to Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          data-testid="share-facebook"
          className="footer-facebook"
          href={FACEBOOK_SHARE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Share link to Facebook"
        >
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
