import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Tag = {
  name: string;
  icon: AstroComponentFactory;
};

export type Tags = {
  [key: string]: Tag;
};

export type Project = {
  image: ImageMetadata;
  name: string;
  tags: Tag[];
  description: string;
  link: string;
  github_link?: string;
};
