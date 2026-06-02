import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";

const NabBar = () =>{
    const {isLogged, logout} = useAuth()

    return(
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : classes.link}>Listanézet</NavLink>

            {isLogged && <NavLink to='from' className={({isActive}) =>isActive ? classes.active : classes.link}>Új facsemete</NavLink>}

            {!isLogged ? <NavLink to='login' className={({isActive}) =>isActive ? classes.active : classes.link}>Bejelentkezés</NavLink> : <a onClick={logout} className={classes.isActive}>Kijelentkezés</a>}
        </nav>
    )
} 

export default NavBar