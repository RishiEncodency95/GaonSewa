import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import Categories from "../components/Categories";
import CTA from "../components/CTA";

const Index = () => {
  return (
    <div className="bg-slate-50">
      <Hero />
      <FeatureStrip />
      <Categories />
      <CTA />
    </div>
  );
};

export default Index;
