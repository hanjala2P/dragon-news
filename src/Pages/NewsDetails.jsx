import { MoveLeft } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const allNews = useLoaderData();

  // single news find
  const news = allNews.find((item) => item.id == id);

  // data না পেলে
  if (!news) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-red-500">News Not Found</h2>
      </div>
    );
  }

  const { title, thumbnail_url, details, author, total_view, rating } = news;
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-5">
      {/* image */}
      <img src={thumbnail_url} alt={title} className="w-full rounded-xl" />

      {/* title */}
      <h1 className="text-3xl font-bold leading-12">{title}</h1>

      {/* author */}
      <div className="flex items-center gap-3">
        <img
          src={author.img}
          alt={author.name}
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h2 className="font-semibold">{author.name}</h2>

          <p className="text-sm text-gray-500">{author.published_date}</p>
        </div>
      </div>

      {/* details */}
      <p className="text-gray-700 leading-8">{details}</p>

      {/* extra info */}
      <div className="flex items-center justify-between border-t pt-4">
        <p className="font-medium">👁 Total Views: {total_view}</p>

        <p className="font-medium">⭐ Rating: {rating.number}</p>
      </div>

      <button
        onClick={handleBack}
        className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-focus flex items-center gap-2"
      >
       <MoveLeft /> All News In This Categories
      </button>
    </div>
  );
};

export default NewsDetails;
