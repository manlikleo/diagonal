import React,{useState,useEffect} from 'react';
import FaqData from '../FaqData.json'


export default function Faq() { 
    const [question,SetQuestion] = useState(); 

    useEffect(() => {
        SetQuestion(FaqData);
    },[question])

  return <div className="px-16 py-24 flex flex-col items-center justify-between bg-gradient-to-br from-grad to-black h-screen">

        <h2 className="text-primary text-3xl font-semibold mb-12"> Frequently Asked Questions.</h2>

        <div className='flex flex-wrap items-center justify-between w-full'>
                { question && question.map((data)=> (
                    <div className='text-white w-1/4 mr-4 mb-12'>
                        <h3 className="text-2xl text-primary font-semibold mb-4">{data.title}</h3>
                        <p>Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne.</p>
                    </div>
                ))}
        </div>

        <div className='text-white flex flex-col items-center justify-center'>
            <p>Ready to watch? Click get started to view our plans</p>
            <button className="bg-primary px-8 py-2 rounded-sm text-black mt-4 font-semibold">GET STARTED</button>
        </div>
  </div>;
}
