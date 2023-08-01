import './App.scss';
import Navigation from './common/Navigation';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './common/Footer';
import Register from './pages/Register';
import Inspector from './pages/Inspector';
import Services from './pages/Services';
import Resident from './pages/Resident';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Routes>
            <Route path={'/'}  element={<Home />} />
            <Route path={'/register'}  element={<Register />} />
            <Route path={'/inspector'}  element={<Inspector />} />
            <Route path={'/services'}  element={<Services />} />
            <Route path={'/resident'}  element={<Resident />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/admin'} element={<Admin />} />

        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
