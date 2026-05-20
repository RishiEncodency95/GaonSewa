import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const SLIDE_INTERVAL_MS = 5000;

const Hero = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/hero?status=Active`);

        let fetchedHeroes = [];
        if (Array.isArray(response.data)) {
          fetchedHeroes = response.data;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          fetchedHeroes = response.data.data;
        } else if (response.data?.heroes && Array.isArray(response.data.heroes)) {
          fetchedHeroes = response.data.heroes;
        } else if (response.data && typeof response.data === "object") {
          fetchedHeroes = [response.data];
        }

        const activeHeroes = fetchedHeroes.filter((h) => h.status === "Active");
        setSlidesData(activeHeroes);
        setCurrentSlide(0);
      } catch (err) {
        console.error("Failed to fetch hero slides:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroes();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, [slidesData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  }, [slidesData.length]);

  // Auto-slide — useCallback pe depend karta hai isliye properly restart hoga
  useEffect(() => {
    if (slidesData.length <= 1) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [nextSlide, slidesData.length]);

  if (loading) {
    return (
      <div className="h-[520px] w-full bg-slate-100 animate-pulse flex items-center justify-center">
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (error || slidesData.length === 0) {
    return (
      <div className="h-[520px] w-full bg-slate-100 flex items-center justify-center">
        <p className="text-slate-400 text-sm">No slides available.</p>
      </div>
    );
  }

  return (
    <section className="relative h-[500px] sm:h-[520px] lg:h-[530px] w-full overflow-hidden bg-slate-900">

      {/* ✅ KEY FIX: inactive slides pe visibility:hidden + pointer-events:none dono lagao */}
      {slidesData.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide._id || index}
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? "visible" : "hidden",
              pointerEvents: isActive ? "auto" : "none",
              transition: "opacity 700ms ease-in-out",
              zIndex: isActive ? 10 : 0,
            }}
          >
            <img
              src={slide.image?.url || slide.image}
              alt={slide.title}
              style={{
                position: "absolute",
                inset: 0,
                objectPosition: "center",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" style={{ zIndex: 1 }} />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 lg:px-16" style={{ zIndex: 2 }}>
              <div className="max-w-2xl">
                {(slide.subtitle || slide.tagline) && (
                  <p className="font-semibold uppercase tracking-[0.2em] text-yellow-300 mb-3 text-sm drop-shadow-md">
                    {slide.subtitle || slide.tagline}
                  </p>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                {slide.description && (
                  <p className="text-base lg:text-lg text-white/85 max-w-lg mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                )}
                {(slide.buttonLink || slide.link) && (
                  <Link
                    to={slide.buttonLink || slide.link}
                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-emerald-600 text-white font-bold text-base hover:bg-emerald-700 transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    {slide.buttonName || slide.buttonText || "Shop Now"}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* ✅ Arrows — z-index 50 pe, slides ke upar */}
      {slidesData.length > 1 && (
        <div
          className="absolute inset-0 flex items-center justify-between px-2 lg:px-4"
          style={{ zIndex: 50, pointerEvents: "none" }}
        >
          <button
            onClick={prevSlide}
            style={{ pointerEvents: "auto" }}
            className="w-8 h-8 rounded-full border-2 border-white/50 bg-black/20 flex items-center justify-center transition-all hover:bg-emerald-600 hover:border-emerald-600 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            style={{ pointerEvents: "auto" }}
            className="w-8 h-8 rounded-full border-2 border-white/50 bg-black/20 flex items-center justify-center transition-all hover:bg-emerald-600 hover:border-emerald-600 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}

      {/* ✅ Dot indicators — z-index 50 */}
      {/* {slidesData.length > 1 && (
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
          style={{ zIndex: 50 }}
        >
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      )} */}
    </section>
  );
};

export default Hero;
