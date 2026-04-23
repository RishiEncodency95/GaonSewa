import SubscriptionSection from "../components/Subscription";
import FeatureStrip from "../components/FeatureStrip";

const Subscription = () => {
  return (
    <div className="bg-slate-50 pt-20">
      <SubscriptionSection />
      <div className="py-20">
        <FeatureStrip />
      </div>
    </div>
  );
};

export default Subscription;
