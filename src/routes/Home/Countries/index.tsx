import { useEffect, useState } from "react";
import CountryCard from "../../../components/CountryCard";
import FilterRegion from "../../../components/FilterRegion";
import SearchBar from "../../../components/SearchBar";
import * as countryService from "../../../services/country-service"
import { CountryCardDTO } from "../../../models/CountryCardDTO";

export default function Countries() {

  const [countriesCardDto, setCountriesCardDto] = useState<CountryCardDTO[]>([]);

  useEffect(()=>{
    countryService.findAllRequest().then((response)=>{
      const result = response.data;
      setCountriesCardDto(countryService.getCountryCardInfos(result));      
    });
  },[])


  return (
    <main className="bg-lightMode-primary min-h-screen px-4 pt-6 pb-16 dark:bg-darkMode-primary">
      <div className="lg:max-w-[1240px] container md:mx-auto">

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <SearchBar />
            <FilterRegion />
          </div>

          <div className="flex flex-col gap-10 md:grid xl:grid-cols-4 md:grid-cols-2">
            {
              countriesCardDto.map(country => (
                <CountryCard key={country.id} id={country.id} imgFlag={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} alt={country.flags.alt} />
              ))
            }

          </div>
        </div>

      </div>
    </main>
  );
}
