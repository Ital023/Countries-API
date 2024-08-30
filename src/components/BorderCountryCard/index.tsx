type Props = {
    id?: string;
    name: string;
}

export default function BorderCountryCard({name, id}: Props) {
    return(
        <button className="w-24 py-1.5  rounded-sm shadow-md bg-lightMode-quaternary dark:bg-darkMode-tertiary">
            <p className="invisible">{id}</p>
            <p className="text-lightMode-tertiary text-xs font-medium dark:text-darkMode-secondary">{name}</p>
        </button>
    );
}