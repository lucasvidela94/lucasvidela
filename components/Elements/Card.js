import React from "react";

const Card = ({ texto, imagen }) => {
  return (
    <div className="max-w-sm mx-8 my-8 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <img src={imagen} alt="project" className="h-auto w-full" />
      <div className="p-5">
        <p className="text-medium mb-5 text-gray-700">{texto}</p>
        <button className="w-full rounded-md bg-gray-800  py-2 text-indigo-100 hover:bg-gray-600 hover:shadow-md duration-75">
          Link al repositorio
        </button>
      </div>
    </div>
  );
};

export default Card;
