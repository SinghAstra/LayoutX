export type SiteConfig = {
  name: string;
  description: string;
  tagline: string;
  headline: string;
  subHeadline: string;
  url: string;
  ogImage?: string;
  links: {
    twitter: string;
    github: string;
    linkedIn: string;
  };
};
