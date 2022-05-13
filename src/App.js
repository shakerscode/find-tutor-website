import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';
import Tutors from './Pages/Tutors/Tutors';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tutors' element={<Tutors></Tutors>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
