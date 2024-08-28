import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to={"/"}>
      <button className="bg-lightMode-quaternary shadow-lg w-26 py-2 flex flex-row justify-center items-center gap-2 rounded-sm">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="text-lightMode-tertiary text-sm">Back</span>
      </button>
    </Link>
  );
}
