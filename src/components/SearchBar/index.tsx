import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <form className="w-full md:w-128 h-12 bg-lightMode-quaternary flex justify-center items-center rounded shadow-sm dark:bg-darkMode-tertiary">
      <div className="w-20 flex justify-center items-center cursor-pointer">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-lightMode-secondary dark:text-darkMode-secondary"
        />
      </div>

      <input
        type="text"
        placeholder="Search for a country…"
        className="h-full w-full px-2 outline-none placeholder:text-sm text-lightMode-secondary dark:bg-darkMode-tertiary dark:text-darkMode-secondary dark:placeholder:text-darkMode-secondary"
      />
    </form>
  );
}
