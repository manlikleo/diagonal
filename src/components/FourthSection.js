import React,{useState,useEffect} from 'react';
import MovieData from '../List.json'
import Movielist from './Movielist';
import '../index.css'; 


export default function FourthSection() {

    const [movielist,setMovieList] = useState(); 

        useEffect(()=> {
            setMovieList(MovieData)
        },[movielist])



  return <div className='bg-gradient-to-br from-grad to-black px-16 py-24 flex flex-col items-center justify-center'>

            <div className="mb-8 text-center text-white">
                <p>Try before you buy</p>
                 <h2 className="text-3xl font-semibold text-primary">Browse Our Content</h2>
            </div>

            <div className='lg:w-7/12 flex flex-wrap justify-between items-center'>
                { movielist && movielist.map((movie)=> (
                    <Movielist  imgSrc={`${movie.movieImg}`} Title={`${movie.title}`}/>
                ))}
            </div>
            <div className='mt-6'>
                <button className="px-8 py-3 bg-primary text-black font-semibold rounded-md">Browse Content</button>
            </div>
  </div>;
}
