import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] lg:h-[500px] md:h-[400px] sm:h-[300px] mt-6 px-4">
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
              src="https://i.ibb.co/h1hQtX9c/download-15.jpg"
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
              src="https://i.ibb.co/j9CqdxPY/download-17.jpg"
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
              className="w-full h-full object-cover object-top"
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
  );
};

export default HomeSlider;
