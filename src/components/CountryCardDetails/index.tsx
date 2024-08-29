import BorderCountryCard from "../BorderCountryCard";

export default function CountryCardDetails() {
  return (
    <div className="flex flex-col gap-11">

        <div className="xs:w-80 ">
            <img src={"https://flagcdn.com/w320/be.png"} alt="test" className="w-full max-h-56 rounded shadow"/>
        </div>
        
        <div className="flex flex-col gap-4">
            <h2 className="text-lightMode-tertiary dark:text-darkMode-secondary font-extrabold text-2xl">Belgium</h2>

            <div className="flex flex-col gap-8">

                <div className="flex flex-col gap-3">
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Native Name: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">België</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Population: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">11,319,511</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Region: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">Europe</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Sub Region: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">Western Europe</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Capital: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">Brussels</span></p>
                </div>

                <div className="flex flex-col gap-3">

                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Top Level Domain: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">.be</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Currencies: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">Euro</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary">Languages: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary">Dutch, French, German</span></p>

                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lightMode-tertiary font-bold text-base dark:text-darkMode-secondary">Border Countries: </h3>
                    <div className="grid grid-cols-2 xs:grid-cols-3 gap-3">
                        <BorderCountryCard name="France"/>
                        <BorderCountryCard name="Germany"/>
                        <BorderCountryCard name="Netherlands"/>
                    </div>
                </div>

            </div>
        
        </div>

    </div>
  );
}
