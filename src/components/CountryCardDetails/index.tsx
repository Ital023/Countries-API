import { CountryCardDetailDTO } from "../../models/CountryCardDetailDTO";
import BorderCountryCard from "../BorderCountryCard";

type Props = {
    country: CountryCardDetailDTO;
}


export default function CountryCardDetails({country} : Props) {
  return (
    <div className="flex flex-col gap-11 lg:flex-row lg:gap-36">

        <div className="xs:min-w-80 md:w-80 lg:w-136">
            <img src={country.flags.png} alt={country.flags.alt} className="w-full max-h-56 lg:max-h-106 rounded shadow object-cover"/>
        </div>
        
        <div className="flex flex-col gap-4 lg:gap-7">
            <h2 className="text-lightMode-tertiary dark:text-darkMode-secondary font-extrabold text-2xl lg:text-4xl">{country.name}</h2>

            <div className="flex flex-col gap-8 lg:gap-18">

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">

                
                <div className="flex flex-col gap-3">
                    <p className="text-lightMode-tertiary font-bold text-sm md:text-base dark:text-darkMode-secondary">Native Name: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">België</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Population: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">11,319,511</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Region: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">Europe</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Sub Region: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">Western Europe</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Capital: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">Brussels</span></p>
                </div>

                <div className="flex flex-col gap-3">

                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Top Level Domain: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">.be</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Currencies: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">Euro</span></p>
                    <p className="text-lightMode-tertiary font-bold text-sm dark:text-darkMode-secondary md:text-base">Languages: <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">Dutch, French, German</span></p>

                </div>

                </div>
                <div className="flex flex-col gap-4 lg:flex-row sm:items-center">
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
