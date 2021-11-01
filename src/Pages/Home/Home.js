import React from 'react';
import Hotels from '../Hotels/Hotels';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <h2>Eat , Sleep and Travel</h2>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Hotels></Hotels>
            </div>
        </div>
    );
};

export default Home;