import CountryCard from "../../../components/CountryCard";
import FilterRegion from "../../../components/FilterRegion";
import SearchBar from "../../../components/SearchBar";

export default function Countries() {
  return (
    <main className="bg-lightMode-primary min-h-screen  px-4 pt-6 pb-16 dark:bg-darkMode-primary">
      <div className="lg:max-w-[1240px] container md:mx-auto">

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <SearchBar />
            <FilterRegion />
          </div>

          <div className="flex flex-col gap-10 md:grid xl:grid-cols-4 lg:grid-cols-2">
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />

            

          </div>
        </div>

      </div>
    </main>
  );
}
