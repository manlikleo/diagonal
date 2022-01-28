import React from 'react';

const Movielist = ({imgSrc,Title}) => {
    return (<div className='relative w-[180px] h-[270px] mb-6'>
            <div className=' h-full w-full absolute top-0 left-0 z-10 img-bg'></div>
        <div className='h-full w-full text-center text-primary'>
        <img className='w-full h-full' src={imgSrc} alt='originals'/>
        <p className='absolute bottom-[1pc] left-0 right-0 ml-0 mr-0 z-20'>{Title}</p>
        </div>
    </div>
    
    );
}

export default Movielist;
