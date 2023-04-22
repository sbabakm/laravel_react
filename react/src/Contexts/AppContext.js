import {createContext} from 'react';

const AppContext = createContext({
    user : '',
    token : '',
    notification : '',
    setUser : () => {},
    setToken : () => {},
    setNotification : () => {},
}); 

export default AppContext;