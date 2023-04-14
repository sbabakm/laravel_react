import { Outlet, Link } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Sidebar /> */}
        </>
    );
}

export default DefaultLayout;
