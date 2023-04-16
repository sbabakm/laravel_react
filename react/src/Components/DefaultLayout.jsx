import { Outlet, Link, Navigate } from "react-router-dom";
import {useContext} from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

//import contexts
import AppContext from "../Contexts/AppContext";

function DefaultLayout() {

    const appContext = useContext(AppContext);

    if(!appContext.token){
       return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Sidebar /> */}
        </>
    );
}

export default DefaultLayout;
