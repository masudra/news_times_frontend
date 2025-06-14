import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mts-blog-backend1.onrender.com/blogs");
        const result = await res.json();
        console.log("Full API Response:", result);

        if (Array.isArray(result)) {
          setData(result);
        } else if (Array.isArray(result.blogs)) {
          setData(result.blogs);
        } else {
          console.warn("Unexpected data format:", result);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-3xl font-bold mb-6 text-center"> Latest News</h1>
      <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* News 1 - First blog */}
        <div>
          <div>
            {data[0] && (
              <>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-blue-50 p-2 lg:py-[10px] mt-4 first:mt-0 rounded-md ">
                    <img
                      className="w-full h-40 sm:h-48 lg:h-37 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                      src={
                        data[data.length - i].imageUrl ||
                        "https://source.unsplash.com/600x400/?blog"
                      }
                      alt={data[data.length - i].title}
                    />
                    <div className="p-2">
                      <Link
                        to={`/blogs/${data[data.length - i]._id}`}
                        className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                      >
                        {data[data.length - i]?.title?.split(" ").slice(0, 6).join(" ") + '...'}
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {/* News 2 */}
        <div>
          <div>
            {data[0] && (
              <>
                {[3, 4, 5, 6].map((i) => (
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
        {/* News 3 */}
        <div>
          <div>
            {data[0] && (
              <>
                {[7, 8, 9, 10].map((i) => (
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
        {/* News 4 */}
        <div>
          <div>
            {data[0] && (
              <>
                {[11, 12, 13, 14].map((i) => (
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

export default News;
