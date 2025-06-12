import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Entertainment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mts-blog-backend1.onrender.com/blogs");
        const result = await res.json();
        console.log("Full API Response:", result);

        let blogs = [];

        if (Array.isArray(result)) {
          blogs = result;
        } else if (Array.isArray(result.blogs)) {
          blogs = result.blogs;
        }

        const entertainmentBlogs = blogs.filter(
          (blog) => blog.category === "Entertainment"
        );

        setData(entertainmentBlogs);
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
                  {data[data.length - 1].title}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[data.length - 1].summary}
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
                  className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0"
                >
                  <img
                    className="w-full h-20 overflow-hidden transition-all duration-300 hover:scale-105"
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
                      {data[data.length - i]?.title}
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
              {[6, 7, 8, 9,].map((i) => (
                <div
                  key={i}
                  className="flex bg-blue-50 p-2 border-b-1 mt-4 first:mt-0"
                >
                  <img
                    className="w-full h-20 overflow-hidden transition-all duration-300 hover:scale-105"
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
                      {data[data.length - i]?.title}
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
                  {data[data.length - 10].title}
                </Link>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {data[data.length - 10].summary}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
