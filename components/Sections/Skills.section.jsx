import Image from "next/image";

const SKills = () => {
  return (
    <div className="flex flex-col flex-start content-center justify-center p-28">
      <div className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-500">
          Tecnologias:
        </h2>
        <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
          Actualmente me encuentro trabajando con las siguientes tecnologias.
        </p>
      </div>

      <div className="flex justify-evenly p-14 flex-wrap ">
        <div className="flex justify-center items-center">
          <div className="p-4 max-w-sm flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300 items-center">
            <Image src="/svg/git.svg" width="40" height="40" />
            <p className="">Git</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/javascript.svg" width="40" height="40" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="flex  justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/typescript.svg" width="40" height="40" />
            <p>Typescript</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/react.svg" width="40" height="40" />
            <p>React.js</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/ruby.svg" width="40" height="40" />
            <p>Ruby</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm  flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/ror.svg" width="40" height="40" />
            <p>Rails</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/html.svg" width="40" height="40" />
            <p>HTML5</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/css.svg" width="40" height="40" />
            <p>CSS</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/bootstrap.svg" width="40" height="35" />
            <p>Bootstrap</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 max-w-sm flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
            <Image src="/svg/tailwind.svg" width="40" height="40" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKills;
