import WhyChoose from "../components/WhyChoose";
import FeatureStrip from "../components/FeatureStrip";

const About = () => {
  return (
    <div className="bg-slate-50 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-5xl font-display text-slate-900 sm:text-6xl">About Gaon Fresh</h1>
        <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto">
          We are committed to bringing the purest, farm-fresh dairy from our local villages straight to your doorstep every morning.
        </p>
      </div>
      <WhyChoose />
      <div className="bg-yellow-400/10 py-24">
        <FeatureStrip />
      </div>
    </div>
  );
};

export default About;
