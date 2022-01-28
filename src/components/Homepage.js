import React from 'react';
import Navbar from './NavBar'
import Hero from './Hero'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection'; 
import FourthSection from './FourthSection';

function Homepage (){
    return (
        <div>
        <Navbar/>
        <Hero/>
        <FirstSection/>
        <SecondSection/>
        <FourthSection/>
        </div>
    );
}

export default Homepage;
