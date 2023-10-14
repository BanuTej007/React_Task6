import { Link } from "react-router-dom";
import './nav.css'

function Nav(){
    return(
        <nav class="navbar p-5 name">
            <Link to="/" class="navbar-brand text-light"><h2>Banu Tej</h2></Link>
            <div class="nav link">
            <Link to="/" class="nav-link name"><p>Home</p></Link>
            <Link to="/about" class="nav-link"><p>About</p></Link>
            <Link to="/contact" class="nav-link"><p>Contact</p></Link>
            </div>
        </nav>
    )
}
export default Nav;