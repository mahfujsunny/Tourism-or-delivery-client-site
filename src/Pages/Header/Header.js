import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut} = useAuth();

    return (
        <div>
           <Link to='/home'>Home</Link> 
           <Link to='/about'>About</Link> 
           <Link to='/services'>Services</Link> 
           <Link to='/hotels'>Hotels</Link> 
           {   
                    user?.email ? <button className="menu-bar" onClick={logOut}>LogOut</button>
                    :
                    <Link className="menu-bar" to="/login">Login</Link>

            }
        </div>
    );
};

export default Header;