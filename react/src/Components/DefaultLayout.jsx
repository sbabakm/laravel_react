import { Outlet, Link, Navigate } from "react-router-dom";
import {useContext, useEffect} from 'react';
import appApi from '../Api/appAxios';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

//import contexts
import AppContext from "../Contexts/AppContext";

function DefaultLayout() {

    const appContext = useContext(AppContext);

    if(!appContext.token){
       return <Navigate to="/login" />
    }

    useEffect(() => {
        appApi.get('/user')
            .then((response) => {
                appContext.setUser(response.data);
            })
            .catch(err => console.log(err))
    },[]);

    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Sidebar /> */}
        </>
    );
}

export default DefaultLayout;
