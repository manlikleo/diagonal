import React from 'react';
import '../App.css'; 

const Hero = () => {
    return (
        <div className='hero-bg relative h-[90vh] bg-center bg-cover flex items-center text-white px-16 py-4'>

            <div className="flex flex-col w-2/5 my-4">
                <div>
                    <p>Watch everywhere and anywhere</p>
                    <h1 className="text-4xl text-primary my-4 font-bold">Unlimited movies, TV shows, and more.</h1>
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
