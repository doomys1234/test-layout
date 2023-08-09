import Navigation from "../Navigation/Navigation";
import './Header.scss'
export const Header = () => {
    
    return (
        <header className="header">
            <div className="header-wrapper">
                <a href="" className="header-logo">Logo</a>
            <Navigation/>
            </div>
    </header>
)
}
export default Header;