import { useEffect, useRef, useState, useCallback } from "react";
import statsBg from "@/assets/stats-bg.png";
import cardElevadores from "@/assets/card-elevadores.jpg";
import cardRestaurantes from "@/assets/card-restaurantes.jpg";
import cardBigwheel from "@/assets/card-bigwheel.jpg";
import bigwheel2 from "@/assets/bigwheel-2.jpg";
import bigwheel3 from "@/assets/bigwheel-3.jpg";
import cardBacklight from "@/assets/card-backlight.jpg";

const stats = [
  { label: "Elevadores", sublabel: "comerciais e residenciais", value: 72, unit: "pontos", images: [cardElevadores] },
  { label: "Restaurantes", sublabel: "e Cafeterias Premium", value: 58, unit: "pontos", images: [cardRestaurantes] },
  { label: "Big Wheel", sublabel: "Roda Gigante ", value: 9, unit: "pontos", images: [cardBigwheel, bigwheel2, bigwheel3] },
  { label: "Backlight", sublabel: "indoor", value: 9, unit: "pontos", images: [cardBacklight] },
];

const CountUp = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span>{count}</span>;
};

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${alt} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${(i - current) * 100}%)`,
          }}
        />
      ))}
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="onde-estamos"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-1">
          Estamos presentes nas cidades de:
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-foreground mb-16">
          Londrina, Maringá e Balneário Camboriú.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Card image with rounded border */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-foreground/20 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300 mb-4 relative">
                {stat.images.length > 1 ? (
                  <ImageCarousel images={stat.images} alt={stat.label} />
                ) : (
                  <img
                    src={stat.images[0]}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Label */}
              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                {stat.label}
              </h3>
              <p className="text-sm md:text-base text-foreground/80 mb-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
