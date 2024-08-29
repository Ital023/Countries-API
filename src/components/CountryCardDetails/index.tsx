import flag from "../../assets/FLAG.png"

export default function CountryCardDetails() {
  return (
    <div className="">

        <div className="">
            <img src={flag} alt="test" className="min-w-72"/>
        </div>
            

        <div>
            <h2>Belgium</h2>

            <div>

                <div>
                    <p>Native Name: <span>België</span></p>
                    <p>Population: <span>11,319,511</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Sub Region: <span>Western Europe</span></p>
                    <p>Capital: <span>Brussels</span></p>
                </div>

                <div>

                    <p>Top Level Domain: <span>.be</span></p>
                    <p>Currencies: <span>Euro</span></p>
                    <p>Languages: <span>Dutch, French, German</span></p>

                </div>

                <div>
                    <h3>Border Countries: </h3>
                </div>

            </div>
        
        </div>

    </div>
  );
}
