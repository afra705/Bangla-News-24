import Link from "next/link";

interface IMostRead{
    id:number,
    title:string
}
const MostRead = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news:IMostRead[] = data.data;

    return (
       <div className="card mt-10 p-10 bg-base-100 border border-gray-200">
  <h2 className="font-bold text-2xl mb-5">সর্বাধিক পঠিত</h2>

  <div className="grid gap-6 font-bold">
    {news.map((n, i) => (
      <Link
        href={`/news/${n.id}`}
        key={n.id}
        className="flex gap-3 items-center hover:text-red-800 transition"
      >
        <span className="red1">{i + 1}</span>
        <h2>{n.title}</h2>
      </Link>
    ))}
  </div>
</div>
    );
};

export default MostRead;