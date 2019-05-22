import Logo from "./Logo";
import Nav from "./Nav";

const Header = (props) => {
    return (
        <header className="bg-green-600">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <Logo src="/static/xcaret-logo.svg" className="max-w-xs" />
                <Nav />
            </div>
        </header>
    )
};

export default Header;