import { CountryCardDetailDTO } from "../../models/CountryCardDetailDTO";
import BorderCountryCard from "../BorderCountryCard";
import CountryCardDetailsInfos from "../CountryCardDetailsInfos";

type Props = {
    country: CountryCardDetailDTO;
}


export default function CountryCardDetails({country} : Props) {
  return (
    <div className="flex flex-col gap-11 lg:flex-row lg:gap-36">

        <div className="xs:min-w-80 md:w-80 lg:w-136">
            <img src={country.flags.svg} alt={country.flags.alt} className="w-full max-h-56 lg:min-h-106 rounded shadow object-cover"/>
        </div>
        
        <div className="flex flex-col gap-4 lg:gap-7">
            <h2 className="text-lightMode-tertiary dark:text-darkMode-secondary font-extrabold text-2xl lg:text-4xl">{country.name}</h2>

            <div className="flex flex-col gap-8 lg:gap-18">

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">

                
                <div className="flex flex-col gap-3">
                    <CountryCardDetailsInfos contentName={"Native Name"} content={country.name} />
                    <CountryCardDetailsInfos contentName={"Population"} content={String(country.population)} />
                    <CountryCardDetailsInfos contentName={"Region"} content={country.region} />
                    <CountryCardDetailsInfos contentName={"Sub Region"} content={country.subregion} />
                    <CountryCardDetailsInfos contentName={"Capital"} content={country.capital} />

                </div>

                <div className="flex flex-col gap-3">

                    <CountryCardDetailsInfos contentName={"Top Level Domain"} content={country.tld} />

                    <CountryCardDetailsInfos contentName={"Currencies"} content={country.currencies} />

                    <CountryCardDetailsInfos contentName={"Languages"} content={country.languages} />

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
