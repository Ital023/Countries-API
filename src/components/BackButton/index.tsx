import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to={"/"}>
      <button className="bg-lightMode-quaternary shadow-lg w-26 py-1.5 flex flex-row justify-center items-center gap-2 rounded-sm dark:bg-darkMode-tertiary">
        <FontAwesomeIcon icon={faArrowLeft} className="dark:text-darkMode-secondary"/>
        <span className="text-lightMode-tertiary text-sm dark:text-darkMode-secondary">Back</span>
      </button>
    </Link>
  );
}
