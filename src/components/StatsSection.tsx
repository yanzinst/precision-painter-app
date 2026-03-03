import { useEffect, useRef, useState } from "react";
import statsBg from "@/assets/stats-bg.png";
import cardElevadores from "@/assets/card-elevadores.jpg";
import cardRestaurantes from "@/assets/card-restaurantes.jpg";
import cardBigwheel from "@/assets/card-bigwheel.jpg";
import cardBacklight from "@/assets/card-backlight.jpg";

const stats = [
  { label: "Elevadores", sublabel: "comerciais e residenciais", value: 72, unit: "pontos", image: cardElevadores },
  { label: "Restaurantes", sublabel: "e Cafeterias Premium", value: 58, unit: "pontos", image: cardRestaurantes },
  { label: "Circuito", sublabel: "Big Wheel", value: 9, unit: "pontos", image: cardBigwheel },
  { label: "Backlight", sublabel: "indoor", value: 9, unit: "pontos", image: cardBacklight },
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
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-foreground/20 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300 mb-4">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Label */}
              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                {stat.label}
              </h3>
              <p className="text-sm md:text-base text-foreground/80 mb-1">
                {stat.sublabel}
              </p>
              {/* Count */}
              <div className="text-3xl md:text-4xl font-black text-primary">
                <CountUp target={stat.value} inView={inView} />
                <span className="text-lg md:text-xl font-bold text-foreground/70 ml-1">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
