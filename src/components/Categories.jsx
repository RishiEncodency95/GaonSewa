import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import cowMilk from "../assets/product-cow-milk.jpg";
import tofu from "../assets/product-tofu.jpg";

const Categories = () => (
  <section className="container-px mx-auto max-w-7xl py-12 lg:py-20">
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Dairy Category */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-[2.5rem] bg-emerald-600 p-8 lg:p-12 transition-spring hover:shadow-lg"
      >
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Heritage Freshness
            </span>
            <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">
              Dairy <br /> Collection
            </h3>
            <p className="mt-4 max-w-xs text-white/80">
              Grass-fed cow & buffalo milk. Minimal processing, maximum nutrition.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-sm font-bold text-white">Explore all</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-600 transition-spring group-hover:bg-yellow-400 group-hover:text-yellow-950">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
        <img
          src={cowMilk}
          alt=""
          width={800}
          height={800}
          loading="lazy"
          className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full object-cover opacity-30"
        />
      </Link>

      {/* Plant Category */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-[2.5rem] bg-yellow-400 p-8 lg:p-12 transition-spring hover:shadow-lg"
      >
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-yellow-950/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-950/70">
              Modern Wellness
            </span>
            <h3 className="mt-4 font-display text-4xl text-yellow-950 sm:text-5xl">
              Plant <br /> Kitchen
            </h3>
            <p className="mt-4 max-w-xs text-yellow-950/70">
              Creamy soy milk & high-protein tofu. Organic, locally sourced crops.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-sm font-bold text-yellow-950">Explore all</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-950 text-yellow-400 transition-spring group-hover:bg-emerald-600 group-hover:text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
        <img
          src={tofu}
          alt=""
          width={800}
          height={800}
          loading="lazy"
          className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full object-cover opacity-30"
        />
      </Link>
    </div>
  </section>
);

export default Categories;
