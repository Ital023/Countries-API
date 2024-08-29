import { Flags } from "./Flags"

export type CountryCardDetailDTO = {
    id: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    currencies: string;
    Languages: string;
    flags: Flags;    
}