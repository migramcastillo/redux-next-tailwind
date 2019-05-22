import SelectCurrency from "./SelectCurrency";
import SelectLanguage from "./SelectLanguage";


const Nav = (props) => {
    return (
        <nav className="flex items-center">
            <div className="mx-2 text-white">
                <a role="button">
                    Home
                </a>
            </div>
            <div className="mx-2 text-white">
                <a role="button">
                    FAQ
                </a>
            </div>
            <div className="mx-2">
                <SelectCurrency />
            </div>
            <div className="mx-2">
                <SelectLanguage />
            </div>
        </nav>
    );
} 

export default Nav;