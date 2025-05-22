import { fetchAPI } from "@/lib/api";
import Image from "next/image";

export default function Home({ newsLetter }) {
  return (
    <div>
      <h1>News letter List</h1>
      <ul>
        {newsLetter?.length > 0 ? (
          newsLetter.map((item) => (
            <li key={item.id}>
              <h2>{item.newsTitle}</h2>
              <p>{item.newsDescription}</p>
              <Image src={item.newsImagePath} width={200} height={150} alt={item.newsTitle} />
            </li>
          ))
        ) : (
          <h1>No Data Found</h1>
        )}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const news = await fetchAPI("/news-letters");
  return { props: { newsLetter: news || [] } };
}
