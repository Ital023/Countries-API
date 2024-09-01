type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onFilter: Function
}

export default function FilterRegion({onFilter}: Props) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    onFilter(event.target.value);
  }

  return (
    <select name="region" className="w-50 px-2 py-3.5 outline-none rounded text-sm font-normal dark:bg-darkMode-tertiary dark:text-darkMode-secondary" onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
