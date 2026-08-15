import Astrojs from "../icons/Astrojs.astro";
import Tailwind from "../icons/Tailwind.astro";
import type { Tags } from "../../types";

const TAGS: Tags = {
  ASTRO: {
    name: "Astro",
    icon: Astrojs,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
};

const PROJECTS = [
  {
    image: "/yannick-palahi.webp",
    name: "Yannick Palahí",
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    description:
      "Portfolio minimalista hecho para un amigo para su proyecto final de carrera.",
    link: "https://yannick-palahi.netlify.app/",
    github_link: "https://github.com/SantiagoMC52/yannickpalahiweb"
  }
];

export default PROJECTS;
