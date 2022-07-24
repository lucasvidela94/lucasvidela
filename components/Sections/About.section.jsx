import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="w-3/4 lg:w-1/2 mx-auto rounded-md bg-gray-200 shadow-lg m-20 p-7 text-center"
      id="about_me"
    >
      <Image
        src="/assets/avatar.png"
        width="112"
        height="112"
        className="rounded-full"
        alt="avatar"
      />
      <h1 className="text-3xl">Lucas Videla</h1>
      <p className="text-gray-500 pb-4">Web developer</p>
      <p className="text-gray-700 mb-6 max-width-md ">
        Hello world, Im Lucas.I am a person passionate about technology and I
        love programming, I am fascinated by areas such as web development, and
        its application in terms of helping the community. I am an autodidact
        programmer, I like to learn new things no matter how hard they are.{" "}
        <br />
        <span className="font-semibold mt-5">
          You can find out more about me in the following links:
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-6">
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
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            CV!
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
