
import './App.css';
import Home from './compo/home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './compo/nav/Nav';
import Register from './compo/register/Register';
import Login from './compo/login/Login';
import Error from './compo/error/Error';
import {Logout} from './compo/nav/Logout';
import Contact from './compo/contact/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
 
  
    
    </>
  );
}

export default App;
