import React, { useEffect } from "react";
import { useState } from "react";

const Button = () => {
  React.useEffect(() => {
    const showOnPx = 100;
    const backToTopButton = document.getElementById("to-top-button");

    const scrollContainer = () => {
      return document.documentElement || document.body;
    };

    document.addEventListener("scroll", () => {
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.add("hidden");
      }
    });
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth",
      });
    };
    backToTopButton.addEventListener("click", goToTop);
  }, []);

  return (
    <>
      <button
        id="to-top-button"
        title="Go To Top"
        className="hidden fixed z-90 bottom-12 mb-14 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-zinc-400 text-white text-3xl font-bold"
      >
        &uarr;
      </button>
    </>
  );
};

export default Button;
