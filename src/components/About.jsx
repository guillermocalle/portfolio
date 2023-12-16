import React from "react";
import SectionTitle from "./SectionTitle";
import Profile from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>Sobre Mi</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Mi nombre es Guillermo Calle, soy entusiasta del mundo del software,
          soy autodidacta, con enfoque en el desarrollo web. Soy egresado de
          ing. en sistemas, siempre estoy abierto a trabajar con distintas
          tecnologías, aprender nuevas habilidades y contribuir al crecimiento
          de su empresa.
        </p>

        <a
          href="mailto:guillermo.calle.info@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          guillermo.calle.info@gmail.com
        </a>

        <div className="flex flex-wrap gap-6 flex-row items-center justify-start mt-3">
          <a
            href="https://www.linkedin.com/in/guillermocp/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={25}
              className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
            />
          </a>

          <a
            href="https://github.com/guillermocalle"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={25}
              className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
            />
          </a>

          <a href="https://wa.me/59165514136" target="_blank" rel="noreferrer">
            <FaWhatsapp
              size={25}
              className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
            />
          </a>
        </div>
      </div>

      <img
        src={Profile}
        alt="Guillermo Calle"
        className="w-full md:w-4/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
