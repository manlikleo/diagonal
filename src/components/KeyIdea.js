import React from 'react';

export default function KeyIdea({title,imgSrc,subTitle}) {
  return (
  
  <div className="md:w-[30%] sm:w-full text-white sm:mb-8 lg:mb-0">
      
    <div className="mb-4 w-[40px]">
        <img className="w-full" src={imgSrc} alt={title}/>
    </div>
    <div>
        <h2 className="mb-2 lg:text-3xl sm:text-2xl">{title}</h2>
        <p>{subTitle}</p>
    </div>
  
</div>
);
}
