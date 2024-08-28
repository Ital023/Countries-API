import { data } from "../data/data";
import { CountryCardDTO } from "../models/CountryCardDTO";

export function getCountryCardInfos(): CountryCardDTO[] {
  const countries: CountryCardDTO[] = [];

  data.map((x) => {
    const country: CountryCardDTO = {
      id: x.alpha3Code,
      flags: x.flags,
      name: x.name,
      population: x.population,
      region: x.region,
      capital: x.region,
    };

    countries.push(country);
  });

  return countries;
}

export function getCountryById(id: string): CountryCardDTO {
  const country = data.find((x) => id === x.alpha3Code);
  let countryDTO: CountryCardDTO = {
      id: "",
      flags: {
          png: "",
          svg: ""
      },
      name: "",
      population: 0,
      region: "",
      capital: ""
  }
  if(country) {
     countryDTO = {
        id: country.alpha3Code,
        flags: country.flags,
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.region,
      };
      return countryDTO;
  }
    return countryDTO;
}
