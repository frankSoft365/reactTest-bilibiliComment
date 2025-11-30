import { Link, Outlet } from "react-router-dom";
import './index.css';

export default function Layout() {
    return (
        <div className="layout">
            <nav className="navigation">
                <Link to={'/'}>about</Link>
                <Link to={'/board'}>board</Link>
                <Link to={'/login'}>前往登录</Link>
            </nav>
            <Outlet />
        </div>
    );
}