/*Import des libraries utiliser*/

import { NavLink } from "react-router-dom"



function Header() {
    return (
        <div className='header'>
            <img id="logo" src={require("../assets/logo_desktop_red.png")} alt="logo Kasa"/>

            <nav>
                <NavLink className="NavLink" to="/" end="/" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none' })} >Accueil</NavLink>
                <NavLink className="NavLink" to="/about" end="/about" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none' })}>A Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header