import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type INews = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
};
interface IMainNews {
  news: INews;

}
const NewsCard = ({news}:IMainNews) => {
    return (
      <Link href={`/news/${news.id}`}>
        <div>
          <div className="card bg-base-100 w-66 h-120 shadow-sm">
            <figure>
              <Image
                src={news.imageUrl}
                alt={news.imageAlt}
                height={700}
                width={600}
              />
            </figure>

            <div className="card-body">
              <h2 className="text-red-800 font-bold">{news.category}</h2>
              <h2 className="card-title">{news.title}</h2>
              <p>{news.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default NewsCard;