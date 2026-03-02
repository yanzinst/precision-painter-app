import { useEffect, useRef, useState } from "react";
import serviceElevador from "@/assets/service-elevador.jpg";
import serviceTela from "@/assets/service-tela.jpg";
import servicePainel from "@/assets/service-painel.jpg";
import serviceVideowall from "@/assets/service-videowall.jpg";

const stats = [
  { label: "ELEVADORES", value: 72, image: serviceElevador },
  { label: "TELAS VERTICAIS", value: 58, image: serviceTela },
  { label: "PAINEL LED", value: 10, image: servicePainel },
  { label: "VÍDEO WALL", value: 9, image: serviceVideowall },
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
      className="py-20 bg-background"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-2">
          Estamos presentes nas cidades de:
        </h2>
        <p className="text-xl md:text-2xl font-bold text-center text-foreground mb-16">
          Londrina, Maringá e Balneário Camboriú.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="bg-foreground/10 rounded-lg px-4 py-1 mb-3">
                <span className="text-xs md:text-sm font-bold tracking-wider text-foreground">
                  {stat.label}
                </span>
              </div>
              <div className="text-5xl md:text-7xl font-black text-primary mb-4">
                <CountUp target={stat.value} inView={inView} />
              </div>
              <div className="w-48 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
