
type Props = {
  imgFlag: string, 
  name: string, 
  population: number, 
  region: string, 
  capital: string
}

export default function CountryCard({imgFlag, name, population, region, capital}:Props) {
  return (
    <div className="w-68 h-86 bg-lightMode-quaternary mx-auto rounded dark:bg-darkMode-tertiary shadow-md">
      <div className="w-full h-40">
        <img src={imgFlag} alt={name} className="rounded-t h-full w-full" />
      </div>

      <div className="h-44 p-6 flex flex-col gap-4">
        <h2 className="font-extrabold text-lightMode-tertiary text-lg dark:text-darkMode-secondary">
          {name}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Population:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {population}
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Region:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {region}
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Capital:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              {capital}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
