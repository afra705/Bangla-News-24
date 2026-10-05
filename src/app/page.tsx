import React from 'react';
import Marquee from './component/Marquee';
import MainNews from './component/MainNews';
import NewsCard from './component/NewsCard';
import MostRead from './component/MostRead';


interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}
interface IOthersection {
  curationId: number;
  id: string;
  title: string;
  articles: INews[];
}

const page = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
    const data = await res.json();
    const sections = data?.data;
    
    const mainNews = sections[0].articles;
    const otherSection:IOthersection[] = sections.slice(1)


return (
  <div>
 

    <div className="grid grid-cols-3 ">
      <div className="col-span-2">
        <MainNews  news={mainNews}/>
       <div className='grid gap-5 mt-4'>
           {
            otherSection.map((os)=> <div key={os.curationId} >
                <h2 className=' text-red-800 font-bold'>{os.title}</h2>
                     <h2 className='border-b-3 border-red-800 my-5'></h2>
               <div className='grid grid-cols-3  '>
                 {
                  os.articles.map(news =><NewsCard  news={news} key={news.id}/>)
                }
               </div>

            </div>)
          } 
       </div>
       
      </div>

      <div className="col-span-1">
         <MostRead/>
      </div>
    </div>
  </div>
)};

export default page;