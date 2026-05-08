import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );

      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id == id
      );

      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="text-lg font-medium">
        Category News: {id}
      </h2>

      <p className="mt-6 p-1">
        Total{" "}
        <span className="text-secondary font-semibold">
          {categoryNews.length}
        </span>{" "}
        news found
      </p>

      {/* No Data Found */}
      {categoryNews.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border rounded-xl mt-6 bg-base-200">
          <h2 className="text-2xl font-bold text-gray-700">
            No News Found
          </h2>

          <p className="text-gray-500 mt-2">
            This category has no available news.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-5">
          {categoryNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            ></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;