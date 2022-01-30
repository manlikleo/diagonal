import React from 'react';
import Facebook from '../Fb.svg'; 
import Instgram from '../IG.svg'; 
import SocialLogo from './SocialLogo';
import StoreLogo from './StoreLogo';
import Applestore from '../apple.png';
import AndriodStore from '../Android.png'; 


export default function Footer() {
  return <footer className='bg-black w-full flex items-center justify-between lg:h-[10vh] sm:h-auto lg:p-16 sm:p-8'>

      <div className='xl:w-1/3 lg:w-2/5 text-white flex lg:flex-row sm:flex-col items-center justify-between'>
          <p className='sm:mb-2 lg:m-0'>Contact us</p>
          <p className='sm:mb-2 lg:m-0'>FAQ</p>
          <p className='sm:mb-2 lg:m-0'>Terms of Use</p>
          <p className='sm:mb-2 lg:m-0'>Privacy Policy</p>
      </div>

      <div className="text-white flex flex-col items-center justify-between lg:w-2/5 sm:w-3/5">

          <div className="flex items-center justify-between w-full mb-4 lg:flex-row sm:flex-col">

                <div className='flex items-center lg:justify-between sm:justify-end lg:w-1/5 sm:w-full lg:mb-0 sm:mb-6'>
                    <SocialLogo srcImg={Instgram} Link='https://www.instagram.com/diagonaldesign/' title='instagram'/>
                    <SocialLogo srcImg={Facebook} Link='https://www.facebook.com/diagonaldesign/' title='facebook'/>
                </div>
                <div className="flex items-center lg:justify-between sm:justify-end lg:w-3/5 sm:w-full">
                        <StoreLogo srcImg={Applestore} title='apple store'/>
                        <StoreLogo srcImg={AndriodStore} title='google store'/>
                </div>
          </div>
          <p className='flex self-end'> <span>Diagnal © 2022</span></p>
      </div>

  </footer>;
}
