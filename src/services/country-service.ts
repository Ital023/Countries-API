import axios from "axios";
import { CountryCardDTO } from "../models/CountryCardDTO";
import { BASE_URL } from "../utils/system";
import { CountryCardDetailDTO } from "../models/CountryCardDetailDTO";
import { Currency } from "../models/Currencies";
import { BorderCountryNameDTO } from "../models/BorderCountryNameDTO";

export function findAllRequest() {
  return axios.get(`${BASE_URL}/all`);
}

export function findById(id: string) {
  return axios.get(`${BASE_URL}/alpha/${id}`)
}

export function findByName(countryName: string) {
  return axios.get(`${BASE_URL}/name/${countryName}`)
}

export function findByRegion(region: string) {
  return axios.get(`${BASE_URL}/region/${region}`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCountryCardInfos(response: any[]): CountryCardDTO[] {
  const countries: CountryCardDTO[] = [];

  const sortedCountries = sortCountriesAlphabetically(response);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortedCountries.map((x: { cca3: any; flags: any; name: { common: any; }; population: any; subregion: any; capital: any; }) => {

    const formatedNumber: number = x.population.toLocaleString('en-US');


    const country: CountryCardDTO = {
      id: x.cca3,
      flags: x.flags,
      name: x.name.common,
      population: formatedNumber,
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

   let countryDTO: CountryCardDetailDTO = {
     id: "",
     name: "",
     nativeName: "",
     population: 0,
     region: "",
     subregion: "",
     capital: "",
     tld: [],
     currencies: "",
     languages: "",
     flags: {
       png: "",
       svg: "",
       alt: ""
     },
     borders: []
   }

   if (country) {

    const objectNativeName = Object.assign(country.name.nativeName);
    const valueNativeName: { common: string }[]  = Object.values(objectNativeName);
    const nativeName = valueNativeName[0].common;

    const objectLanguages = Object.assign(country.languages);
    const valuesLanguages = Object.values(objectLanguages);
    const concatenatedLanguages = valuesLanguages.join(", ");    

    const objectCurrencies = Object.assign(country.currencies);
    const valuesCurrencies = Object.values(objectCurrencies) as Currency[];
    const arrayCurrencies: string[] = [];

    valuesCurrencies.map((currency: Currency) => {
      const nameCurrency = currency.name;
      arrayCurrencies.push(nameCurrency);
    })
    
    const concatenatedCurrencies = arrayCurrencies.join(", ");    

    const formatedNumber: number = country.population.toLocaleString('en-US');

    
     countryDTO = {
      id: country.cca3,
      name: country.name.common,
      flags: country.flags,
      nativeName: nativeName,
      population: formatedNumber,
      region: country.region,
      capital: country.capital,
      tld: country.tld,
      currencies: concatenatedCurrencies,
      languages: concatenatedLanguages,
      subregion: country.subregion,
      borders: country.borders
     };

     return countryDTO;
   }

   return countryDTO;
 }


 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export function getBordersById(response: any): BorderCountryNameDTO {
  const responseOfficial = response[0];  

  let borderCountryNameDTO: BorderCountryNameDTO = {
    name: ""
  }

  if(responseOfficial) {
    borderCountryNameDTO = {
      name: responseOfficial.name.common 
    }
  }
  return borderCountryNameDTO;
}
