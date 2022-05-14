import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/tutors'>Tutors</Link></li>
        <li><Link to='/find-tutor'>Find Tutor</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Conatct</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </>
    return (
        <div className="navbar bg-primary z-50 sticky top-0 p-2">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case md:text-3xl text-2xl  font-bold ml-5 text-white" href='/'>Find Tutors.</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-white p-0">
                    {menuItems}
                </ul>
                
            </div>
            <div className="navbar-end md:hidden lg:hidden">
            <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 text-white  p-2 shadow bg-primary rounded-box w-52">
                      {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;