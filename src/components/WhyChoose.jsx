import { Droplets, HeartHandshake, RefreshCcw, Snowflake, ThermometerSun, Wheat } from "lucide-react";

const items = [
  { icon: Droplets, title: "Cold-chain delivery", desc: "Bottled at 4°C, kept cold from farm to your fridge." },
  { icon: HeartHandshake, title: "Direct from farmers", desc: "We pay our 200+ partner farmers above market rates." },
  { icon: RefreshCcw, title: "Returnable glass", desc: "No plastic. Bottles collected & sterilised next morning." },
  { icon: Wheat, title: "Grass-fed only", desc: "Cattle grazed on chemical-free pastures across Punjab." },
  { icon: Snowflake, title: "Same-day fresh", desc: "From milking to your home in under 12 hours." },
  { icon: ThermometerSun, title: "Lab tested daily", desc: "Every batch passes 28 quality & purity checks." },
];

const WhyChoose = () => (
  <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <span className="pill">Why Gaon Fresh</span>
      <h2 className="mt-4 text-4xl text-slate-900 sm:text-5xl">
        Six reasons families <span className="text-emerald-800">stay with us.</span>
      </h2>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-7 transition-spring hover:-translate-y-1 hover:border-emerald-600/30 hover:shadow-card"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 transition-spring group-hover:bg-emerald-600 group-hover:text-white">
            <item.icon className="h-6 w-6 text-emerald-800 transition-smooth group-hover:text-white" strokeWidth={2.2} />
          </div>
          <h3 className="mt-6 font-display text-2xl text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChoose;
