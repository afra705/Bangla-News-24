import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsBodyItem {
  type: "text" | "subheading" | "image";
  text?: string;
  url?: string;
  altText?: string;
  width?: number;
  height?: number;
  caption?: string;
}

const NewsDetails = async ({
  params,
}: {
  params: { newsid: string };
}) => {
  const { newsid } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`
  );

  const data = await res.json();
  const news = data.data;

  if(!news){
    notFound()
  }



  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Category */}
      <p className="text-red-600 font-semibold text-center mb-3">
        {news.source}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-6">
        {news.title}
      </h1>

      {/* Published Date */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Published:{" "}
        {new Date(news.firstPublished).toLocaleDateString("bn-BD")}
      </p>

      {/* Main Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={news.imageUrl}
          alt={news.title}
          width={900}
          height={500}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Description */}
      <p className="text-lg font-medium leading-8 text-gray-700 mb-8">
        {news.text}
      </p>

      {/* Article Body */}
      <div className="space-y-8">
        {news.body?.map((item:NewsBodyItem, index: number) => {
          if (item.type === "text") {
            return (
              <p
                key={index}
                className="text-lg leading-9 text-gray-800"
              >
                {item.text}
              </p>
            );
          }

          if (item.type === "subheading") {
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-900 mt-10"
              >
                {item.text}
              </h2>
            );
          }

          if (item.type === "image") {
            return (
              <div key={index} className="my-8">
                <Image
                  src={item.url || ""}
                  alt={item.altText || "News image"}
                  width={item.width || 900}
                  height={item.height || 500}
                  className="w-full h-auto rounded-lg"
                />

                {item.caption && (
                  <p className="text-sm text-gray-500 mt-2">
                    {item.caption}
                  </p>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Author */}
      {news.byline?.length > 0 && (
        <div className="border-t mt-10 pt-5 text-gray-600">
          <p>
            <span className="font-semibold">Author:</span>{" "}
            {news.byline[0].name}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;