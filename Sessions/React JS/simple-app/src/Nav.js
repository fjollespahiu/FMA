import "./Nav.css";
import logo from "./fma-logo.png";

function Nav(){
    return (
        <>
        <nav>
            <div>
                <img src={logo} />
            </div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </>
        );
}

export default Nav;