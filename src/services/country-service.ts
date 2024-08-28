import { data } from "../data/data";
import { CountryCardDTO } from "../models/CountryCardDTO";

export function getCountryCardInfos() {
    const countries: CountryCardDTO[] = [];

    data.map(x => {
        const country: CountryCardDTO = {
            flags: x.flags,
            name: x.name,
            population: x.population,
            region: x.region,
            capital: x.region
        }

        countries.push(country);
    });

    return countries;
}