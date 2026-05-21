import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu, ShoppingCart, User, X, Search, Heart,
  ChevronDown, Milk, Leaf, Apple, Tractor, Info, BookOpen, Phone
} from "lucide-react";
import { cn } from "../lib/utils";

// ─── Nav Data ────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "All Products", href: "/shop/all", icon: "🛍️" },
      { label: "Cow Milk", href: "/shop/cow-milk", icon: "🐄" },
      { label: "Buffalo Milk", href: "/shop/buffalo-milk", icon: "🐃" },
      { label: "Soya Milk", href: "/shop/soya-milk", icon: "🌱" },
      { label: "Tofu", href: "/shop/tofu", icon: "🟡" },
      { label: "Paneer", href: "/shop/paneer", icon: "🧀" },
      { label: "Ghee", href: "/shop/ghee", icon: "✨" },
      { label: "Combos", href: "/shop/combos", icon: "📦" },
      { label: "Subscription Plans", href: "/subscription", icon: "🔄" },
    ],
  },
  {
    label: "Categories",
    href: "/categories",
    mega: true,
    columns: [
      {
        title: "Dairy Products",
        icon: "🥛",
        items: [
          { label: "Cow Milk", href: "/shop/cow-milk" },
          { label: "Buffalo Milk", href: "/shop/buffalo-milk" },
          { label: "Paneer", href: "/shop/paneer" },
          { label: "Ghee", href: "/shop/ghee" },
          { label: "Butter", href: "/shop/butter" },
          { label: "Curd", href: "/shop/curd" },
        ],
      },
      {
        title: "Plant Based",
        icon: "🌿",
        items: [
          { label: "Soya Milk", href: "/shop/soya-milk" },
          { label: "Tofu", href: "/shop/tofu" },
          { label: "Protein Tofu", href: "/shop/protein-tofu" },
          { label: "Organic Soybeans", href: "/shop/soybeans" },
        ],
      },
      {
        title: "Healthy Products",
        icon: "💚",
        items: [
          { label: "Low Fat Milk", href: "/shop/low-fat" },
          { label: "High Protein Products", href: "/shop/high-protein" },
          { label: "Healthy Combos", href: "/shop/healthy-combos" },
          { label: "Organic Products", href: "/shop/organic" },
        ],
      },
    ],
  },
  {
    label: "Our Farms",
    href: "/farms",
    dropdown: [
      { label: "Our Farms", href: "/farms", icon: "🏡" },
      { label: "Healthy Animals", href: "/farms/healthy-animals", icon: "🐄" },
      { label: "Clean Farming", href: "/farms/clean-farming", icon: "🌾" },
      { label: "Production Process", href: "/farms/production", icon: "⚙️" },
      { label: "Quality Testing", href: "/farms/quality", icon: "🔬" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about/story", icon: "📖" },
      { label: "Mission & Vision", href: "/about/mission", icon: "🎯" },
      { label: "Why Choose Us", href: "/about/why-us", icon: "⭐" },
      { label: "Testimonials", href: "/about/testimonials", icon: "💬" },
      { label: "Careers", href: "/about/careers", icon: "💼" },
    ],
  },
  {
    label: "Blogs",
    href: "/blogs",
    dropdown: [
      { label: "Health Tips", href: "/blogs/health-tips", icon: "💡" },
      { label: "Milk Benefits", href: "/blogs/milk-benefits", icon: "🥛" },
      { label: "Tofu Recipes", href: "/blogs/tofu-recipes", icon: "👨‍🍳" },
      { label: "Healthy Lifestyle", href: "/blogs/lifestyle", icon: "🏃" },
      { label: "Farm Updates", href: "/blogs/farm-updates", icon: "🌻" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const accountLinks = [
  { label: "My Orders", href: "/account/orders", icon: "📦" },
  { label: "Wishlist", href: "/account/wishlist", icon: "❤️" },
  { label: "Addresses", href: "/account/addresses", icon: "📍" },
  { label: "Logout", href: "/logout", icon: "🚪" },
];

// ─── Dropdown Component ───────────────────────────────────────────────────────

function SimpleDropdown({ items }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl bg-white shadow-2xl border border-emerald-50 py-2 z-50 animate-dropdown">
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-all duration-150 font-medium"
        >
          <span className="text-base leading-none">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

function MegaDropdown({ columns }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl bg-white shadow-2xl border border-emerald-50 p-5 z-50 animate-dropdown">
      <div className="grid grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
              <span className="text-lg">{col.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {col.title}
              </span>
            </div>
            <ul className="space-y-1">
              {col.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className="block text-sm text-slate-600 hover:text-emerald-700 hover:translate-x-1 transition-all duration-150 py-1 font-medium"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Search Bar ───────────────────────────────────────────────────────────────

function SearchBar({ onClose }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg p-4 z-40 animate-dropdown">
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          autoFocus
          type="text"
          placeholder="Search for milk, tofu, paneer, ghee..."
          className="w-full pl-11 pr-10 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 text-sm bg-slate-50"
        />
        <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (label) => { clearTimeout(timeoutRef.current); setActiveDropdown(label); };
  const closeDropdown = () => { timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120); };

  return (
    <>
      <style>{`
        @keyframes dropdown {
          from { opacity: 0; transform: translateY(-6px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)   translateX(-50%); }
        }
        @keyframes dropdown-simple {
          from { opacity: 0; transform: translateY(-6px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)   translateX(-50%); }
        }
        .animate-dropdown { animation: dropdown 0.18s cubic-bezier(.22,.68,0,1.2) both; }
        .transition-smooth { transition: all 0.2s ease; }
        .shadow-soft { box-shadow: 0 2px 20px rgba(0,0,0,0.06); }
        .shadow-card { box-shadow: 0 4px 30px rgba(0,0,0,0.08); }
      `}</style>

      <header className={cn(
        "sticky top-0 z-50 transition-smooth",
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-soft" : "bg-white shadow-sm"
      )}>

        {/* ── Main Nav Bar ── */}
        <nav className="w-full px-10 lg:px-12 flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center relative z-10 shrink-0">
            <img src="/log.png" alt="Milk Tofu" className="w-16 h-16 drop-shadow-md object-contain" />
          </Link>

          {/* Center Nav Links (desktop) */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown || item.mega ? openDropdown(item.label) : null}
                onMouseLeave={() => item.dropdown || item.mega ? closeDropdown() : null}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) => cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-smooth",
                    "hover:bg-emerald-50 hover:text-emerald-800",
                    isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-800"
                  )}
                >
                  {item.label}
                  {(item.dropdown || item.mega) && (
                    <ChevronDown className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === item.label ? "rotate-180" : ""
                    )} />
                  )}
                </NavLink>

                {/* Dropdowns */}
                {activeDropdown === item.label && (
                  <div
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    {item.mega
                      ? <MegaDropdown columns={item.columns} />
                      : item.dropdown
                        ? <SimpleDropdown items={item.dropdown} />
                        : null}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1.5">

            {/* Search */}
            <button
              onClick={() => { setSearchOpen(!searchOpen); setAccountOpen(false); }}
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 hover:bg-emerald-50 transition-smooth"
            >
              <Search className="h-4 w-4 text-slate-700" />
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-full bg-slate-100 hover:bg-rose-50 transition-smooth relative"
            >
              <Heart className="h-4 w-4 text-slate-700" />
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full bg-slate-100 hover:bg-emerald-50 transition-smooth"
            >
              <ShoppingCart className="h-4 w-4 text-slate-700" />
              <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-yellow-400 text-[10px] font-bold text-yellow-950">
                3
              </span>
            </button>

            {/* Account */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => { setAccountOpen(!accountOpen); setSearchOpen(false); }}
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold bg-[#588702] text-white hover:bg-[#4a7402] shadow-sm transition-smooth"
              >
                <User className="h-4 w-4" />
                <span>My Account</span>
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", accountOpen ? "rotate-180" : "")} />
              </button>

              {accountOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-white shadow-2xl border border-slate-100 py-2 z-50 animate-[dropdown_0.18s_ease_both]"
                  style={{ animation: "dropdown-a 0.18s cubic-bezier(.22,.68,0,1.2) both" }}
                >
                  <style>{`@keyframes dropdown-a { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }`}</style>
                  <div className="px-4 py-2 border-b border-slate-50 mb-1">
                    <p className="text-xs text-slate-400 font-medium">My Account</p>
                  </div>
                  <NavLink to="/login" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">
                    <span>🔐</span> Login
                  </NavLink>
                  <NavLink to="/register" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">
                    <span>📝</span> Register
                  </NavLink>
                  <div className="border-t border-slate-50 mt-1 pt-1">
                    {accountLinks.map((a) => (
                      <NavLink key={a.href} to={a.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">
                        <span>{a.icon}</span> {a.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* ── Search Bar (slides down) ── */}
        {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden px-4 pb-5">
            <div className="rounded-3xl bg-white shadow-card overflow-hidden border border-slate-100">

              {/* Mobile account quick actions */}
              <div className="flex gap-2 p-3 border-b border-slate-50">
                <NavLink to="/login" onClick={() => setMobileOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#588702] text-white text-sm font-semibold">
                  <User className="h-4 w-4" /> Login
                </NavLink>
                <NavLink to="/register" onClick={() => setMobileOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-100 text-slate-800 text-sm font-semibold">
                  📝 Register
                </NavLink>
              </div>

              {/* Mobile nav links */}
              <ul className="p-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.dropdown || item.mega ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-smooth"
                        >
                          {item.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileExpanded === item.label ? "rotate-180" : "")} />
                        </button>
                        {mobileExpanded === item.label && (
                          <div className="ml-4 mb-2 border-l-2 border-emerald-100 pl-3 space-y-0.5">
                            {item.mega
                              ? item.columns.flatMap((col) =>
                                [
                                  <div key={col.title} className="pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 px-2">
                                    {col.icon} {col.title}
                                  </div>,
                                  ...col.items.map((sub) => (
                                    <NavLink key={sub.href} to={sub.href} onClick={() => setMobileOpen(false)}
                                      className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-medium">
                                      {sub.label}
                                    </NavLink>
                                  ))
                                ]
                              )
                              : item.dropdown.map((sub) => (
                                <NavLink key={sub.href} to={sub.href} onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-medium">
                                  <span>{sub.icon}</span> {sub.label}
                                </NavLink>
                              ))
                            }
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink to={item.href} onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => cn(
                          "block rounded-2xl px-4 py-3 text-sm font-semibold transition-smooth",
                          isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-800 hover:bg-emerald-50"
                        )}>
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile bottom actions */}
              <div className="flex items-center justify-around p-3 border-t border-slate-50">
                <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-700 text-xs font-medium">
                  <Heart className="h-5 w-5" /> Wishlist
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-700 text-xs font-medium relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 right-0 h-4 w-4 bg-yellow-400 rounded-full text-[9px] font-bold text-yellow-950 grid place-items-center">3</span>
                  Cart
                </button>
                <button onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
                  className="flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-700 text-xs font-medium">
                  <Search className="h-5 w-5" /> Search
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;