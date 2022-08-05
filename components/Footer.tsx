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
          href="https://twitter.com/share?url=https://purecss.co&text=Collection%20of%20PureCSS%20images%20by%20@asyrafhussin4"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          data-testid="share-facebook"
          className="footer-facebook"
          href="https://www.facebook.com/sharer/sharer.php?u=https://purecss.co"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
