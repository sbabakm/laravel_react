import {useState} from 'react';
import { Routes, Route } from "react-router-dom";

//import components
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";

//import views
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Users from "./Views/Users";
import CreateUser from "./Views/CreateUser";
import EditUser from "./Views/EditUser";

//import contexts
import AppContext from "./Contexts/AppContext";

function App() {

    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken  = (token) => {
      _setToken(token);
      if(token) {
        localStorage.setItem("ACCESS_TOKEN", token);
      }
      else{
        localStorage.removeItem("ACCESS_TOKEN");
      }
    }

    return (
        <>
            <AppContext.Provider value={{
                user : user,
                token : token,
                setUser : setUser,
                setToken : setToken
            }}>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="users" element={<Users />} />
                        <Route path="users/create" element={<CreateUser />} />
                        <Route path="users/edit/:id" element={<EditUser />} />
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
