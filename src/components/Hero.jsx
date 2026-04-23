import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import hero1 from "../assets/hero-slider-1.png";
import hero2 from "../assets/hero-slider-2.png";

const slides = [
  {
    image: hero1,
    tagline: "Everyone Needs Milk",
    title: "DAIRY ALWAYS A GOOD CHOICE",
    description: "Make Your Day A Little Sweeter Everyday Is A Good Day To Be The Dairy Farm.",
    buttonText: "VIEW PRODUCT",
    link: "/products"
  },
  {
    image: hero2,
    tagline: "Farm Fresh Quality",
    title: "NATURAL & ORGANIC DAIRY",
    description: "Sourced from local grass-fed farms, delivered to your doorstep at dawn.",
    buttonText: "ORDER NOW",
    link: "/subscription"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[750px] w-full overflow-hidden bg-slate-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-px mx-auto max-w-7xl">
              <div className="max-w-2xl animate-fade-up">
                <p className="font-semibold uppercase tracking-[0.2em] text-yellow-100 mb-4 drop-shadow-md">
                  {slide.tagline}
                </p>
                <h1 className="text-5xl lg:text-8xl font-display font-black leading-tight text-white drop-shadow-lg mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl text-white/90 max-w-lg mb-10 drop-shadow-md">
                  {slide.description}
                </p>
                <Link
                  to={slide.link}
                  className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 lg:px-10 pointer-events-none">
        <button
          onClick={prevSlide}
          className="group pointer-events-auto w-14 h-14 rounded-full border-2 border-white/50 bg-black/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-emerald-600 hover:border-emerald-600"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110" />
        </button>
        <button
          onClick={nextSlide}
          className="group pointer-events-auto w-14 h-14 rounded-full border-2 border-white/50 bg-black/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-emerald-600 hover:border-emerald-600"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-110" />
        </button>
      </div>

      {/* Milk Ripple Effect (Bottom SVG) */}
      <div className="absolute bottom-0 left-0 w-full z-40 pointer-events-none overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] lg:h-[100px] fill-slate-50"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2.29,1200,52.47V0Z"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,82.93,36.22,167,25.2,250.24-3.53,41.4-14.28,81.31-31.56,123.6-35.34A446,446,0,0,1,1200,10.23V0Z" opacity=".25"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
