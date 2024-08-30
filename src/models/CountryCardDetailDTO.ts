import { Currency } from "./Currencies";
import { Flags } from "./Flags"

export type CountryCardDetailDTO = {
    id: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string[];
    currencies: {[key: string]: Currency};
    languages: string;
    flags: Flags;    
}
