import React from 'react';
import '../App.css'; 
import Movies from '../wallpaperflare.com_wallpaper.jpg'

const Hero = () => {
    return (
        <div className='hero-bg relative h-[80vh] bg-center bg-cover flex items-center text-white '>

            <div className="flex flex-col w-1/2">
                <div>
                    <p>Watch everywhere and anywhere</p>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Best video quality at 4k with HDR. Enjoy simultaneously on 4 screens. Watch on your TV, computer, phone and tablet. Cancel anytime. Includes free trial for first 14 days</p>
                </div>
                <div>
                    <button>GET STARTED</button>
                    <p>Ready to watch? Click get started to view our plans</p>
                </div>
              
            </div>
        </div>
    );
}

export default Hero;
