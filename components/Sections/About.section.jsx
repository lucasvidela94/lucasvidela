import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  return (
    <div
      className="w-3/4 lg:w-1/2 mx-auto rounded-md bg-gray-200 shadow-lg m-20 p-7 text-center"
      id="about_me"
    >
      <Image
        src="/assets/avatar2.jpeg"
        width="112"
        height="112"
        className="rounded-full"
        alt="avatar"
      />
      <h1 className="text-3xl text-gray-700">Lucas Videla</h1>
      <p className="text-gray-500 pb-4 font-medium">Web developer</p>
      <p className="lg:hidden text-gray-700 mb-6 text-sm font-semibold ">
        Sup! Im lucas a developer from la patagonia!I love to code almost as i
        love my dogs
      </p>
      <p className="lg:hidden text-gray-700 mb-6 text-sm font-bold">
        Check out my networks!
      </p>
      <div className="sm:hidden grid grid-cols-3 grid-flow-row gap-6 pb-2">
        <div className="w-1/4 text-gray-100 rounded-md hover:bg-gray-600">
          <a
            href="https://github.com/lucasvidela94"
            className=" p-3 rounded-md bg-gray-800 hover:bg-gray-600 hover:shadow-md duration-75"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
        <div className="w-1/4 text-gray-100 rounded-md hover:bg-gray-600">
          <a
            href="https://www.linkedin.com/in/lucasandres-videla"
            className="w-1/4  p-3 rounded-md bg-gray-800 hover:bg-gray-600 hover:shadow-md duration-75"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="w-1/4 text-gray-100 rounded-md hover:bg-gray-600">
          <a
            href="https://www.instagram.com/lucasvidela__"
            className="w-1/4  p-3 rounded-md bg-gray-800 hover:bg-gray-600 hover:shadow-md duration-75"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <p className="hidden lg:block text-gray-700 mb-6 text-sm">
        Sup!, Im lucas a self taught developer.Ive been coding for about 2
        years.Ever since i write my first javascript line i knew it was my thing
        i love web development and even more i love finding out solutions for
        problems i didnt know i had.
        <br /> I also aspire to help more people in the future and to show some
        new devs the fun you can have while building something. <br />
        <span className="font-bold mt-5">
          <br />
          You can find out more about me in the following links:
        </span>
      </p>

      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-6">
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a
            href="https://www.github.com/lucasvidela94"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a
            href="https://www.linkedin.com/in/lucasandres-videla"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a
            href="https://www.instagram.com/lucasvidela__"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="pt-4 pr-4">
        <button className="bg-gray-800 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a
            href="https://github.com/lucasvidela94/cv/raw/master/CURRICULUM-LUCAS%20VIDELA.pdf/"
            target="_blank"
            rel="noreferrer"
          >
            CV!
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
