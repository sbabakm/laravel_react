import {Link} from "react-router-dom";
import {useContext} from 'react';

//import contexts
import AppContext from "../Contexts/AppContext";
import appApi from "../Api/appAxios";

export default function Navbar() {

    const appContext = useContext(AppContext);

    const onLogout = (ev) => {
        ev.preventDefault();
        appApi.post('/logout')
            .then(() => {
                appContext.setUser({});
                appContext.setToken(null);
            })
            .catch(err => console.log(err))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Laravel-React
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/users"
                                className="nav-link active"
                                aria-current="page"
                            >
                                users
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                       <span>{ appContext.user.name }</span>
                        <span>
                            <button className="btn" onClick={onLogout}>logout</button>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
