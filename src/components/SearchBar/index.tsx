import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onSearch: Function;
}

export default function SearchBar({onSearch}: Props) {

  const[text, setText] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    event.preventDefault();
    setText(event.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }


  return (
    <form className="w-full md:w-128 h-12 bg-lightMode-quaternary flex justify-center items-center rounded shadow-sm dark:bg-darkMode-tertiary" onSubmit={handleSubmit}>
      <button type="submit" className="w-20 flex justify-center items-center cursor-pointer">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-lightMode-secondary dark:text-darkMode-secondary"
        />
      </button>

      <input
        onChange={handleChange}
        type="text"
        placeholder="Search for a country…"
        className="h-full w-full px-2 outline-none placeholder:text-sm text-lightMode-secondary dark:bg-darkMode-tertiary dark:text-darkMode-secondary dark:placeholder:text-darkMode-secondary"
      />
    </form>
  );
}
