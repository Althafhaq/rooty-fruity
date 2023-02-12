import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav_menu">
                <Link to="/">Home</Link>
            </div>
            <div className="nav_menu">
                <img className="brand" src="/images/logo.png" alt="" />
            </div>
            <div className="nav_menu">
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;