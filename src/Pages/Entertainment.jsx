import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import LoadingSpinner from "../components/LoadingSpinner";

function Entertainment() {

  const { blogs, loading } = useContext(BlogContext);

  // Filter only Sports blogs
  const data = blogs.filter(blog => blog.category === "Entertainment");
  if (loading) return <LoadingSpinner />;

  return (
    <div className="mt-20 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-5xl font-bold my-10 text-center">Entertainment</h1>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* News 1 */}
        <div>
          {data[0] && (
            <div className="bg-blue-50 p-2 rounded-md">
              <img
                className="w-full h-54 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  data[data.length - 1].imageUrl ||
                  "https://source.unsplash.com/600x400/?blog"
                }
                alt={data[data.length - 1].title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${data[data.length - 1]._id}`}
                  className="text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {data[data.length - 1]?.title?.split(" ").slice(0, 10).join(" ") + '...'}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[data.length - 1]?.content?.split(" ").slice(0, 70).join(" ") + '...'}
              </p>
            </div>
          )}
        </div>

        {/* News 2 */}
        <div>
          {data[2] && (
            <>
              {[2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
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

        {/* News 3 */}
        <div>
          {data[1] && (
            <>
              {[6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
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

        {/* News 4 */}
        <div>
          {data[3] && (
            <div className="bg-blue-50 p-2 rounded-md">
              <img
                className="w-full h-54 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  data[data.length - 10].imageUrl ||
                  "https://source.unsplash.com/600x400/?blog"
                }
                alt={data[data.length - 10].title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${data[data.length - 10]._id}`}
                  className="text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {data[data.length - 10]?.title?.split(" ").slice(0, 10).join(" ") + '...'}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[data.length - 10]?.content?.split(" ").slice(0, 70).join(" ") + '...'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
