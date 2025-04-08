import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@chrismbah",
    icon: Icons.gitHub,
    link: "https://github.com/chrismbah",
  },
  {
    name: "LinkedIn",
    username: "Christian Mbah",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/mbah-chris",
  },
  {
    name: "X",
    username: "@byteswithchris",
    icon: Icons.twitterX,
    link: "https://x.com/byteswithchris",
  },
  {
    name: "Hashnode",
    username: "@chrismbah",
    icon: Icons.hashnode,
    link: "https://chrismbah.hashnode.dev/",
  },
  {
    name: "Gmail",
    username: "mbahchris46",
    icon: Icons.gmail,
    link: "mailto:mbahchris46@gmail.com",
  },
  {
    name: "TikTok",
    username: "@byteswithchris",
    icon: Icons.tiktok,
    link: "https://www.tiktok.com/@byteswithchris",
  },
];
