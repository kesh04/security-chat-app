import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`,
    link: `text-white text-xl ml-4 uppercase  `,
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      <Link to="/" className={style.link}>
      encrypt 
          </Link>
      <Link to="/decrypt" className={style.link}>
        decrypt
          </Link>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;