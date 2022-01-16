import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.navbarItems}>
                <div>
                    <NavLink to="/profile"   >Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/messages"    >Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users"   >Users</NavLink>
                </div>
                <div>
                    <NavLink to="/news">News</NavLink>
                </div>

            </div>



        </nav>
    )
}

export default Navbar;

