import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const navs: Navs[] = data?.data ?? [];

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex gap-5 justify-center mt-15 ">
      <Link href="/">হোম</Link>

      {filteredNavs.map((n) => (
        <Link
        className="hover:text-red-800"
          key={n.slug}
          href={`/category/${n.slug}`}
        >
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;