import React from 'react';

export default function ImageFile({imgSrc,alt,imgClass}) {
  return <div class={imgClass}>
      <img className="w-full" src={imgSrc} alt={alt}/>
  </div>;
}
