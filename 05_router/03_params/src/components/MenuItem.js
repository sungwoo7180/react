import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function MenuItem({ menu }) {
    return (
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.MenuItem}>
                <h3>메뉴이름: {menu.menuName}</h3>
                <h3>판매가: {menu.menuPrice}</h3>
                <h3>구분: {menu.categoryName}</h3>
            </div>
        </Link>
    );
}

export default MenuItem;