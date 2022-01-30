import React from 'react';
import Navbar from './NavBar'
import Hero from './Hero'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection'; 
import FourthSection from './FourthSection';
import Station from './Station';
import Faq from './Faq';
import Footer from './Footer';

function Homepage (){
    return (
        <div className='w-full overflow-hidden'>
        <Navbar/>
        <Hero/>
        <FirstSection/>
        <SecondSection/>
        <FourthSection/>
        <Station/>
        <Faq/>
        <Footer/>
        </div>
    );
}

export default Homepage;
