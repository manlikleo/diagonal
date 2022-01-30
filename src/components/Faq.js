import React,{useState,useEffect} from 'react';
import FaqData from '../FaqData.json'


export default function Faq() { 
    const [question,SetQuestion] = useState(); 

    useEffect(() => {
        SetQuestion(FaqData);
    },[question])

  return <div className="lg:px-16 lg:py-24 sm:p-8 flex flex-col items-center justify-between bg-gradient-to-br from-grad to-black h-auto">

        <h2 className="text-primary md:text-3xl sm:text-2xl font-semibold mb-12 md:text-left sm:text-center"> Frequently Asked Questions.</h2>

        <div className='flex flex-wrap items-center justify-between w-full mb-6'>
                { question && question.map((data)=> (
                    <div className='text-white xl:w-1/4 md:w-5/12 sm:w-full xl:mr-4 sm:mr-0 mb-12'>
                        <h3 className="lg:text-2xl sm:text-xl  text-primary font-semibold mb-4">{data.title}</h3>
                        <p>Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne.</p>
                    </div>
                ))}
        </div>

        <div className='text-white flex flex-col items-center justify-center'>
            <p className="text-center">Ready to watch? Click get started to view our plans</p>
            <button className="bg-primary px-8 py-2 rounded-sm text-black mt-4 font-semibold">GET STARTED</button>
        </div>
  </div>;
}
