import React from "react";
import Link from "next/dist/client/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const TextBox = ({ text, url }) => {
  return (
    <a
      className="block text-white rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white hover:opacity-10"
      href={url}
    >
      {text}
    </a>
  );
};

const Header = () => {
  return (
    <nav className="bg-white border-gray-400 px-2 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <TextBox text="Home" url="#home" />
        <TextBox text="Acerca de mi " url="#aboutme" />
        <TextBox text="Proyectos" url="#projects" />
        <TextBox text="Contacto" url="#contact" />
        <Link href="https://www.google.com">
          <a target="_blank">
            <GitHubIcon />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
