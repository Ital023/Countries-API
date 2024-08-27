export default function FilterRegion() {
  return (
    <select name="region" className="w-50 px-6 py-3.5 outline-none rounded text-sm font-normal">
      <option value="none">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
