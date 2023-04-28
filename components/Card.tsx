import {
  BrowserIcon,
  CodePenIcon,
  GitHubIcon,
  PhotoIcon,
  YoutubeIcon,
} from "./icons";

import { CardProps } from "types/card";
import Image from "next/image";
import { NextPage } from "next";
import { imageKitLoader } from "../lib/imagekit";

const Card: NextPage<CardProps> = ({ data }) => {
  return (
    <div className="row-grid">
      {data.purecss.map((item, key) => (
        <div className="card-container" key={key} data-testid="card-item">
          <div className="card">
            <Image
              loader={imageKitLoader}
              src={item.image}
              className="card-image"
              alt={`${item.title} image`}
              fill
            />
          </div>
          <div className="card-footer">
            <p className="card-title">{item.title}</p>

            <div className="card-footer-link">
              {item.youtube && (
                <a
                  className="card-footer-link-youtube"
                  href={item.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to YouTube"
                >
                  <YoutubeIcon />
                </a>
              )}
              {item.codepen && (
                <a
                  className="card-footer-link-codepen"
                  href={item.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to CodePen"
                >
                  <CodePenIcon />
                </a>
              )}

              {item.github && (
                <a
                  className="card-footer-link-codepen"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to GitHub"
                >
                  <GitHubIcon />
                </a>
              )}

              {item.design && (
                <a
                  className="card-footer-link-design"
                  href={item.design}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Design Source"
                >
                  <PhotoIcon />
                </a>
              )}

              {item.website && (
                <a
                  className="card-footer-link-website"
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Website"
                >
                  <BrowserIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
