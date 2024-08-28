import { Flags } from "./Flags"

export type CountryCardDTO = {
    id: string;
    flags: Flags;
    name: string;
    population: number;
    region: string;
    capital: string;
}