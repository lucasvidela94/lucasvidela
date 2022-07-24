import Image from "next/image";

const SkillCard = ({ image, alt, name }) => {
  return (
    <div className=" mx-4 my-5 w-21 p-4 flex flex-col items-center bg-white rounded-xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-stone-100 dark:border-gray-700 dark:hover:bg-stone-300">
      <Image src={image} width="40" height="40" alt={alt} />
      <p>{name}</p>
    </div>
  );
};

const SKills = () => {
  return (
    <div
      className="flex w-screen flex-col flex-start content-center justify-center p-28"
      id="skills"
    >
      <div className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-500">
          Current Stack:
        </h2>
        <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
          Im recently working with this tech.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <SkillCard image="/svg/react.svg" alt="react.js" name="React.js" />
        <SkillCard image="/svg/ruby.svg" alt="ruby" name="Ruby" />
        <SkillCard image="/svg/ror.svg" alt="ruby on rails" name="Rails" />
        <SkillCard image="/svg/css.svg" alt="css" name="CSS" />
        <SkillCard
          image="/svg/bootstrap.svg"
          alt="bootstrap"
          name="Bootstrap"
        />
        <SkillCard image="/svg/tailwind.svg" alt="tailwind" name="Tailwind" />
      </div>
      <br />
      <div className=" text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-500">
          My complete stack:
        </h2>
        <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
          Im familiarized and i have worked with this tech.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly content-center flex-wrap ">
        <SkillCard image="/svg/git.svg" alt="git" name="Git" />
        <SkillCard
          image="/svg/javascript.svg"
          alt="javascript"
          name="JavaScript"
        />
        <SkillCard
          image="/svg/typescript.svg"
          alt="typescript"
          name="Typescript"
        />
        <SkillCard image="/svg/html.svg" alt="html" name="HTML5" />
        <SkillCard image="/svg/react.svg" alt="react.js" name="React.js" />
        <SkillCard image="/svg/ruby.svg" alt="ruby" name="Ruby" />
        <SkillCard image="/svg/ror.svg" alt="ruby on rails" name="Rails" />
        <SkillCard image="/svg/html.svg" alt="html" name="HTML5" />
      </div>
    </div>
  );
};

export default SKills;
