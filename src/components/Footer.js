import React from 'react';
import Facebook from '../Fb.svg'; 
import Instgram from '../IG.svg'; 
import SocialLogo from './SocialLogo';
import StoreLogo from './StoreLogo';
import Applestore from '../apple.png';
import AndriodStore from '../Android.png'; 


export default function Footer() {
  return <footer className='bg-black w-full flex items-center justify-between h-[10vh] p-16'>

      <div className='w-1/4 text-white flex items-center justify-between'>
          <p>Contact us</p>
          <p>FAQ</p>
          <p>Terms of Use</p>
      </div>

      <div className="text-white flex flex-col items-center justify-between w-2/5">

          <div className="flex items-center justify-between w-full mb-4">

                <div className='flex items-center justify-between w-1/5'>
                    <SocialLogo srcImg={Instgram} Link='https://www.instagram.com/diagonaldesign/' title='instagram'/>
                    <SocialLogo srcImg={Facebook} Link='https://www.facebook.com/diagonaldesign/' title='facebook'/>
                </div>
                <div className="flex w-3/5">
                        <StoreLogo srcImg={Applestore} title='apple store'/>
                        <StoreLogo srcImg={AndriodStore} title='google store'/>
                </div>
          </div>
          <p className='flex self-end'> <span>Diagnal © 2022</span></p>
      </div>

  </footer>;
}
