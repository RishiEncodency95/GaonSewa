import { Link } from "react-router-dom";
import { Mail, MapPin, Milk, Phone, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-900 pt-20 text-slate-50">
    <div className="container-px mx-auto max-w-7xl">
      <div className="grid gap-12 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700">
              <Milk className="h-5 w-5 text-white" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl">Gaon Fresh</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400">Dairy Co.</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-slate-400">
            Bringing the village dairy to your city doorstep. Pure, traceable, and delivered with care since 2018.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-smooth hover:bg-yellow-400 hover:text-yellow-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg underline decoration-yellow-400/30 decoration-2 underline-offset-8">Shop</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link to="/products" className="hover:text-yellow-400">Cow Milk</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Buffalo Milk</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Soy Milk</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Tofu</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg underline decoration-yellow-400/30 decoration-2 underline-offset-8">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-yellow-400">About us</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">Our farmers</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg underline decoration-yellow-400/30 decoration-2 underline-offset-8">Reach us</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" /> +91 98765 43210</li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" /> hello@gaonfresh.in</li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" /> Mohali, Punjab, India</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Gaon Fresh Dairy Co. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="#" className="hover:text-yellow-400">Privacy</Link>
          <Link to="#" className="hover:text-yellow-400">Terms</Link>
          <Link to="#" className="hover:text-yellow-400">Refunds</Link>
        </div>
      </div>
    </div>

    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white shadow-lg transition-spring hover:scale-110 hover:bg-emerald-700"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  </footer>
);

export default Footer;
