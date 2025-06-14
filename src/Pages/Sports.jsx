import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import LoadingSpinner from "../components/LoadingSpinner";

function Sports() {
  // const [data, setData] = useState([]);
  const { blogs, loading } = useContext(BlogContext);

  // Filter only Sports blogs
  const data = blogs.filter(blog => blog.category === "Sports");

 if (loading) return <LoadingSpinner/>;

  return (
    <div className="mt-12 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-3xl font-bold mb-6 text-center">Sports</h1>
      <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
        {/* News 1 - First blog */}
        <div>
          <div>
            {data[0] && (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0 rounded-md"
                  >
                    <img
                      className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                      src={
                        data[data.length - i]?.imageUrl ||
                        "https://source.unsplash.com/600x400/?blog"
                      }
                      alt={data[data.length - i]?.title}
                    />

                    <div className="p-2">
                      <Link
                        to={`/blogs/${data[data.length - i]?._id}`}
                        className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                      >
                        {data[data.length - i]?.title?.split(" ").slice(0, 4).join(" ") + '...'}

                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* News 2 - Second blog */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="bg-blue-50 p-2 rounded-md">
                  <img
                    className="w-full h-64 sm:h-72 lg:h-78 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 5]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 5]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 5]._id}`}
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 5]?.title?.split(" ").slice(0, 10).join(" ") + '...'}

                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {data[data.length - 5]?.content?.split(" ").slice(0, 50).join(" ") + '...'}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* News 3 - Third blog */}
        <div>
          <div>
            {data[0] && (
              <>
                {[6, 7, 8, 9].map((i) => (
                  <div
                    key={i}
                    className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0 rounded-md"
                  >
                    <img
                      className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                      src={
                        data[data.length - i]?.imageUrl ||
                        "https://source.unsplash.com/600x400/?blog"
                      }
                      alt={data[data.length - i]?.title}
                    />

                    <div className="p-2">
                      <Link
                        to={`/blogs/${data[data.length - i]?._id}`}
                        className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                      >
                        {data[data.length - i]?.title?.split(" ").slice(0, 4).join(" ") + '...'}

                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
