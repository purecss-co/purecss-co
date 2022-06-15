import Image from "next/image";
import { useQuery } from "react-query";

export default function Card() {
  const { isLoading, error, data } = useQuery("purecssData", () =>
    fetch("/api").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const imageKitLoader = ({ src, width, quality }) => {
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-youtube"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </a>
              )}
              {item.codepen && (
                <a
                  className="card-footer-link-codepen"
                  href={item.codepen}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-codepen"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                    <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                    <line x1="3" y1="9" x2="3" y2="15" />
                    <line x1="21" y1="9" x2="21" y2="15" />
                    <line x1="12" y1="3" x2="12" y2="9" />
                    <line x1="12" y1="15" x2="12" y2="21" />
                  </svg>
                </a>
              )}

              {item.website && (
                <a
                  className="card-footer-link-website"
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-world"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3.6" y1="9" x2="20.4" y2="9" />
                    <line x1="3.6" y1="15" x2="20.4" y2="15" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </a>
              )}

              {item.design && (
                <a
                  className="card-footer-link-design"
                  href={item.design}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-photo"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="15" y1="8" x2="15.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
