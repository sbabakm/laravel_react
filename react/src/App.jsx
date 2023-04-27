import {useState} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";


//import components
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";

//import views
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Users from "./Views/Users";
import CreateUser from "./Views/CreateUser";
import EditUser from "./Views/EditUser";
import Dashboard from "./Views/Dashboard";
import CreateBdgHeader from "./Views/CreateBdgHeader";
import CreateBdgItems from "./Views/CreateBdgItems";

//import contexts
import AppContext from "./Contexts/AppContext";


function App() {

    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [notification, _setNotification] = useState(null);

    const setToken  = (token) => {
      _setToken(token);
      if(token) {
        localStorage.setItem("ACCESS_TOKEN", token);
      }
      else{
        localStorage.removeItem("ACCESS_TOKEN");
      }
    }

    const setNotification = (notif) => {
        _setNotification(notif);
        setTimeout(() => {
            _setNotification(null);
        },3000)
    }

    return (
        <>
            <AppContext.Provider value={{
                user : user,
                token : token,
                notification : notification,
                setUser : setUser,
                setToken : setToken,
                setNotification : setNotification
            }}>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<Navigate to="/users" />} />
                        <Route path="users" element={<Users />} />
                        <Route path="users/create" element={<CreateUser />} />
                        <Route path="users/edit/:id" element={<EditUser />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="bdg/create/header" element={<CreateBdgHeader />} />
                        <Route path="bdg/create/items" element={<CreateBdgItems />} />
                    </Route>

                    <Route path="/" element={<GuestLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </AppContext.Provider>
        </>
    );
}

export default App;
