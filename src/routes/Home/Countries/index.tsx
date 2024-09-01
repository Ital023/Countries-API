import { useEffect, useState } from "react";
import CountryCard from "../../../components/CountryCard";
import FilterRegion from "../../../components/FilterRegion";
import SearchBar from "../../../components/SearchBar";
import * as countryService from "../../../services/country-service"
import { CountryCardDTO } from "../../../models/CountryCardDTO";

type QueryParams = {
  countryName: string;
  selectedValue: string;
}

export default function Countries() {

  const [countriesCardDto, setCountriesCardDto] = useState<CountryCardDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    countryName: "",
    selectedValue: ""
  });

  function handleSelectChange(value: string) {
    setQueryParams({...queryParams, selectedValue: value});
  };

  function handleSearch(searchText: string) {
    setQueryParams({...queryParams, countryName: searchText})
  };


  useEffect(()=>{
    
     countryService.findAllRequest().then((response)=>{
       const result = response.data;
       setCountriesCardDto(countryService.getCountryCardInfos(result));    
    });

    if(queryParams.countryName !== "" || undefined || null) {
      countryService.findByName(queryParams.countryName).then((response)=> {
        const result = response.data;
        setCountriesCardDto(countryService.getCountryCardInfos(result));
      }).catch(() => {
        console.log("NAO ENCONTRADO");
        
      })
    }

    if(queryParams.selectedValue !== "" || undefined || null) {
      countryService.findByRegion(queryParams.selectedValue).then((response) => {
        const result = response.data;
        setCountriesCardDto(countryService.getCountryCardInfos(result));
      })
    }

  },[queryParams])

  
  
  return (
    <main className="bg-lightMode-primary min-h-[calc(100vh-5rem)] px-4 pt-6 pb-16 dark:bg-darkMode-primary">
      <div className="lg:max-w-[1240px] container md:mx-auto">

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <SearchBar onSearch={handleSearch} />
            <FilterRegion onFilter={handleSelectChange}/>
          </div>

          <div className="flex flex-col gap-10 md:grid xl:grid-cols-4 md:grid-cols-2">
            {
              countriesCardDto.map(country => (
                <CountryCard key={country.id} country={country} />
              ))
            }

          </div>
        </div>

      </div>
    </main>
  );
}
