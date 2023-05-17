
import './App.css';
import Button from '../src/component/Button.jsx';
import Home from '../src/component/Home.jsx';
import About from '../src/component/About.jsx';
import Shop from '../src/component/Shop.jsx';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import NavBar from '../src/component/NavBar.jsx';
import Notfound from '../src/component/Notfound.jsx';
import Details from '../src/component/Details.jsx';
import Login from '../src/component/Login.jsx';
import Register from '../src/component/Register.jsx';
function App() {
  return (
       <BrowserRouter>
          <NavBar />

          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Shop />} path='/shop' />
            <Route element={<Button />} path='/button' />
            <Route element={<Login />} path='/login' />
            <Route element={<Register />} path='/register' />
            <Route element={<Details />} path='/shop/:id' />
            <Route element={<Notfound />} path='*' />
          </Routes>
       
       
       </BrowserRouter>







    // <div className='div'>
    //  
    // </div>
  );
}

export default App;
