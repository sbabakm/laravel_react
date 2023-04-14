import {useState} from 'react';
import { Routes, Route } from "react-router-dom";

//import components
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";

//import views
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Users from "./Views/Users";

//import contexts
import AppContext from "./Contexts/AppContext";

function App() {

    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);

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
