import { Flags } from "./flags"

export type CountryCardDTO = {
    flags: Flags,
    name: string, 
    population: number,
    region: string,
    capital: string
}