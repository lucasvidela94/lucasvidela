import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto rounded-md bg-gray-200 shadow-lg m-20 p-10 text-center">
      <Image
        src="/assets/avatar.png"
        width="112"
        height="112"
        className="rounded-full"
        alt="avatar"
      />
      <h1 className="text-3xl">Lucas Videla</h1>
      <p className="text-gray-500 pb-4">Frontend developer</p>
      <p className="text-gray-700 mb-6 max-width-md ">
        Hello world, Im Lucas.Im a self taught developer,yeah like i love to
        learn new things and understand how the world works,really stubborn and
        a learner for life. <br />
        You can find out more about me in the following links:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-6">
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a href="">Github</a>
        </div>
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a href="">LinkedIn</a>
        </div>
        <div className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md mr-4 hover:bg-gray-600">
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default About;
