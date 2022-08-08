/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const Card = ({ texto, imagen, github, deploy, alt }) => {
  return (
    <div className="max-w-sm mx-8 my-8 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <img src={imagen} className="h-auto w-full" alt={alt} />
      <div className="p-6">
        <p className="text-medium font-semibold mb-5 text-gray-700">{texto}</p>
        <div className="flex flex-row justify-between">
          <a
            href={github}
            className="w-1/4 mt-1 mb-1 p-7 rounded-md bg-gray-800  py-2 text-indigo-100 hover:bg-gray-600 hover:shadow-md duration-75"
          >
            <GitHubIcon />
          </a>
          <a
            href={deploy}
            className="w-1/4 mt-1 mb-1 p-7 rounded-md bg-gray-800  py-2 text-indigo-100 hover:bg-gray-600 hover:shadow-md duration-75"
          >
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
