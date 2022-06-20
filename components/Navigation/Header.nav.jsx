import React from "react";
import Link from "next/dist/client/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const TextBox = ({ text, url }) => {
  return <a href={url}>{text}</a>;
};

const Header = () => {
  return (
    <header className="flex-auto ">
      <TextBox text="Home" url="#home" />
      <TextBox text="Acerca de mi " url="#aboutme" />
      <TextBox text="Proyectos" url="#projects" />
      <TextBox text="Contacto" url="#contact" />
      <Link href="https://www.google.com">
        <a target="_blank">
          <GitHubIcon />
        </a>
      </Link>
    </header>
  );
};

export default Header;
