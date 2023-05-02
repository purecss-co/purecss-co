import {
  BrowserIcon,
  CodePenIcon,
  GitHubIcon,
  PhotoIcon,
  YoutubeIcon,
} from "@/components/icons";

import { Link } from "@/types/link";

export const links: Link[] = [
  {
    type: "youtube",
    label: "Go to YouTube",
    icon: YoutubeIcon,
  },
  {
    type: "codepen",
    label: "Go to CodePen",
    icon: CodePenIcon,
  },
  {
    type: "github",
    label: "Go to GitHub",
    icon: GitHubIcon,
  },
  {
    type: "design",
    label: "Go to Design Source",
    icon: PhotoIcon,
  },
  {
    type: "website",
    label: "Go to Website",
    icon: BrowserIcon,
  },
];
