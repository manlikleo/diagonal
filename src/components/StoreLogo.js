import React from 'react';

export default function StoreLogo({srcImg,title}) {
  return <>
    <a className='w-[20rem] border-[1px] border-white py-2 px-6 rounded-xl ml-3' href='/'>
        <img className='w-full h-full object-contain' src={srcImg} alt={title}/>
    </a>
  </>;
}
