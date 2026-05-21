import { ArrowRight, ChevronRight, Send, Package, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
    {
        category: "Nutrition",
        categoryColor: "bg-emerald-700",
        date: "20 May 2024",
        title: "Health Benefits of Drinking Cow Milk Daily",
        href: "/blogs/cow-milk-benefits",
        image: "/images/blogs/cow-milk-benefits.jpg",
    },
    {
        category: "Farming",
        categoryColor: "bg-emerald-600",
        date: "18 May 2024",
        title: "Our Farm Practices for Better & Healthy Milk",
        href: "/blogs/farm-practices",
        image: "/images/blogs/farm-practices.jpg",
    },
    {
        category: "Recipes",
        categoryColor: "bg-red-500",
        date: "15 May 2024",
        title: "Easy & Healthy Recipes with Tofu & Paneer",
        href: "/blogs/tofu-paneer-recipes",
        image: "/images/blogs/tofu-recipes.jpg",
    },
];
const perks = [
    { icon: Package, label: "Secure Packaging" },
    { icon: Truck, label: "On-Time Delivery" },
    { icon: RotateCcw, label: "Easy Returns" },
];

const HomeBlog = () => {
    return (
        <section className='w-full px-4 lg:px-12 space-y-5 pb-5'>
            {/* blog  */}
            <section className="w-full">

                {/* Header Row */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                            From Our Blog
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                            Health, Nutrition &amp; More
                        </h2>
                    </div>
                    <Link
                        to="/blogs"
                        className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors whitespace-nowrap"
                    >
                        VIEW ALL BLOGS <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.title}
                            to={blog.href}
                            className="group flex flex-row gap-4 rounded-2xl border border-slate-100 bg-white p-3 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                        >
                            {/* Image */}
                            <div className="relative shrink-0 w-[140px] h-[130px] rounded-xl overflow-hidden bg-slate-100">
                                {/* Category Badge */}
                                <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold text-white px-2 py-0.5 rounded-sm ${blog.categoryColor}`}>
                                    {blog.category}
                                </span>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center gap-2 flex-1 py-1">
                                <p className="text-[11px] text-slate-400 font-medium">{blog.date}</p>
                                <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                                    {blog.title}
                                </h3>
                                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-1 group-hover:gap-2 transition-all duration-200">
                                    Read More <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>

            {/* stay update  */}
            <section className="w-full px-4">
                <div
                    className="relative w-full rounded-2xl overflow-hidden bg-[#2d6a0a] flex items-center"
                    style={{ minHeight: "110px" }}
                >
                    {/* Decorative leaf blobs */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* top-left leaf */}
                        <svg className="absolute -top-4 -left-4 w-32 h-32 opacity-20" viewBox="0 0 120 120" fill="none">
                            <ellipse cx="30" cy="60" rx="30" ry="60" fill="#a3e635" transform="rotate(-30 30 60)" />
                            <ellipse cx="80" cy="40" rx="20" ry="50" fill="#86efac" transform="rotate(20 80 40)" />
                        </svg>
                        {/* bottom-right leaf */}
                        <svg className="absolute -bottom-6 right-[320px] w-40 h-40 opacity-15" viewBox="0 0 140 140" fill="none">
                            <ellipse cx="70" cy="70" rx="40" ry="70" fill="#bbf7d0" transform="rotate(40 70 70)" />
                        </svg>
                        {/* small scattered dots */}
                        <div className="absolute top-3 left-40 w-2 h-2 rounded-full bg-white/10" />
                        <div className="absolute bottom-4 left-60 w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>

                    {/* ── LEFT: Text + Input ── */}
                    <div className="relative z-10 flex flex-col gap-3 px-6 py-6 flex-1 max-w-lg">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                            Stay Updated
                        </p>
                        <h3 className="text-base lg:text-lg font-extrabold text-white leading-snug">
                            Get the Best Deals &amp; Farm Fresh Updates
                        </h3>
                        <p className="text-[11px] text-white/70 -mt-1">
                            Subscribe to our newsletter and never miss our new offers!
                        </p>

                        {/* Email Input */}
                        <div className="flex items-center gap-0 mt-1 max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-9 rounded-l-full px-4 text-xs bg-white/90 placeholder:text-slate-400 text-slate-800 outline-none focus:bg-white transition-colors"
                            />
                            <button className="h-9 px-4 rounded-r-full bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-yellow-950 text-xs font-extrabold uppercase tracking-wide transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap">
                                <Send className="w-3 h-3" />
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* ── CENTER: Milk bottle image ── */}
                    <div className="relative z-10 hidden md:flex items-end justify-center flex-1 self-stretch overflow-hidden">
                        <img
                            src="/images/newsletter/milk-bottles.png"
                            alt="Fresh milk bottles"
                            className="h-[130%] max-h-36 object-contain drop-shadow-xl translate-y-2"
                        />
                    </div>

                    {/* ── RIGHT: 3 perks ── */}
                    <div className="relative z-10 hidden lg:flex items-center gap-6 px-6 shrink-0">
                        {/* vertical divider */}
                        <span className="block h-14 w-px bg-white/15" />

                        {perks.map((p) => (
                            <div key={p.label} className="flex flex-col items-center gap-1.5 text-center">
                                <div className="grid place-items-center w-10 h-10 rounded-full border border-white/20 bg-white/10">
                                    <p.icon className="w-4.5 h-4.5 text-white" strokeWidth={1.6} />
                                </div>
                                <p className="text-[10px] font-semibold text-white/80 leading-tight max-w-[64px]">
                                    {p.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </section>
    )
}

export default HomeBlog