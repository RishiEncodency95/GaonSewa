import { Truck, ShieldCheck, Sprout, CreditCard } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "Orders over $350" },
  { icon: CreditCard, title: "Quick Payment", desc: "100% Secure Payment" },
  { icon: Sprout, title: "100% Organic", desc: "No Harm To Nature" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Daily Lab Tested" },
];

const FeatureStrip = () => (
  <section className="container-px relative z-50 mx-auto -mt-12 max-w-6xl lg:-mt-20">
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-yellow-400 shadow-[0_20px_50px_rgba(234,179,8,0.3)] sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f, i) => (
        <div
          key={f.title}
          className="group flex items-center justify-center gap-5 bg-yellow-400 p-8 transition-all hover:bg-yellow-500 border-r border-yellow-950/10 last:border-0"
        >
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/20 border-2 border-white/30 transition-all group-hover:scale-110 group-hover:bg-white/30">
            <f.icon className="h-7 w-7 text-yellow-950" strokeWidth={2.4} />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-yellow-950">{f.title}</p>
            <p className="text-sm font-medium text-yellow-950/75">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureStrip;
