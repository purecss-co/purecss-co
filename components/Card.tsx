import { CardProps } from "types/card";
import Image from "next/image";
import { NextPage } from "next";
import { imageKitLoader } from "@/lib/imagekit";
import { links } from "@/lib/link";

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
              {links.map(
                (link) =>
                  item[link.type] && (
                    <a
                      key={link.type}
                      className={`card-footer-link-${link.type}`}
                      href={item[link.type] as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon />
                    </a>
                  ),
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
