import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}&token=${import.meta.env.VITE_GNEWS_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data); 
        if (Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setArticles([]); 
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setArticles([]); // on error, fallback
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {Array.isArray(articles) && articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
