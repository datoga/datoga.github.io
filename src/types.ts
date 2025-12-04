export type Site = {
  NAME: string;
  EMAIL: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Bio = {
  GREETING: string;
  EMOJI: string;
  PARAGRAPHS: string[];
};

export type FeaturedVideo = {
  YOUTUBE_ID: string;
  TITLE: string;
};

export type FAQItem = {
  QUESTION: string;
  ANSWER: string;
};

export type MentoringPage = {
  TITLE: string;
  DESCRIPTION: string;
  PARAGRAPHS: string[];
  CALLOUT?: string;
  CALLOUT_TITLE?: string;
  CALLOUT_SUBTITLE?: string;
  FEATURES?: string[];
  YOUTUBE_ID: string;
  VIDEO_TITLE: string;
  FAQ_TITLE: string;
  FAQ: FAQItem[];
};

export type NavLink = {
  NAME: string;
  HREF: string;
};
