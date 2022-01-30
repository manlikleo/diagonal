import React from 'react';

export default function StoreLogo({srcImg,title}) {
  return <>
    <a className='lg:w-[20rem] sm:h-[40px] lg:h-auto sm:w-[160px] border-[1px] border-white lg:py-2 lg:px-6 sm:py-[0.5rem] rounded-lg ml-3' href='/'>
        <img className='w-full h-full object-contain' src={srcImg} alt={title}/>
    </a>
  </>;
}
