import { Leaf, FlaskConical, Home, ShieldCheck, Zap, Truck, Recycle } from "lucide-react";
import featureBg from "../assets/featurestrip/featurebg.png";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No Harmful Chemicals",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: FlaskConical,
    title: "No Preservatives",
    desc: "Only Pure & Safe",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: Home,
    title: "Farm Fresh",
    desc: "Direct from Farms",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Best in Every Drop",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: Zap,
    title: "Rich in Nutrition",
    desc: "Protein, Calcium & More",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick & Reliable",
    iconBg: "from-green-100 to-emerald-50",
  },
  {
    icon: Recycle,
    title: "Eco Friendly",
    desc: "Sustainable Packaging",
    iconBg: "from-green-100 to-emerald-50",
  },
];

const FeatureStrip = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

      .feature-strip-section {
        font-family: 'Nunito', sans-serif;
      }

      .feature-strip-section .feature-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .feature-strip-section .feature-card:hover {
        transform: translateY(-3px);
      }

      .feature-strip-section .feature-card:hover .icon-ring {
        box-shadow: 0 0 0 4px rgba(134, 195, 60, 0.2);
      }

      @keyframes float-leaf {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50%       { transform: translateY(-6px) rotate(5deg); }
      }
    `}</style>

    <section className=" w-full px-4 lg:px-12 py-4">
      <div
        className="relative w-full rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${featureBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",

        }}
      >
        {/* Light overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/30 rounded-xl" />

        {/* Feature cards grid — centered vertically */}
        <div className="relative z-10 flex items-center justify-center h-full py-3 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="feature-card flex flex-col items-center text-center gap-3"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Circular icon */}
                <div
                  className="icon-ring relative grid place-items-center rounded-full border-2 border-dashed border-green-400/60 bg-white/80 backdrop-blur-sm transition-all duration-200"
                  style={{ width: 60, height: 60 }}
                >
                  <div className="grid place-items-center rounded-full bg-gradient-to-br from-green-50 to-white w-14 h-14 shadow-sm">
                    <f.icon
                      className="text-[#2e7d32]"
                      style={{ width: 24, height: 24 }}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p
                    className="font-extrabold text-white leading-tight"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {f.title}
                  </p>

                  {/* Green leaf divider */}
                  <div className="flex items-center justify-center gap-1 my-1">
                    <span className="block h-px w-12 bg-green-600 rounded-full" />
                    <Leaf className="text-green-600 w-4 h-4" />
                    <span className="block h-px w-12 bg-green-600 rounded-full" />
                  </div>

                  <p
                    className="text-gray-100 leading-snug font-semibold"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeatureStrip;