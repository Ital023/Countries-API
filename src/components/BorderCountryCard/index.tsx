import { useEffect, useState } from "react";
import * as countryService from "../../services/country-service";
import { useParams } from "react-router-dom";
import { BorderCountryNameDTO } from "../../models/BorderCountryNameDTO";
import { Link } from "react-router-dom";


type Props = {
    id: string;
    name?: string;
}

export default function BorderCountryCard({ id }: Props) {    
    const { countryId } = useParams();    

    const [countryName, setCountryName] = useState<string>();

    useEffect(()=>{
        countryService.findById(id).then(response => {
            const countryNameData: BorderCountryNameDTO = countryService.getBordersById(response.data);
            setCountryName(countryNameData.name);
                       
        })
    },[countryId])


    return(
        <Link to={`/countries/${id}`}>
        <button className="w-24 py-1.5  rounded-sm shadow-md bg-lightMode-quaternary dark:bg-darkMode-tertiary">
            <p className="text-lightMode-tertiary text-xs font-medium dark:text-darkMode-secondary">{countryName}</p>
        </button>
        </Link>
    );
}