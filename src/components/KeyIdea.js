import React from 'react';

export default function KeyIdea({title,imgSrc,subTitle}) {
  return (
  
  <div className="w-[30%] text-white">
      
    <div className="mb-4 w-[40px]">
        <img className="w-full" src={imgSrc} alt={title}/>
    </div>
    <div>
        <h2 className="mb-2 text-3xl">{title}</h2>
        <p>{subTitle}</p>
    </div>
  
</div>
);
}
