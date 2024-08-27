import FilterRegion from "../../../components/FilterRegion";
import SearchBar from "../../../components/SearchBar";

export default function Countries() {
  return (
    <main className="bg-lightMode-primary h-screen px-4 pt-6 pb-16">
      <div className="lg:max-w-[1240px] container md:mx-auto">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between ">
          <SearchBar />
          <FilterRegion/>
        </div>
      </div>
    </main>
  );
}
