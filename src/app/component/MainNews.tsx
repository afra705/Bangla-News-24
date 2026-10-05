
import Image from "next/image";
import Link from "next/link";
import React from "react";

type INews = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
};

interface IMainNews {
  news: INews[];
}

const MainNews = ({ news }: IMainNews) => {
  console.log("NEWS:", news);

  const firstNews = news[0];
  const othersNews = news.slice(1);

  if (!firstNews) {
    return <p>No news found</p>;
  }

  return (
    <div className="flex gap-4 mt-10">
      {/* First News */}
      <div className="w-96">
        <Link href={`/news/${firstNews.id}`}>
          <div className="card bg-base-100 shadow-sm hover:shadow-lg transition cursor-pointer">
            <figure>
              <Image
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="text-red-800 font-bold">
                {firstNews.category}
              </h2>

              <h2 className="card-title">
                {firstNews.title}
              </h2>

              <p>{firstNews.description}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Other News */}
      <div className="flex flex-col">
        {othersNews.slice(0, 5).map((other) => (
          <Link
            href={`/news/${other.id}`}
            key={other.id}
          >
            <div className="border w-100 border-gray-200 p-4 font-bold hover:bg-gray-50 cursor-pointer">
              <h2 className="text-red-800">
                {other.category}
              </h2>

              <div>{other.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
