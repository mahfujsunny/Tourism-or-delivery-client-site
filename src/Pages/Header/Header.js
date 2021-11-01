import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut} = useAuth();

    return (
        <div className="menu-bar">
           <Link className="nav-style"  to='/home'>Home</Link> 
           <Link className="nav-style"  to='/about'>About</Link> 
           {/* {user?.email && 
                <Link className="nav-style"  to='/services'>Services</Link>  
            }  */}
            {user?.email && 
                 <Link className="nav-style"  to='/hotels'>Hotel Rooms</Link>  
            } 

           {user?.email && 
                <Link className="nav-style"  to='/addplace'>Add Place</Link>  
           }

           {user?.email && 
                <Link className="nav-style"  to='/myOrders'>My Orders</Link>  
           }

           {user?.email && 
                <Link className="nav-style"  to='/orders'>Manage All Bookings</Link>  
           } 
  
           {   
                    user?.email ? <button className="nav-style" onClick={logOut}>LogOut</button>
                    :
                    <Link className="nav-style"  to="/login">Login</Link>

            }
        </div>
    );
};

export default Header;