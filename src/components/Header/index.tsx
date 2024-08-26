import darkModeIcon from "../../assets/DarkModeIcon.svg"

export default function Header() {
    return(
        <header className="bg-white h-20">
            <h1>Where in the world?</h1>

            <div>
                <img src={darkModeIcon} alt="" />
            </div>
        </header>
    );
}