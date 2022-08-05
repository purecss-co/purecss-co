import BrowserIcon from "./icons/BrowserIcon";
import CodePenIcon from "./icons/CodePenIcon";
import GitHubIcon from "./icons/GitHubIcon";
import Image from "next/image";
import PhotoIcon from "./icons/PhotoIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import React from "react";
import PureCSSData from "interfaces/data";
import imageKitLoaderProps from "interfaces/loader";

export default function Card() {
  const { data, error } = useSWR<PureCSSData>("/api", fetcher);

  if (!data) return <React.Fragment>Loading...</React.Fragment>;

  if (error)
    return (
      <React.Fragment>An error has occurred: {error.message}</React.Fragment>
    );

  const imageKitLoader = ({ src, width, quality }: imageKitLoaderProps) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
      params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    var urlEndpoint = "https://ik.imagekit.io/asyrafhussin/purecss";
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
      urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
  };

  return (
    <div className="row-grid">
      {data.purecss.map((item, key) => (
        <div className="card-container" key={key}>
          <div className="card">
            <Image
              loader={imageKitLoader}
              src={item.image}
              className="card-image"
              alt="image"
              width="100%"
              height="63"
              layout="responsive"
              objectFit="contain"
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
                  rel="noreferrer"
                >
                  <YoutubeIcon />
                </a>
              )}
              {item.codepen && (
                <a
                  className="card-footer-link-codepen"
                  href={item.codepen}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodePenIcon />
                </a>
              )}

              {item.github && (
                <a
                  className="card-footer-link-codepen"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {item.design && (
                <a
                  className="card-footer-link-design"
                  href={item.design}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PhotoIcon />
                </a>
              )}

              {item.website && (
                <a
                  className="card-footer-link-website"
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
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
}
