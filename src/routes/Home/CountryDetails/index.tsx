import { useEffect, useState } from "react";
import { CountryCardDTO } from "../../../models/CountryCardDTO";
import { useParams } from "react-router-dom";
import * as countryService from "../../../services/country-service";
import BackButton from "../../../components/BackButton";
import CountryCardDetails from "../../../components/CountryCardDetails";

export default function CountryDetails() {
  const params = useParams();

  const [country, setCountry] = useState<CountryCardDTO>();

  useEffect(() => {
    console.log(String(params.countryId));
    
    countryService.findById(String(params.countryId)).then((response) => {
      setCountry(countryService.getCountryById(response.data));
      console.log(country);
    });
  }, []);

  return (
    <main className="bg-lightMode-primary min-h-screen px-7 pt-10 pb-16 dark:bg-darkMode-primary ">
      <div className="lg:max-w-[1240px] container md:mx-auto">
        <div className="flex flex-col gap-16">
          <BackButton />
          <CountryCardDetails />
        </div>
      </div>
    </main>
  );
}
