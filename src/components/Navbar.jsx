import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart, User, X, Milk } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Subscription", href: "/subscription" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-smooth overflow-visible",
        scrolled ? "bg-slate-50/95 backdrop-blur-xl shadow-soft" : "bg-white shadow-sm"
      )}
    >
      <nav className="w-full px-16 flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center relative z-10">
          <img
            src="/log.png"
            alt="Gaon Fresh"
            className="w-20 h-20 translate-y-2 drop-shadow-md"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                className={({ isActive }) => cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-smooth hover:bg-emerald-50 hover:text-emerald-800",
                  isActive ? "bg-emerald-50 text-emerald-800 " : "text-gray-900 hover:text-slate-900 "
                )}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Cart"
            className="relative grid h-11 w-11 place-items-center rounded-full bg-slate-100 transition-smooth hover:bg-emerald-50"
          >
            <ShoppingCart className="h-4.5 w-4.5 text-slate-900" />
            <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-yellow-400 text-[10px] font-bold text-yellow-950">
              3
            </span>
          </button>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-smooth bg-emerald-600 text-white hover:bg-emerald-700 shadow-soft h-9 px-4 hidden sm:inline-flex hover:shadow-glow hover:-translate-y-0.5">
            <User className="h-4 w-4" /> Login
          </button>

          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-px mx-auto max-w-7xl pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-card">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition-smooth hover:bg-emerald-50",
                    isActive ? "bg-emerald-50 text-emerald-800 font-bold" : "text-slate-900"
                  )}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
