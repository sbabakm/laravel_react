import {Outlet, Navigate} from 'react-router-dom';
import {useContext} from 'react';

//import contexts
import AppContext from "../Contexts/AppContext";

function GuestLayout(){

    const appContext = useContext(AppContext);

    if(appContext.token){
       return <Navigate to="/" />
    }

    return (
        <>
            Guest Layout
            <Outlet />
        </>
    )
}

export default GuestLayout;
