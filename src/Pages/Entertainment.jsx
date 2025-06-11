import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Entertainment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/blogs");
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
      <h1 className="text-3xl font-bold mb-6 text-center">Entertainment</h1>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* News 1 */}
        <div>
          {data[0] && (
            <div className="bg-blue-50 p-2">
              <img
                className="w-full object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  data[0].imageUrl ||
                  "https://source.unsplash.com/600x400/?blog"
                }
                alt={data[0].title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${data[0]._id}`}
                  className="text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {data[0].title}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[0].summary}
              </p>
            </div>
          )}
        </div>

        {/* News 2 */}
        <div>
          {data[2] && (
            <>
              {[2, 3, 4, 0].map((i) => (
                <div
                  key={i}
                  className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0"
                >
                  <img
                    className="w-full h-20 overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[i]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[i]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[i]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[i]?.title}
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
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0"
                >
                  <img
                    className="w-full h-20 overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[i]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[i]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[i]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[i]?.title}
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
            <div className="bg-blue-50 p-2">
              <img
                className="w-full object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  data[3].imageUrl ||
                  "https://source.unsplash.com/600x400/?blog"
                }
                alt={data[3].title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${data[3]._id}`}
                  className="text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {data[3].title}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[3].summary}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
