import React,{useState,useEffect} from 'react';
import MovieData from '../List.json'
import Movielist from './Movielist';
import '../index.css'; 


export default function FourthSection() {

    const [movielist,setMovieList] = useState(); 

        useEffect(()=> {
            setMovieList(MovieData)
        },[movielist])



  return <div className='bg-gradient-to-br from-grad to-black md:px-16 md:py-24 sm:py-8 sm:pl-8 flex flex-col items-center justify-center'>

            <div className="mb-8 text-center text-white sm:pr-8 md:p-0">
                <p>Try before you buy</p>
                 <h2 className="md:text-3xl sm:text-2xl font-semibold text-primary">Browse Our Content</h2>
            </div>

            <div className='xl:w-4/6 lg:w-full md:w-4/5 sm:w-full flex md:flex-wrap sm:flex-nowrap justify-between items-center sm:overflow-x-auto'>
                { movielist && movielist.map((movie)=> (
                    <Movielist  imgSrc={`${movie.movieImg}`} Title={`${movie.title}`}/>
                ))}
            </div>

            <div className='mt-6'>
                <button className="px-8 py-3 bg-primary text-black font-semibold rounded-md">Browse Content</button>
            </div>
  </div>;
}
