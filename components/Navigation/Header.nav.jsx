import Link from "next/dist/client/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

const TextBox = ({ text, url }) => {
  return (
    <a
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
      href={url}
    >
      {text}
    </a>
  );
};

const Header = () => {
  return (
    <div>
      <nav className=" border-gray-400 px-2 py-2.5 ">
        <div className="hidden container lg:flex flex-wrap justify-between items-center mx-auto">
          <TextBox text="Home" url="#home" />
          <TextBox text="Acerca de mi " url="#aboutme" />
          <TextBox text="Proyectos" url="#projects" />
          <TextBox text="Contacto" url="#contact" />
          <Link href="https://www.google.com">
            <a target="_blank">
              <GitHubIcon className="fill-white" />
            </a>
          </Link>
        </div>
        <div className="flex justify-between lg:hidden">
          <Image
            src="/svg/WolfIcon.svg"
            alt="Logo"
            width={25}
            height={25}
            className="invert"
          />
          <GitHubIcon className="fill-white" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
