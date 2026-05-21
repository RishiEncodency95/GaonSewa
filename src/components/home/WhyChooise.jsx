import React from 'react'
import { Beef, Sprout, Heart, SmilePlus, ShieldCheck, Users, Truck, Leaf, Home, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
    { icon: Beef, label: "Healthy Animals" },
    { icon: Sprout, label: "Clean Farms" },
    { icon: Heart, label: "Natural Feed" },
    { icon: SmilePlus, label: "Happy Farmers" },
];
const farmImages = [
    {
        label: "Happy Animals",
        image: "/images/farm/happy-animals.jpg",
    },
    {
        label: "Green & Clean Farms",
        image: "/images/farm/clean-farms.jpg",
    },
    {
        label: "Hygienic Process",
        image: "/images/farm/hygienic-process.jpg",
    },
    {
        label: "Safe Packaging",
        image: "/images/farm/safe-packaging.jpg",
    },
];

const stats = [
    { icon: Users, value: "10K+", label: "Happy Families" },
    { icon: Truck, value: "500+", label: "Daily Deliveries" },
    { icon: Leaf, value: "100%", label: "Natural Products" },
    { icon: Home, value: "50+", label: "Farm Partners" },
    { icon: Globe, value: "25+", label: "Cities Served" },
];

const WhyChooise = () => {
    return (
        <section className="w-full px-4 lg:px-12  space-y-5">
            {/* Why chooise */}
            <section className="w-full px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">

                    {/* ── LEFT: Milk splash image ── */}
                    <div className="relative overflow-hidden min-h-[260px]">
                        <img
                            src="/images/why/milk-splash.jpg"
                            alt="Fresh milk splash with soybeans"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* ── CENTER: Text + icons ── */}
                    <div className="flex flex-col justify-center px-8 py-10 bg-white">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                            Why Choose Milk Tofo
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                            Quality You Can Trust
                        </h2>
                        <p className="text-sm text-slate-500 leading-relaxed mb-8">
                            We believe in purity, sustainability and honesty.
                            Our animals are healthy, our farms are clean, and
                            our products are 100% natural.
                        </p>

                        {/* 4 icon pillars */}
                        <div className="grid grid-cols-4 gap-3">
                            {pillars.map((p) => (
                                <div key={p.label} className="flex flex-col items-center gap-2 text-center">
                                    {/* Hexagon-style bordered icon */}
                                    <div className="grid place-items-center w-12 h-12 rounded-xl border-2 border-emerald-200 bg-emerald-50">
                                        <p.icon className="w-5 h-5 text-emerald-700" strokeWidth={1.6} />
                                    </div>
                                    <p className="text-[11px] font-semibold text-slate-700 leading-tight">
                                        {p.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Lab image with badge overlay ── */}
                    <div className="relative overflow-hidden min-h-[260px] bg-[#eef4e8]">
                        {/* Lab Tested badge — top left */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-slate-100">
                            <div className="grid place-items-center w-9 h-9 rounded-lg border-2 border-emerald-200 bg-emerald-50">
                                <ShieldCheck className="w-4.5 h-4.5 text-emerald-700" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="text-xs font-extrabold text-slate-900 leading-none">Lab Tested</p>
                                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Safe &amp; Trusted</p>
                            </div>
                        </div>

                        {/* Scientist image */}
                        <img
                            src="/images/why/lab-scientist.jpg"
                            alt="Lab testing for quality assurance"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                </div>
            </section>

            {/* form our  */}
            <section className="w-full px-4 ">
                <div className="flex flex-col lg:flex-row items-center gap-10">

                    {/* ── LEFT: Text Block ── */}
                    <div className="flex flex-col gap-4 lg:w-[280px] shrink-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                            From Our Farm To Your Table
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                            Bringing Farm Fresh Goodness To You
                        </h2>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            We follow ethical farming practices and modern hygiene standards to ensure the best quality products reach your doorstep.
                        </p>
                        <Link
                            to="/about/story"
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2d6a0a] hover:bg-[#245608] active:scale-95 text-white text-xs font-bold uppercase tracking-wide px-6 py-3 transition-all duration-200 w-fit shadow-sm"
                        >
                            Know Our Story
                        </Link>
                    </div>

                    {/* ── RIGHT: 4 Images ── */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        {farmImages.map((item) => (
                            <div key={item.label} className="flex flex-col gap-2">
                                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-center text-xs font-semibold text-slate-600">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* number section  */}

            <section className="w-full px-4 ">
                <div className="w-full rounded-2xl bg-[#1f5c0e] px-6 py-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-2">
                        {stats.map((s, i) => (
                            <div key={s.label} className="flex items-center gap-3 relative">
                                {/* Icon */}
                                <s.icon
                                    className="w-8 h-8 text-white/80 shrink-0"
                                    strokeWidth={1.4}
                                />

                                {/* Text */}
                                <div>
                                    <p className="text-xl font-extrabold text-white leading-none tracking-tight">
                                        {s.value}
                                    </p>
                                    <p className="text-[11px] text-white/60 font-medium mt-0.5">
                                        {s.label}
                                    </p>
                                </div>

                                {/* Divider — hide on last */}
                                {i < stats.length - 1 && (
                                    <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/15" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    )
}

export default WhyChooise