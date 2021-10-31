import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Home/Home';
import Hotels from '../Hotels/Hotels';
import Services from '../Services/Services';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About us/About';
// import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import Login from '../Login/Login';

const Navbar = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/services">
                        <Services></Services>
                    </Route>
                    {/* <PrivateRoute exact path="/bookDoctor/:doctorid">
                      <BookDoctor></BookDoctor>
                    </PrivateRoute> */}
                    <Route exact path="/hotels">
                        <Hotels></Hotels>
                    </Route>
                    <Route exact path="/login">
                      <Login></Login>
                    </Route>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>    
        </div>
    );
};

export default Navbar;