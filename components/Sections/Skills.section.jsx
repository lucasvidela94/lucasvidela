import { Image } from "next";

const SKills = () => {
  return (
    <div className="flex justify-evenly">
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-sky-400 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">React.js</p>
      </a>
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white-100 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">Github</p>
      </a>
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-javascript dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">JavaScript</p>
      </a>
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-typescript dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">Typescript</p>
      </a>{" "}
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-ruby dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">Ruby</p>
      </a>
      <a
        href="#"
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-rubyonrails dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image></Image>
        <p className="font-normal text-gray-700 dark:text-black">
          Ruby on Rails
        </p>
      </a>
    </div>
  );
};

export default SKills;
