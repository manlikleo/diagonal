import React from 'react';
import CheckList from './CheckList'; 
import AppScreen from '../apps.svg';
import Platforms from '../platforms.svg'; 
import ImageFile from './ImageFile';

export default function SecondSection() {
  return <div className="p-16 flex items-center justify-between  bg-gradient-to-br from-grad to-black h-screen">

      <div className="w-2/6">
                <div className="mb-8 text-white">
                    <p>Available on every device and platform</p>
                    <h2 className="text-primary text-3xl my-6 font-semibold">Watch Everywhere.</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>   
                </div>

                <ul className='flex flex-col justify-around'>
                        <CheckList title="Watch on Game Consoles"/>
                        <CheckList title="Available as a TV app"/>
                        <CheckList title="Watch on Web "/>
                        <CheckList title="Download our App for Mobile and Tablet"/>
                        <CheckList title="Unlimited Device"/>
                </ul>
        
        </div>

        <div className='flex flex-col items-center justify-center'>
            <ImageFile imgClass='w-[80%] mb-10' imgSrc={AppScreen} alt='app tv' />
            <ImageFile imgClass='w-[70%]' imgSrc={Platforms} alt='our platforms' />
        </div>
    
    </div>;
}
