import { Link } from "react-router-dom";
import { CountryCardDTO } from "../../models/CountryCardDTO";

type Props = {
  country: CountryCardDTO
}

export default function CountryCard({country}:Props) {
  return (
    <Link to={`/countries/${country.id}`}>
    <div className="w-68 h-88 bg-lightMode-quaternary mx-auto rounded dark:bg-darkMode-tertiary shadow-md">
      <div className="w-full h-40">
        <img src={country.flags.svg} alt={country.flags.alt} className="rounded-t h-full w-full object-cover" />
      </div>

      <div className="h-46 p-6 flex flex-col gap-4">
        <span className="hidden">{country.id}</span>
        <h2 className="line-clamp-1 font-extrabold text-lightMode-tertiary text-lg dark:text-darkMode-secondary">
          {country.name}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Population:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {country.population}
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Region:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {country.region}
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Capital:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {country.capital}
            </span>
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
}
