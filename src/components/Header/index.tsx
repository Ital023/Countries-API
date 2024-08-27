import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm">
      <div className="container px-4 flex flex-row items-center justify-between h-full">
        <h1 className="font-extrabold text-sm md:text-2xl text-lightMode-tertiary">
          Where in the world?
        </h1>

        <div className="flex flex-row justify-between items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faMoon} />
          <p className="font-semibold text-xs md:text-base text-lightMode-tertiary">
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
}
