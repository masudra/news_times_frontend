import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import LoadingSpinner from "../components/LoadingSpinner";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Sports() {
  // const [data, setData] = useState([]);
  const { blogs, loading } = useContext(BlogContext);

  // Filter only Sports blogs
  const data = blogs.filter(blog => blog.category === "Sports");

  if (loading) return <LoadingSpinner />;

  return (

    <div>
      <div>
        <div className="mx-auto w-full max-w-[1400px] lg:h-[350px] md:h-[300px] sm:h-[200px] mt-6 px-4">
          <Swiper
            loop={true} // 🔁 Loop enabled
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full h-full"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src="https://i.ibb.co/xt40N7fQ/download-25.jpg"
                  alt="Slide"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6 sm:p-4">
                  <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">Panchayat</h2>
                  <p className="text-xl md:text-lg sm:text-base font-bold mb-2">
                    Is Panchayat season 4 coming!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src="https://i.ibb.co/sT0QhWh/download-24.jpg"
                  alt="Slide"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6 sm:p-4">
                  <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">Bachelor point</h2>
                  <p className="text-xl md:text-lg sm:text-base font-bold mb-2">
                    Is Panchayat season 5 coming!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src="https://i.ibb.co/fzV6PvLT/download-21.jpg"
                  alt="Slide"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6 sm:p-4">
                  <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">
                    Mirpur as Tigers’ practice
                  </h2>
                  <p className="text-xl md:text-lg sm:text-base font-bold mb-2">
                    No buzz in Mirpur as Tigers’ practice game begins.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mt-12 w-full bg-white shadow-md rounded-lg pb-14">
        <h1 className="text-5xl font-bold my-10 text-center">Sports</h1>
        <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
          {/* News 1 - First blog */}
          <div>
            <div>
              {data[0] && (
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
                        data[data.length - 1]?.imageUrl ||
                        "https://source.unsplash.com/600x400/?blog"
                      }
                      alt={data[data.length - 1]?.title}
                    />
                    <div className="p-2">
                      <Link
                        to={`/blogs/${data[data.length - 1]._id}`}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                      >
                        {data[data.length - 1]?.title?.split(" ").slice(0, 7).join(" ") + '...'}

                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {data[data.length - 1]?.content?.split(" ").slice(0, 50).join(" ") + '...'}
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
                      className="flex bg-blue-50 p-2 border-b-1  border-red-700 mt-4 first:mt-0 rounded-md"
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
    </div>

  );
}

export default Sports;
