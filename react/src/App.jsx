import {Routes, Route} from 'react-router-dom';

//import views
import Login from './Views/Login';
import Signup from './Views/Signup';
import Users from './Views/Users';

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </>
  )
}

export default App
