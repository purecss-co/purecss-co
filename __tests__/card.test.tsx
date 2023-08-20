import "@testing-library/jest-dom";

import PureCSSData, { PureCSSProps } from "types/data";
import { render, screen } from "@testing-library/react";

import Card from "@/components/Card";

const data: PureCSSData = require("../json/data.json");

describe("Card", () => {
  it("renders all card items", () => {
    render(<Card data={data} />);

    expect(screen.getAllByTestId("card-item")).toHaveLength(
      data.purecss.length,
    );
  });

  it("renders correct title and image for each card", () => {
    render(<Card data={data} />);

    data.purecss.forEach((item: PureCSSProps) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByAltText(`${item.title} image`)).toHaveAttribute(
        "src",
        `https://ik.imagekit.io/asyrafhussin/purecss/${item.image}?tr=w-3840`,
      );
    });
  });
});
