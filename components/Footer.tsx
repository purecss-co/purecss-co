import { FACEBOOK_SHARE_URL, TWITTER_SHARE_URL } from "../lib/constants";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <div className="footer">
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
        >
          <TwitterIcon />
        </a>
        <a
          data-testid="share-facebook"
          className="footer-facebook"
          href={FACEBOOK_SHARE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
