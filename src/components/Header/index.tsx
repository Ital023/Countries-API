import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  
  const [dark, setDark] = useState<boolean>(false);

  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm dark:bg-darkMode-tertiary">
      <div className="container px-4 flex flex-row items-center justify-between h-full">
        <Link to={"/"}>
          <h1 className="font-extrabold text-sm md:text-2xl text-lightMode-tertiary dark:text-darkMode-secondary">
            Where in the world?
          </h1>
        </Link>
        <div
          className="flex flex-row justify-between items-center gap-2 cursor-pointer"
          onClick={darkModeHandler}
        >
          {dark && (
            <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
          )}
          {!dark && (
            <FontAwesomeIcon icon={faMoon} style={{ color: "#000000" }} />
          )}

          <p className="font-semibold text-xs md:text-base text-lightMode-tertiary dark:text-darkMode-secondary">
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
}
