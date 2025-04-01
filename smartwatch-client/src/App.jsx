
import {Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import { useLocation } from 'react-router-dom'

function App() {
  const {pathname} = useLocation();
  return (
    <>
    
    {pathname !== "/login" && pathname !== "/signup"  && <NavBar /> }
    <Routes>
    <Route path='/dashboard' element={ <Dashboard /> } />
    <Route path='/login' element={ <Login />} />
    <Route path='/signup' element={ <Signup />} />
    </Routes>
    </>
  )
}

export default App
