import {Outlet} from 'react-router-dom';

function DefaultLayout(){
    return (
        <>
            Default Layout
            <Outlet />
        </>
    )
}

export default DefaultLayout;