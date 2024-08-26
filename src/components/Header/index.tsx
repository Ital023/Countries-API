import darkModeIcon from "../../assets/DarkModeIcon.svg";

export default function Header() {
  return (
    <header className="bg-white h-20 flex justify-center content-center shadow-sm">
      <div className="container px-4 flex flex-row items-center justify-between h-full">
        <h1 className="font-extrabold text-sm md:text-2xl text-lightMode-VeryDarkBlue">
          Where in the world?
        </h1>

        <div className="flex flex-row justify-between items-center gap-2">
          <img src={darkModeIcon} alt="Dark mode icon" className="w-4 md:w-5 md:h-5 h-4" />
          <p className="font-semibold text-xs md:text-base text-lightMode-VeryDarkBlue">
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
}
