import { Plus, Star } from "lucide-react";
import cowMilk from "../assets/product-cow-milk.jpg";
import buffaloMilk from "../assets/product-buffalo-milk.jpg";
import soyMilk from "../assets/product-soy-milk.jpg";
import tofu from "../assets/product-tofu.jpg";
import { toast } from "sonner";

const products = [
  { name: "Pure Cow Milk", tag: "Dairy", price: 65, unit: "/ litre", rating: 4.9, image: cowMilk, accent: "bg-emerald-50" },
  { name: "Rich Buffalo Milk", tag: "Dairy", price: 85, unit: "/ litre", rating: 4.8, image: buffaloMilk, accent: "bg-yellow-50" },
  { name: "Fresh Soy Milk", tag: "Plant", price: 90, unit: "/ litre", rating: 4.7, image: soyMilk, accent: "bg-emerald-50" },
  { name: "Soft Soy Tofu", tag: "Plant", price: 120, unit: "/ 250g", rating: 4.9, image: tofu, accent: "bg-yellow-50" },
];

const Products = () => (
  <section className="bg-slate-50 py-24 lg:py-32">
    <div className="container-px mx-auto max-w-7xl">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="pill">Best sellers</span>
          <h2 className="mt-4 max-w-2xl text-4xl text-slate-900 sm:text-5xl">
            Crafted with care, <br className="hidden sm:block" />
            <span className="text-emerald-800">priced honestly.</span>
          </h2>
        </div>
        <button className="h-14 rounded-full px-8 text-base border-2 border-emerald-600/20 bg-white text-slate-900 hover:border-emerald-600 hover:bg-emerald-50 inline-flex items-center justify-center gap-2 transition-smooth">
          View all products
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.name}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-spring hover:-translate-y-2 hover:shadow-card"
          >
            <div className={`relative aspect-square overflow-hidden ${p.accent}`}>
              <img
                src={p.image}
                alt={p.name}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-spring group-hover:scale-110"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  p.tag === "Dairy" ? "bg-emerald-600 text-white" : "bg-yellow-400 text-yellow-950"
                }`}
              >
                {p.tag}
              </span>
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 backdrop-blur">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-slate-900">{p.rating}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-2xl text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">Glass bottle, returnable</p>
              </div>
              <div className="mt-auto flex items-end justify-between">
                <p>
                  <span className="font-display text-3xl text-emerald-800">₹{p.price}</span>
                  <span className="ml-1 text-xs text-slate-500">{p.unit}</span>
                </p>
                <button
                  onClick={() => toast.success(`${p.name} added to cart`)}
                  aria-label={`Add ${p.name} to cart`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-emerald-600 text-white shadow-soft transition-spring hover:scale-110 hover:bg-emerald-800"
                >
                  <Plus className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
