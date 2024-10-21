import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'coral',
        color: 'white'
    };

    return (
        <div>
            <ul>
                <li><NavLink to="/main" style={({ isActive }) => isActive ? activeStyle : undefined}>HOME</NavLink></li>
                <li><NavLink to="/login" style={({ isActive }) => isActive ? activeStyle : undefined}>LOGIN</NavLink></li>
                <li><NavLink to="/mypage" style={({ isActive }) => isActive ? activeStyle : undefined}>MyPage</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>INFO</NavLink></li>
                <li><NavLink to="/menu" style={({ isActive }) => isActive ? activeStyle : undefined}>MENU LIST</NavLink></li>
            </ul>
        </div>
    );

}

export default Navbar;