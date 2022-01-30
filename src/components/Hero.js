import React from 'react';
import '../App.css'; 

const Hero = () => {
    return (
        <div className='hero-bg relative md:h-[90vh] sm:h-screen bg-center bg-cover flex items-center text-white md:px-16 md:py-4 sm:p-8'>

            <div className="flex flex-col lg:w-3/6 xl:w-2/5 sm:w-full my-4 lg:text-left sm:text-center md:mt-0 sm:mt-16">
                <div>
                    <p>Watch everywhere and anywhere</p>
                    <h1 className="md:text-4xl sm:text-3xl text-primary md:my-4 sm:my-6 font-bold">Unlimited movies, TV shows, and more.</h1>
                    <p>Best video quality at 4k with HDR. Enjoy simultaneously on 4 screens. Watch on your TV, computer, phone and tablet. Cancel anytime. Includes free trial for first 14 days</p>
                </div>
                <div className="mt-4">
                    <button className="px-8 py-3 bg-primary text-black font-semibold my-4 rounded-lg">GET STARTED</button>
                    <p>Ready to watch? Click get started to view our plans</p>
                </div>
              
            </div>
        </div>
    );
}

export default Hero;
