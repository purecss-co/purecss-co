import { NextPage } from "next";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../lib/constants";
import { TwitterIcon, YoutubeIcon, GitHubIcon, FacebookIcon } from "./icons";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterWhiteIcon from "./icons/TwitterWhiteIcon";

const Navbar: NextPage = () => {
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
            <TwitterWhiteIcon />
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
          data-testid="follow-linkedin"
          className="navbar-linkedin"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
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
};

export default Navbar;
