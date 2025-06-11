import BlogCard from "../components/BlogCard/BlogCard";
import HomeSlider from "../components/Slider/HomeSlider";
import Entertainment from "./Entertainment";
import News from "./News";
import Sports from "./Sports";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <News />
      <Sports/>
      <Entertainment/>
      <BlogCard />
    </div>
  );
};

export default Home;
