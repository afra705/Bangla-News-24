import NewsCard from "@/app/component/NewsCard";
import { notFound } from "next/navigation";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryNews = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;

  console.log("CATEGORY ID:", categoryId);

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    {
      cache: "no-store",
    }
  );

  console.log("STATUS:", res.status);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  console.log("CATEGORY DATA:", data);

  const categoryNews: News[] = data?.data ?? [];

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5 pb-2">
        {data?.title || categoryId}
      </h1>

      {categoryNews.length === 0 ? (
        <p>No news found</p>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;