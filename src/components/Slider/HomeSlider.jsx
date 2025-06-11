import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Our Blog",
      desc: "Get the latest stories, updates, and knowledge in one place.",
      img: "https://i.ibb.co/HfvJ7H3X/0-WTjy-Mn9ylpz-Dzyo-N.jpg",
    },
    {
      id: 2,
      title: "Discover Diverse Categories",
      desc: "Technology, lifestyle, travel, and more — all in one blog.",
      img: "https://i.ibb.co/twyZLk9Q/1641200554997.jpg",
    },
    {
      id: 3,
      title: "Join the Conversation",
      desc: "Your voice matters — engage, comment, and connect.",
      img: "https://i.ibb.co/TxZgkXK4/How-to-Start-a-Personal-Blog.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                }}
              ></div>
              <div style={{ position: "relative", textAlign: "center", padding: "0 20px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
                  {slide.title}
                </h2>
                <p style={{ fontSize: "1.2rem" }}>{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
