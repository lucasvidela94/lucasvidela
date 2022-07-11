import React from "react"
import { useState } from "react"



const Button = ()=> {
    const [_document, set_document] = React.useState(null)
    
    React.useEffect(() => {
        set_document(document)
    }, [])


    if (typeof window !== "undefined") {
        let toTopButton = document.getElementById("to-top-button");
    
        window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          toTopButton.classList.remove("hidden");
        } else {
          toTopButton.classList.add("hidden");
            }
        }
    }
        function goToTop() {
        console.log("Si estoy funcionando");
        window.scrollTo({ top: 0, behavior: 'smooth' });
            }

    return(
        <>
        <button id="to-top-button" onclick={goToTop} title="Go To Top"
        className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>
        </>
        )
}


export default Button