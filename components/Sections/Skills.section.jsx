import Image from "next/image";

const SKills = () => {
  return (
    <div className="flex flex-col flex-start justify-center p-28">
      <div className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
          Tecnologias:
        </h2>
        <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
          Actualmente me encuentro trabajando con las siguientes tecnologias.
        </p>
      </div>

      <div className="flex flex-initial justify-evenly p-14 flex-wrap">
        <a
          href="#"
          className="px-3 py-3 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-sky-400 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/react.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">
              React.js
            </p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white-100 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col content-center justify-between">
            <Image src="/svg/github.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">Git</p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-javascript dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/javascript.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-typescript dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/typescript.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">
              Typescript
            </p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-ruby dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/ruby.svg" width="30" height="30" />
            <p className="font-normal text-gray-700 dark:text-black">Ruby</p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-rubyonrails dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center w-10 ">
            <Image src="/svg/ror.svg" width="20" height="25" />
            <p className="font-normal text-sm text-gray-700 dark:text-black">
              Ruby on Rails
            </p>
          </div>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/ror.svg" width="45" height="45" />
            <p className="font-normal text-gray-700 dark:text-black">Html</p>
          </div>
        </a>
        <a
          href="#"
          className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/ror.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">CSS</p>
          </div>
        </a>
        <a
          href="#"
          className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center">
            <Image src="/svg/ror.svg" width="40" height="40" />
            <p className="font-normal text-gray-700 dark:text-black">
              Bootstrap
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SKills;
