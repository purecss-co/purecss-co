import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/lib/constants";
import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
  TwitterWhiteIcon,
  YoutubeIcon,
} from "@/components/icons";

import { NextPage } from "next";

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
            aria-label="Go to Twitter"
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
          aria-label="Go to Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          data-testid="follow-youtube"
          className="navbar-youtube"
          href={YOUTUBE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Youtube"
        >
          <YoutubeIcon />
        </a>
        <a
          data-testid="follow-github"
          className="navbar-github"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Github"
        >
          <GitHubIcon />
        </a>
        <a
          data-testid="follow-linkedin"
          className="navbar-linkedin"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
