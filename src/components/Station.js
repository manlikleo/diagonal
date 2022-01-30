import React,{useState,useEffect} from 'react';
import StationData from '../station.json'; 
import '../App.css';


export default function Station() {

  const [stations, setStations] = useState()

  useEffect(() => {
    setStations(StationData);
  },[stations])

  return <div className='station-bg lg:h-auto sm:h-auto lg:p-16 sm:p-8 flex flex-col items-center justify-center '>

        <div className='text-center text-white lg:w-2/5 xl:w-1/3 sm:w-full'>
            <p>Live TV Guide and catch up TV</p>
            <h2 className="text-primary md:text-3xl sm:text-2xl font-semibold my-4">Enjoy Our Live Channels</h2>
            <p>Enjoy all your favourite channels in one place with DIAGNAL ENLIGHT.</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between md:w-10/12 sm:w-full">
                  { stations && stations.map((station) => (
                      <div className='md:py-8 md:px-6 sm:p-4 bg-black rounded-xl md:h-[120px] sm:w-[90px] sm:h-[78px] md:w-[190px] mb-6 sm:mr-3 md:mr-0 flex items-start justify-center'>
                            <img className="w-full h-full object-contain" src={`${station.stationImg}`} alt={`${station.alt}`}/>
                      </div>
                  ))
                  }
        </div>
  </div>;
}
