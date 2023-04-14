import {createContext} from 'react';

const AppContext = createContext({
    user : '',
    token : '',
    setUser : () => {},
    setToken : () => {},
}); 

export default AppContext;