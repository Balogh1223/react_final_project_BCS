import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";
import classes from "./NavBar.module.css"

const NavBar = () =>{
    const {isLogged, logout} = useAuth()

    return(
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : classes.link}>Listanézet</NavLink>

            {isLogged && <NavLink to='form' className={({isActive}) =>isActive ? classes.active : classes.link}>Új facsemete</NavLink>}

            {!isLogged ? <NavLink to='login' className={({isActive}) =>isActive ? classes.active : classes.link}>Bejelentkezés</NavLink> : <a onClick={logout} className={classes.IsActive}>Kijelentkezés</a>}
        </nav>
    )
} 

export default NavBar