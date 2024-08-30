import { Flags } from "./Flags"
import { NativeName } from "./NativeName";

export type CountryCardDetailDTO = {
    id: string;
    nativeName: NativeName;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    currencies: string;
    Languages: string;
    flags: Flags;    
}
