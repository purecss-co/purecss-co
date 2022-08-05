import {
  FACEBOOK_URL,
  GITHUB_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../lib/constants";
import FacebookIcon from "./icons/FacebookIcon";
import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <span className="text-title">Pure</span>
        <span className="text-subtitle">CSS</span>
        <sup className="text-by">by</sup>
        <sup>
          <a
            href={TWITTER_URL}
            target="_blank"
            className="navbar-title-username"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-twitter"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
            asyrafhussin4
          </a>
        </sup>
      </div>
      <div className="navbar-link">
        <p className="footer-link-title">Follow: </p>
        <a
          data-testid="follow-twitter"
          className="footer-twitter"
          href={TWITTER_URL}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          data-testid="follow-youtube"
          className="navbar-youtube"
          href={YOUTUBE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
        <a
          data-testid="follow-github"
          className="navbar-github"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          data-testid="follow-facebook"
          className="footer-facebook"
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </nav>
  );
}
