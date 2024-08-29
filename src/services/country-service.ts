import axios from "axios";
import { CountryCardDTO } from "../models/CountryCardDTO";
import { BASE_URL } from "../utils/system";
import { CountryCardDetailDTO } from "../models/CountryCardDetailDTO";

export function findAllRequest() {
  return axios.get(`${BASE_URL}/all`);
}

export function findById(id: string) {
  return axios.get(`${BASE_URL}/alpha/${id}`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCountryCardInfos(response: any[]): CountryCardDTO[] {
  const countries: CountryCardDTO[] = [];

  const sortedCountries = sortCountriesAlphabetically(response);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortedCountries.map((x: { cca3: any; flags: any; name: { common: any; }; population: any; subregion: any; capital: any; }) => {
    const country: CountryCardDTO = {
      id: x.cca3,
      flags: x.flags,
      name: x.name.common,
      population: x.population,
      region: x.subregion,
      capital: x.capital,
    };

    countries.push(country);
  });

  return countries;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortCountriesAlphabetically(response: any[]) {
  return response.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
}

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export function getCountryById(response: any): CountryCardDetailDTO {
  const country = response[0];

   let countryDTO: CountryCardDetailDTO

   if (country) {
     countryDTO = {
      id: country.cca3,
      flags: country.flags,
      nativeName: country.nativeName,
      population: country.population,
      region: country.subregion,
      capital: country.capital,
     };

     return countryDTO;
   }
   return countryDTO;
 }


