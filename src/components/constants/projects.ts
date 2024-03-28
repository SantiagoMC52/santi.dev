import Reactjs from "../icons/Reactjs.astro";
import Redux from "../icons/Redux.astro";
import Sass from "../icons/Sass.astro";
import type { Tags } from "../../types";

const TAGS: Tags = {
  REACT: {
    name: "ReactJS",
    icon: Reactjs,
  },
  SASS: {
    name: "SASS",
    icon: Sass,
  },
  REDUX: {
    name: "Redux",
    icon: Redux,
  },
};

const PROJECTS = [
  {
    image: "/yannick-palahi.png",
    name: "Yannick Palahí",
    tags: [TAGS.REACT, TAGS.SASS, TAGS.REDUX],
    description:
      "Portfolio minimalista hecho para un amigo para su proyecto final de carrera.",
    link: "https://yannick-palahi.web.app",
  },
  {
    image: "/rick-and-morty.png",
    name: "Rick and Morty",
    tags: [TAGS.REACT, TAGS.SASS],
    description:
      "Web hecha en mis inicios en la programación para practicar el uso de una API",
    link: "https://rickandmortyexample.netlify.app",
  },
];

export default PROJECTS;
