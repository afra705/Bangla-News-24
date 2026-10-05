import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface headlines{
    id:string,
    title:string
}

const Marquee = async() => {
    
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines:headlines[] = data.data;


    return (
        <div className='red text-white '>

           <div className='flex lg:w-7xl mx-auto '>
             <div className='bg-red-900 py-1 mr-2 px-2 font-bold'>সর্বশেষ</div>
          <MarqueeText direction='right' duration={10} className='py-1' >
              {
                headlines.map((h,i)=>
                <Link className="hover:underline" href={`/news/${h.id}`} key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
            </Link>
                )
            }
          </MarqueeText>
           </div>
        </div>
    );
};

export default Marquee;