type Props = {
    contentName: string;
    content: string | string[];
}

export default function CountryCardDetailsInfos({contentName, content}: Props) {
  return (
    <p className="text-lightMode-tertiary font-bold text-sm md:text-base dark:text-darkMode-secondary">
      {contentName}:{" "}
      <span className="text-lightMode-tertiary font-medium text-sm dark:text-darkMode-secondary md:text-base">
        {content}
      </span>
    </p>
  );
}
