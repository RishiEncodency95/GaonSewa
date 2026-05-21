import Hero from "../../components/home/Hero";
import FeatureStrip from "../../components/FeatureStrip";
import HomeProduct from "../../components/home/HomeProduct";
import WhyChooise from "../../components/home/WhyChooise";
import Review from "../../components/home/Review";
import HomeBlog from "../../components/home/HomeBlog";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <Hero />
      <FeatureStrip />
      <HomeProduct />
      <WhyChooise />
      <Review />
      <HomeBlog />
    </div>
  );
};

export default Home;
