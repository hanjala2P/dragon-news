import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h3 className=" font-medium text-lg">
        All Categories ( {categories.length})
      </h3>
      <div className="grid grid-cols-1 gap-3 mt-5 ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn bg-base-100 border-0 hover:bg-base-200 font-normal text-accent shadow-none"}
            to={`categoryNews/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
