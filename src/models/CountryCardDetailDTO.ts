import { Currency } from "./Currencies";
import { Flags } from "./Flags"
import { LanguageCode } from "./NativeName";

export type CountryCardDetailDTO = {
    id: string;
    name: string;
    nativeName: { [key: string]: LanguageCode };
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string[];
    currencies: {[key: string]: Currency};
    languages: { [key: string]: string };
    flags: Flags;    
}
