import imgCountry from "../../assets/Germany.png";

export default function CountryCard() {
  return (
    <div className="w-68 h-86 bg-lightMode-quaternary mx-auto rounded dark:bg-darkMode-tertiary shadow-md">
      <div className="w-full h-40">
        <img src={imgCountry} alt="" className="rounded-t" />
      </div>

      <div className="h-44 p-6 flex flex-col gap-4">
        <h2 className="font-extrabold text-lightMode-tertiary text-lg dark:text-darkMode-secondary">
          Germany
        </h2>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Population:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              81.770.900
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Region:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              Europe
            </span>
          </p>
          <p className="font-semibold text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
            Capital:{" "}
            <span className="font-normal text-sm text-lightMode-tertiary dark:text-darkMode-secondary">
              Berlin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
