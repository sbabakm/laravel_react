import { Outlet, Link } from "react-router-dom";
import {useContext} from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

//import contexts
import AppContext from "../Contexts/AppContext";

function DefaultLayout() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Sidebar /> */}
        </>
    );
}

export default DefaultLayout;
