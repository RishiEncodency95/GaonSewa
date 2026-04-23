import { Check, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const plans = [
  {
    name: "Dairy Plan",
    tagline: "For traditional households",
    price: 1799,
    features: ["1L cow milk daily", "Glass bottle delivery", "Pause anytime", "Free curd weekly"],
    highlighted: false,
  },
  {
    name: "Combo Plan",
    tagline: "Best of both worlds",
    price: 2499,
    features: ["1L milk + 500ml soy milk", "Tofu twice a week", "Priority morning slot", "20% off all extras", "Free recipe e-book"],
    highlighted: true,
  },
  {
    name: "Plant Plan",
    tagline: "100% plant-based",
    price: 1999,
    features: ["1L soy milk daily", "Tofu once a week", "Pause anytime", "Free almond milk trial"],
    highlighted: false,
  },
];

const Subscription = () => (
  <section className="bg-slate-900 py-24 text-slate-50 lg:py-32">
    <div className="container-px mx-auto max-w-7xl">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
          <Sparkles className="h-3.5 w-3.5" /> Subscriptions
        </span>
        <h2 className="mt-4 text-4xl text-white sm:text-5xl">
          Wake up to fresh milk, <span className="text-yellow-400">every single day.</span>
        </h2>
        <p className="mt-4 text-slate-300">
          Save up to 25% with monthly plans. Skip, pause or cancel anytime — no contracts.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-[2rem] p-8 transition-spring hover:-translate-y-2 lg:p-10",
              plan.highlighted
                ? "bg-yellow-400 text-yellow-950 shadow-lg lg:scale-105"
                : "bg-white/5 text-slate-50 backdrop-blur ring-1 ring-white/10"
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                Most Popular
              </span>
            )}
            <div>
              <h3 className="font-display text-3xl">{plan.name}</h3>
              <p className={cn("mt-1 text-sm", plan.highlighted ? "text-yellow-950/70" : "text-slate-400")}>
                {plan.tagline}
              </p>
            </div>
            <div className="my-8 flex items-baseline gap-1">
              <span className="font-display text-6xl">₹{plan.price}</span>
              <span className={cn("text-sm", plan.highlighted ? "text-yellow-950/70" : "text-slate-400")}>
                /month
              </span>
            </div>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span
                    className={cn(
                      "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                      plan.highlighted ? "bg-yellow-950 text-yellow-400" : "bg-emerald-600 text-white"
                    )}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className={plan.highlighted ? "text-yellow-950/90" : "text-slate-200"}>{f}</span>
                </li>
              ))}
            </ul>
            
            <button className={cn(
              "h-14 rounded-full px-8 text-base mt-10 w-full inline-flex items-center justify-center gap-2 transition-smooth shadow-sm hover:-translate-y-0.5",
              plan.highlighted 
                ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                : "bg-yellow-400 text-yellow-950 hover:bg-yellow-500"
            )}>
              Choose {plan.name.split(" ")[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Subscription;
