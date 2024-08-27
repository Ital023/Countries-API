import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <form className="w-full md:w-128 h-12 bg-white flex justify-center items-center rounded shadow-sm">
      <div className="w-20 flex justify-center items-center cursor-pointer">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-lightMode-DarkGray"
        />
      </div>

      <input
        type="text"
        placeholder="Search for a country…"
        className="h-full w-full px-2 outline-none placeholder:text-sm text-lightMode-DarkGray"
      />
    </form>
  );
}
