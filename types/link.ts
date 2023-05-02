type LinkType = "youtube" | "codepen" | "github" | "design" | "website";

export type Link = {
  type: LinkType;
  label: string;
  icon: React.ComponentType<{}>;
};
