import { Bookmark, EyeIcon, Share2, StarIcon } from "lucide-react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  // date format
  const formattedDate = new Date(
    author.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-base-200 rounded-lg overflow-hidden space-y-4 mt-2">
      
      {/* top section */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={author.img}
            alt={author.name}
          />

          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <Bookmark size={20} />
          <Share2 size={20} />
        </div>
      </div>

      {/* title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-7">
          {title}
        </h2>
      </div>

      {/* image + details */}
      <div className="px-4 space-y-4">
        <img
          className="w-full rounded-lg object-cover"
          src={thumbnail_url}
          alt={title}
        />

        <p className="text-gray-600 text-sm leading-7">
          {details.slice(0, 180)}...

          <Link
            to={`/newsDetails/${id}`}
            className="text-orange-500 font-semibold ml-2"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* rating */}
      <div className="flex justify-between items-center p-4 border-t border-base-300">
        
        <div className="flex items-center gap-2">
          <div className="flex items-center text-orange-400 gap-1">
            {[...Array(rating.number)].map((_, index) => (
              <StarIcon
                key={index}
                size={18}
                fill="currentColor"
              />
            ))}
          </div>

          <span className="font-semibold text-gray-700">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <EyeIcon size={20} />

          <span className="font-semibold">
            {total_view}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;