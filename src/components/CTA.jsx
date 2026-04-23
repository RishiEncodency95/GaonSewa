import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => (
  <section className="container-px mx-auto max-w-7xl py-24">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-emerald-800 p-10 shadow-lg lg:p-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl">
            Start daily milk delivery today.
          </h2>
          <p className="mt-5 max-w-xl text-white/85">
            Set up your subscription in 60 seconds. First bottle on us — only available this week.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link to="/subscription" className="h-14 rounded-full px-8 text-base bg-yellow-400 text-yellow-950 hover:bg-yellow-500 shadow-md hover:-translate-y-1 w-full inline-flex items-center justify-center gap-2 transition-smooth">
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="h-14 rounded-full px-8 text-base border-2 border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 w-full inline-flex items-center justify-center gap-2 transition-smooth">
            <MessageCircle className="h-4 w-4" /> Reach out to us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
