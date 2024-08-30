import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as countryService from "../../../services/country-service";
import BackButton from "../../../components/BackButton";
import CountryCardDetails from "../../../components/CountryCardDetails";
import { CountryCardDetailDTO } from "../../../models/CountryCardDetailDTO";

export default function CountryDetails() {
  const { countryId } = useParams();

  const [country, setCountry] = useState<CountryCardDetailDTO>();

  useEffect(() => {
    if (countryId) {

      countryService.findById(String(countryId)).then((response) => {
        const countryData = countryService.getCountryById(response.data);
        setCountry(countryData);
        console.log(countryData);
        
      });
    }
  }, [countryId]);

  return (
    <main className="bg-lightMode-primary min-h-[calc(100vh-5rem)] px-7 pt-10 pb-16 lg:pb-0 dark:bg-darkMode-primary">
      <div className="lg:max-w-[1240px] container md:mx-auto">
        <div className="flex flex-col gap-16">
          <BackButton />
          {
            country &&
            <CountryCardDetails country={country}/>

          }
        </div>
      </div>
    </main>
  );
}
