import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const SLIDER_CONFIG = {
  autoPlay: true,
  interval: 5000,
  pauseOnHover: false,
  transition: 800,
  showArrows: true,
  showDots: false,
};

const Hero = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isPausedRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/hero?status=Active`);
        console.log("response", response)
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
        setCurrentSlide(1); // ✅ index 1 se start — 0 clone hai
      } catch (err) {
        console.error("Failed to fetch hero slides:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroes();
  }, []);

  // ✅ Clone array: [lastSlide, ...realSlides, firstSlide]
  const clonedSlides = slidesData.length > 0
    ? [slidesData[slidesData.length - 1], ...slidesData, slidesData[0]]
    : [];

  const total = clonedSlides.length;

  // ✅ Seamless jump — transition off karke silently reset karo
  const jumpTo = useCallback((index) => {
    setIsTransitioning(false);
    setCurrentSlide(index);
    // Next frame pe transition wapas on
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, []);

  // ✅ Jab clone pe pahuncho, silently real slide pe jump karo
  useEffect(() => {
    if (slidesData.length === 0) return;

    if (currentSlide === 0) {
      // Last clone — jump to real last
      const timer = setTimeout(() => jumpTo(slidesData.length), SLIDER_CONFIG.transition);
      return () => clearTimeout(timer);
    }
    if (currentSlide === total - 1) {
      // First clone — jump to real first
      const timer = setTimeout(() => jumpTo(1), SLIDER_CONFIG.transition);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slidesData.length, total, jumpTo]);

  // Auto-slide
  useEffect(() => {
    if (!SLIDER_CONFIG.autoPlay || slidesData.length <= 1) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) nextSlide();
    }, SLIDER_CONFIG.interval);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide, slidesData.length]);

  const handleMouseEnter = () => {
    if (SLIDER_CONFIG.pauseOnHover) isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    if (SLIDER_CONFIG.pauseOnHover) isPausedRef.current = false;
  };

  // Dot index — clone offset hatao
  const realIndex = currentSlide - 1;

  if (loading) {
    return (
      <div className="h-[530px] w-full bg-slate-100 animate-pulse flex items-center justify-center">
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (error || slidesData.length === 0) {
    return (
      <div className="h-[530px] w-full bg-slate-100 flex items-center justify-center">
        <p className="text-slate-400 text-sm">No slides available.</p>
      </div>
    );
  }

  return (
    <section
      className="relative h-[500px] sm:h-[520px] lg:h-[530px] w-full overflow-hidden bg-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ✅ Track — cloned slides ke saath */}
      <div
        style={{
          display: "flex",
          width: `${total * 100}%`,
          height: "100%",
          transform: `translateX(-${(currentSlide * 100) / total}%)`,
          transition: isTransitioning
            ? `transform ${SLIDER_CONFIG.transition}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : "none",
          willChange: "transform",
        }}
      >
        {clonedSlides.map((slide, index) => (
          <div
            key={`${slide._id || index}-${index}`}
            style={{ width: `${100 / total}%`, flexShrink: 0 }}
            className="relative h-full"
          >
            <img
              src={slide.image?.url || slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center block"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-black/20 z-[1]" />

            {/* Content */}
            <div className="absolute inset-0 z-[2] flex items-center px-12 lg:px-20">
              <div className="max-w-2xl">

                {/* Tagline */}
                {(slide.subtitle || slide.tagline) && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-[2px] bg-lime-400 rounded-full" />
                    <p className="text-lime-400 text-base font-bold uppercase tracking-[0.18em] [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                      {slide.subtitle || slide.tagline}
                    </p>
                    <div className="w-8 h-[2px] bg-lime-400 rounded-full" />
                  </div>
                )}

                {/* Heading */}
                <h2 className="text-[2.4rem] sm:text-5xl lg:text-[4.5rem] font-black leading-[1.08] tracking-tight text-white mb-4 [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_4px_32px_rgba(0,0,0,0.6)]">
                  {slide.title}
                </h2>

                {/* Divider */}
                <div className="w-14 h-[3px] bg-[#588702] rounded-full mb-4" />

                {/* Description */}
                {slide.description && (
                  <p className="text-base lg:text-lg text-white/90 max-w-lg font-semibold leading-relaxed mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.95),0_2px_20px_rgba(0,0,0,0.7)]">
                    {slide.description}
                  </p>
                )}

                {/* CTA Button */}
                {(slide.buttonLink || slide.link) && (
                  <Link
                    to={slide.buttonLink || slide.link}
                    className="inline-flex items-center gap-2.5 px-8 py-2 rounded-md bg-[#588702] text-white text-sm font-bold uppercase tracking-widest shadow-[0_8px_25px_rgba(88,135,2,0.45),0_4px_12px_rgba(0,0,0,0.25)] hover:bg-[#3f6300] hover:shadow-[0_14px_35px_rgba(88,135,2,0.6),0_8px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"                  >
                    {slide.buttonName || slide.buttonText || "Shop Now"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {SLIDER_CONFIG.showArrows && slidesData.length > 1 && (
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

      {/* Dots */}
      {SLIDER_CONFIG.showDots && slidesData.length > 1 && (
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
          style={{ zIndex: 50 }}
        >
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => { setIsTransitioning(true); setCurrentSlide(index + 1); }}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${index === realIndex
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;