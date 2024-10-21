import { Link, NavLink } from 'react-router-dom';

/*
    [ <NavLink> 컴포넌트 ]
    NavLink 컴포넌트는 Link 컴포넌트와 사용이 거의 유사하다.
    하지만 현재 Nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나 클래스 이름을 변경할 수 있다.
*/

function Navbar() {

    const activeStyle = {
        backgroundColor: 'yellow'
    }

    return (
        <ul>
            {/* 
                <li><a href={"/"}>HOME</a></li>
                <li><a href={"/mypage"}>MyPage</a></li>
                <li><a href={"/login"}>LOGIN</a></li> 
            */}
            {/* 
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/mypage">MyPage</Link></li>
                <li><Link to="/login">LOGIN</Link></li> 
            */}
            {/* 
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>HOME</NavLink></li>
                <li><NavLink to="/mypage" style={({ isActive }) => isActive ? activeStyle : undefined}>MyPage</NavLink></li>
                <li><NavLink to="/login" style={({ isActive }) => isActive ? activeStyle : undefined}>LOGIN</NavLink></li>
             */}
            <nav>
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>HOME</NavLink>
                <NavLink to="/mypage" style={({ isActive }) => isActive ? activeStyle : undefined}>MyPage</NavLink>
                <NavLink to="/login" style={({ isActive }) => isActive ? activeStyle : undefined}>LOGIN</NavLink>
            </nav>
        </ul>
    );
}

export default Navbar;