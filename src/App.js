import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';
import Tutors from './Pages/Tutors/Tutors';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import AppointTutor from './Pages/AppointTutor/AppointTutor';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div   className='bg-white App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tutor' element={<Tutors></Tutors>}></Route>
        <Route path='/appoint-tutor' element={<AppointTutor></AppointTutor>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
