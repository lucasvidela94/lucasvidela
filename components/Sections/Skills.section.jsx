import Image from "next/image";

const SKills = () => {
  return (
    <div className="flex flex-col flex-start justify-center p-24">
      <p className="font-normal text-gray-700 dark:text-white">
        Mi stack tecnologico consiste en estas tecnologias:
      </p>

      <div className="flex flex-initial justify-evenly p-24 flex-wrap">
        <a
          href="#"
          className="p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-sky-400 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/react.svg" width="45" height="45" />
            <p className="font-normal text-gray-700 dark:text-black">
              React.js
            </p>
          </div>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white-100 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col content-center justify-between">
            <Image src="/svg/github.svg" width="45" height="45" />
            <p className="font-normal text-gray-700 dark:text-black">Git</p>
          </div>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-javascript dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/javascript.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">
            JavaScript
          </p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-typescript dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/typescript.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">
            Typescript
          </p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-ruby dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/ruby.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">Ruby</p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-rubyonrails dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/ror.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">
            Ruby on Rails
          </p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/ror.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">Html</p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center"></div>
          <Image src="/svg/ror.svg" width="45" height="45" />
          <p className="font-normal text-gray-700 dark:text-black">CSS</p>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center">
            <Image src="/svg/ror.svg" width="45" height="45" />
          </div>
          <p className="font-normal text-gray-700 dark:text-black">Bootstrap</p>
        </a>
      </div>
    </div>
  );
};

export default SKills;
