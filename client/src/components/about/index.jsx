import React from "react";
import CardAbout from "../cardAbout";
import developerDiego from "../../source/developer-diego.png";
import developerFacundo from "../../source/FacundoMartinez.jpeg";
import developerAndres from "../../source/AndresOlarte.jpeg";
import developerLuis from "../../source/LuisLazarte.jpeg";
import developerEmmanuel from "../../source/EmmanuelRomo.jpeg";
import developerNancy from "../../source/NancyClavijo.jpeg";
import developerRoger from "../../source/RogerPf.jpeg";
import SkillsPF from "../../source//skills-gameLoopPF.png";

function About() {
  const developer = [
    {
      name: "SKILLS",
      rol: "PERN",
      image: SkillsPF,
      github: "https://github.com/DiFernando11/gamer-commerce",
    },
    {
      name: "Diego Apolo",
      rol: "Developer",
      image: developerDiego,
      github: "https://github.com/DiFernando11",
      linkendin:
        "https://www.linkedin.com/in/diego-fernando-apolo-guachizaca-324977248/",
      portfolio: "https://portfolio-difernando11.vercel.app/",
    },
    {
      name: "Facundo Martinez",
      rol: "Developer",
      image: developerFacundo,
      github: "https://github.com/FacundoMartinez14",
      linkendin: "https://www.linkedin.com/in/facundomartinez14/",
    },
    {
      name: "Andres Aldao",
      rol: "Developer",
      image: developerAndres,
      github: "https://github.com/AndresAldao",
      linkendin: "https://www.linkedin.com/in/andres-aldao",
    },
    {
      name: "Daniel Roger",
      rol: "Developer",
      image: developerRoger,
      github: "https://github.com/Rogerdanielzzz",
      linkendin: "https://www.linkedin.com/in/rogerperezcol",
    },
    {
      name: "Luis Lazarte",
      rol: "Developer",
      image: developerLuis,
      github: "https://github.com/luiz-22",
      linkendin: "https://www.linkedin.com/in/luiz22/",
    },
    {
      name: "Emmanuel Romo",
      rol: "Developer",
      image: developerEmmanuel,
      github: "https://github.com/Emaromo",
    },
    {
      name: "Nancy Clavijo",
      rol: "Developer",
      image: developerNancy,
      github: "https://github.com/Nancyclavijo27",
      linkendin: "https://www.linkedin.com/in/nancy-clavijo-varela-29353117a/",
    },
  ];
  return (
    <div className="boxDetailCardAbout">
      {developer.length &&
        developer.map((develop) => <CardAbout developer={develop} />)}
    </div>
  );
}

export default About;
