import { useEffect, useState } from "react";
import { CountryCardDTO } from "../../../models/CountryCardDTO";
import { useParams } from "react-router-dom";
import * as countryService from "../../../services/country-service"
import CountryCard from "../../../components/CountryCard";


export default function CountryDetails() {

    const params = useParams();

    const[country, setCountry] = useState<CountryCardDTO>();

    useEffect(()=>{
        setCountry(countryService.getCountryById(String(params.countryId)))
    },[])

    return(
        <div className="flex flex-col gap-10 md:grid xl:grid-cols-4 md:grid-cols-2">
            {   country &&
                <CountryCard key={country.id} id={country.id} imgFlag={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} />
              
            }

          </div>
    );
}