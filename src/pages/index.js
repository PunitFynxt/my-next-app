import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
import Image from "next/image";
export async function getStaticProps() {
  const res = await axios.get(`${API_URL}/api/news-letters?populate=*`);
  return {
    props: {
      newsLetter: res.data.data,
    },
  };
}

export default function Home({ newsLetter }) {
  return (
    <div>
      <h1>News letter List</h1>
      <ul>
        {newsLetter.map((item) => (
          <li key={item.id}>
            <h2>{item.newsTitle}</h2>
            <p>{item.newsDescription}</p>
            <Image src={item.newsImagePath} width={200} height={150} alt={item.newsTitle} />
          </li>
        ))}
      </ul>
    </div>
  );
}
