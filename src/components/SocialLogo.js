import React from 'react';

export default function SocialLogo({srcImg,title,Link}) {
  return <>
       <a class='bg-social p-2 rounded-full h-[32px] w-[32px]  flex items-center justify-center lg:ml-0 sm:ml-4' href={Link}>
                    <img className='w-100' src={srcImg} alt={title}/>
        </a>
  </>;
}
