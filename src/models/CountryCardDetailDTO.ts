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
    currencies: string;
    languages: string;
    flags: Flags;
    borders: string[];    
}
