import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/pokemons">Pokemon List</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
