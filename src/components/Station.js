import React,{useState,useEffect} from 'react';
import StationData from '../station.json'; 
import '../App.css';


export default function Station() {

  const [stations, setStations] = useState()

  useEffect(() => {
    setStations(StationData);
  },[stations])

  return <div className='station-bg h-screen p-16 flex flex-col items-center justify-center'>

        <div className='text-center text-white w-[27%]'>
            <p>Live TV Guide and catch up TV</p>
            <h2 className="text-primary text-3xl font-semibold my-4">Enjoy Our Live Channels</h2>
            <p>Enjoy all your favourite channels in one place with DIAGNAL ENLIGHT.</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between w-10/12">
                  { stations && stations.map((station) => (
                      <div className='py-8 px-6 bg-black rounded-xl h-[120px] w-[190px] mb-6 flex items-start justify-center'>
                            <img className="w-full h-full object-contain" src={`${station.stationImg}`} alt={`${station.alt}`}/>
                      </div>
                  ))
                  }
        </div>


  </div>;
}
