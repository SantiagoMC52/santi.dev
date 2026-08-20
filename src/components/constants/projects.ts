import Astrojs from "../icons/Astrojs.astro";
import Tailwind from "../icons/Tailwind.astro";
import yannickPalahiImage from "../../assets/yannick-palahi.webp";
import breakPladelTeamImage from "../../assets/break.webp";
import type { Project, Tags } from "../../types";

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

const PROJECTS: Project[] = [
  {
    image: yannickPalahiImage,
    name: "Yannick Palahí",
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    description:
      "Portfolio minimalista hecho para un amigo para su proyecto final de carrera.",
    link: "https://yannick-palahi.netlify.app/",
    github_link: "https://github.com/SantiagoMC52/yannickpalahiweb",
  },
  {
    image: breakPladelTeamImage,
    name: "Break Pladel Team",
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    description:
      "Web para que a mi equipo de pádel le resultara más fácil consultar partidos y resultados. Incluye calendario, clasificación y estadísticas de jugadores, con datos actualizados cada semana mediante scraping autorizado por la federación.",
    link: "https://break-padel-team.netlify.app/",
  },
];

export default PROJECTS;
