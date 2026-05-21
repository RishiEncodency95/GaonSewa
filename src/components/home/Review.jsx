import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Ravi Sharma",
        rating: 5,
        review: "The milk is so fresh and tasty. My family loves Milk Tofo products!",
        avatar: "/images/testimonials/ravi.jpg",
    },
    {
        name: "Priya Mehta",
        rating: 5,
        review: "Paneer and tofu are super soft and perfect for daily use.",
        avatar: "/images/testimonials/priya.jpg",
    },
    {
        name: "Ankit Verma",
        rating: 5,
        review: "Best quality, fast delivery and very hygienic packaging.",
        avatar: "/images/testimonials/ankit.jpg",
    },
    {
        name: "Neha Kapoor",
        rating: 5,
        review: "Finally a brand we can trust for pure and natural products.",
        avatar: "/images/testimonials/neha.jpg",
    },
    {
        name: "Suresh Patel",
        rating: 5,
        review: "The ghee is absolutely pure and aromatic. Best I've ever had!",
        avatar: "/images/testimonials/suresh.jpg",
    },
    {
        name: "Deepika Singh",
        rating: 4,
        review: "Fresh delivery every morning. Very happy with the subscription.",
        avatar: "/images/testimonials/deepika.jpg",
    },
];

const VISIBLE = 4;

const Review = () => {
    const [start, setStart] = useState(0);

    const prev = () => setStart((s) => Math.max(0, s - 1));
    const next = () => setStart((s) => Math.min(testimonials.length - VISIBLE, s + 1));

    const visible = testimonials.slice(start, start + VISIBLE);
    return (
        <section className='w-full px-4 lg:px-12 py-4'>
            {/* review  */}
            <section className="w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                        What Our Customers Say
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
                        Loved by Thousands of Families
                    </h2>
                </div>

                {/* Slider Row */}
                <div className="flex items-center gap-3">

                    {/* Prev Button */}
                    <button
                        onClick={prev}
                        disabled={start === 0}
                        className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
                        {visible.map((t) => (
                            <div
                                key={t.name}
                                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Avatar + Review */}
                                <div className="flex items-start gap-3">
                                    {/* Avatar */}
                                    <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                                e.target.parentNode.innerHTML = `<div class="w-full h-full grid place-items-center bg-emerald-100 text-emerald-700 font-bold text-lg">${t.name[0]}</div>`;
                                            }}
                                        />
                                    </div>

                                    {/* Review text */}
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {t.review}
                                    </p>
                                </div>

                                {/* Name + Stars */}
                                <div className="mt-auto">
                                    <p className="text-sm font-bold text-emerald-700 mb-1">{t.name}</p>
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={next}
                        disabled={start >= testimonials.length - VISIBLE}
                        className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                </div>
            </section>
        </section>
    )
}

export default Review