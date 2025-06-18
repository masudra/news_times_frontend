import { useContext } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { BlogContext } from "../context/BlogContext";
import { useTranslation } from "react-i18next";

function News() {
  const { blogs, loading } = useContext(BlogContext);
  const { t } = useTranslation();


  const latestBlogs = [...blogs].reverse();
  return (
    <div className="lg:mt-20  md:mt-10 sm:mt-6 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-4xl font-bold my-8 text-center"> {t("latestNews")}</h1>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div>
            {latestBlogs.slice(0, 2).map((item) => (
              <div
                key={item._id}
                className="bg-blue-50 p-2 mt-4 first:mt-0 rounded-md"
              >
                <img
                  className="w-full h-40 sm:h-48 lg:h-37 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                  src={
                    item?.imageUrl ||
                    "https://source.unsplash.com/600x400/?blog"
                  }
                  alt={item?.title}
                />
                <div className="p-2">
                  <Link
                    to={`/blogs/${item._id}`}
                    className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item?.title?.split(" ").slice(0, 6).join(" ") + "..."}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            {latestBlogs.slice(2, 6).map((item) => (
              <div
                key={item._id}
                className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
              >
                <img
                  className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                  src={
                    item?.imageUrl ||
                    "https://source.unsplash.com/600x400/?blog"
                  }
                  alt={item?.title}
                />
                <div className="p-2">
                  <Link
                    to={`/blogs/${item._id}`}
                    className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            {latestBlogs.slice(6, 10).map((item) => (
              <div
                key={item._id}
                className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
              >
                <img
                  className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                  src={
                    item?.imageUrl ||
                    "https://source.unsplash.com/600x400/?blog"
                  }
                  alt={item?.title}
                />
                <div className="p-2">
                  <Link
                    to={`/blogs/${item._id}`}
                    className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div>
            {latestBlogs.slice(10, 14).map((item) => (
              <div
                key={item._id}
                className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
              >
                <img
                  className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                  src={
                    item?.imageUrl ||
                    "https://source.unsplash.com/600x400/?blog"
                  }
                  alt={item?.title}
                />
                <div className="p-2">
                  <Link
                    to={`/blogs/${item._id}`}
                    className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
