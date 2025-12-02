import { Link, Outlet } from "react-router-dom";
import './index.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";

export default function Layout() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);
    return (
        <div className="layout">
            <nav className="navigation">
                <Link to={'/'}>about</Link>
                <Link to={'/board'}>board</Link>
                <Link to={'/month'}>month</Link>
                <Link to={'/year'}>year</Link>
                <Link to={'/new'}>new</Link>
                <Link to={'/login'}>前往登录</Link>
            </nav>
            <Outlet />
        </div>
    );
}