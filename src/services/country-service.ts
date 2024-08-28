import axios from "axios";
import { CountryCardDTO } from "../models/CountryCardDTO";
import { BASE_URL } from "../utils/system";

export function findAllRequest() {
  return axios.get(`${BASE_URL}/all`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCountryCardInfos(response: any[]): CountryCardDTO[] {
  const countries: CountryCardDTO[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.map((x) => {
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
