import React from "react";
import { Leaf, Star, ShoppingCart, ChevronRight } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const categories = [
    {
        name: "Cow Milk",
        desc: "Fresh & Pure",
        href: "/shop/cow-milk",
        image: "/images/categories/cow-milk.jpg",
    },
    {
        name: "Buffalo Milk",
        desc: "Rich & Creamy",
        href: "/shop/buffalo-milk",
        image: "/images/categories/buffalo-milk.jpg",
    },
    {
        name: "Soya Milk",
        desc: "Healthy & Protein Rich",
        href: "/shop/soya-milk",
        image: "/images/categories/soya-milk.jpg",
    },
    {
        name: "Tofu",
        desc: "Plant Based Protein",
        href: "/shop/tofu",
        image: "/images/categories/tofu.jpg",
    },
    {
        name: "Paneer",
        desc: "Soft & Fresh",
        href: "/shop/paneer",
        image: "/images/categories/paneer.jpg",
    },
    {
        name: "Ghee",
        desc: "Pure & Desi",
        href: "/shop/ghee",
        image: "/images/categories/ghee.jpg",
    },
];

const products = [
    {
        name: "Cow Milk",
        variant: "1 Litre",
        price: 60,
        mrp: 70,
        rating: 4.8,
        href: "/shop/cow-milk",
        image: "/images/products/cow-milk.jpg",
        badge: null,
    },
    {
        name: "Buffalo Milk",
        variant: "1 Litre",
        price: 70,
        mrp: 80,
        rating: 4.8,
        href: "/shop/buffalo-milk",
        image: "/images/products/buffalo-milk.jpg",
        badge: null,
    },
    {
        name: "Tofu",
        variant: "250gm",
        price: 45,
        mrp: 55,
        rating: 4.7,
        href: "/shop/tofu",
        image: "/images/products/tofu.jpg",
        badge: null,
    },
    {
        name: "Paneer",
        variant: "200gm",
        price: 80,
        mrp: 95,
        rating: 4.7,
        href: "/shop/paneer",
        image: "/images/products/paneer.jpg",
        badge: null,
    },
    {
        name: "Cow Ghee",
        variant: "500ml",
        price: 350,
        mrp: 440,
        rating: 4.9,
        href: "/shop/ghee",
        image: "/images/products/cow-ghee.jpg",
        badge: "Trending",
    },
    {
        name: "Soya Milk",
        variant: "1 Litre",
        price: 65,
        mrp: 75,
        rating: 4.6,
        href: "/shop/soya-milk",
        image: "/images/products/soya-milk.jpg",
        badge: null,
    },
];

const HomeProduct = () => {
    const navigate = useNavigate();
    const handleViewAllClick = () => {
        navigate("/products");
    };
    return (
        <section className="px-2 sm:px-4 md:px-8 lg:px-12 py-4 bg-slate-50">

            {/* shop by category  */}
            <section className="w-full px-4 ">
                {/* Header Row */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                            Shop By Categories
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                            Pure Goodness for Every Need
                        </h2>
                    </div>
                    <Link
                        to="/shop/all"
                        className="flex items-center gap-1 border border-slate-300 rounded-full px-4 py-2 text-sm font-bold text-slate-800 hover:border-emerald-500 hover:text-emerald-700 transition-all duration-200 whitespace-nowrap"
                    >
                        VIEW ALL <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.href}
                            className="group flex flex-col rounded-2xl bg-[#f5f5ec] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text + Button */}
                            <div className="flex flex-col items-center text-center px-3 pt-3 pb-4 gap-2">
                                <p className="font-extrabold text-slate-900 text-sm leading-tight">
                                    {cat.name}
                                </p>
                                <p className="text-xs text-slate-500 font-medium leading-tight">
                                    {cat.desc}
                                </p>
                                {/* Green arrow button */}
                                <div className="mt-1 grid place-items-center h-8 w-8 rounded-full bg-emerald-600 group-hover:bg-emerald-700 transition-colors duration-200 shadow-sm">
                                    <ChevronRight className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* best seller  */}
            <section className="w-full px-4 lg:px-10 py-10">
                {/* Header Row */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                            Best Sellers
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                            Our Most Loved Products
                        </h2>
                    </div>
                    <Link
                        to="/shop/all"
                        className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors whitespace-nowrap"
                    >
                        VIEW ALL <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="group relative flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                            {/* Badge */}
                            {product.badge && (
                                <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 leading-none shadow">
                                    {product.badge}
                                </span>
                            )}

                            {/* Product Image */}
                            <div className="w-full aspect-[4/3] overflow-hidden bg-slate-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col px-3 pt-3 pb-4 gap-1.5 flex-1">
                                {/* Name + Rating */}
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-slate-900 text-sm leading-tight truncate">
                                        {product.name}
                                    </p>
                                    <div className="flex items-center gap-0.5 shrink-0">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-semibold text-slate-600">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Variant */}
                                <p className="text-xs text-slate-500 font-medium">{product.variant}</p>

                                {/* Price */}
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-base font-extrabold text-slate-900">
                                        ₹{product.price}
                                    </span>
                                    <span className="text-xs text-slate-400 line-through font-medium">
                                        ₹{product.mrp}
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="mt-2 w-full flex items-center justify-center gap-1.5 rounded-full bg-[#2d6a0a] hover:bg-[#245608] active:scale-95 text-white text-xs font-bold py-2.5 transition-all duration-200">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default HomeProduct;