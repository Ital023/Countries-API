import axios from "axios";
import { CountryCardDTO } from "../models/CountryCardDTO";
import { BASE_URL } from "../utils/system";

export function findAllRequest() {
  return axios.get(`${BASE_URL}/all`);
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

// export function getCountryById(id: string): CountryCardDTO {
//   const country = data.find((x: { alpha3Code: string; }) => id === x.alpha3Code);
//   let countryDTO: CountryCardDTO = {
//     id: "",
//     flags: {
//       png: "",
//       svg: "",
//     },
//     name: "",
//     population: 0,
//     region: "",
//     capital: "",
//   };
//   if (country) {
//     countryDTO = {
//       id: country.alpha3Code,
//       flags: country.flags,
//       name: country.name,
//       population: country.population,
//       region: country.region,
//       capital: country.region,
//     };
//     return countryDTO;
//   }
//   return countryDTO;
// }
