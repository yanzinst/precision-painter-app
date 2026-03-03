import { useState, useEffect } from "react";
import clientHavan from "@/assets/client-havan.png";
import clientBoticario from "@/assets/client-boticario.png";
import moldeLp from "@/assets/molde-lp.png";

const clients = [
  { name: "Havan", logo: clientHavan },
  { name: "O Boticário", logo: clientBoticario },
];

const ClientsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clients.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="clientes"
      className="py-20 mt-20 relative overflow-hidden"
    >
      {/* Dark background matching stats section style */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-4">
            Eles já confiam na Intermidia para estar sempre em evidência.
          </h2>
          <p className="text-lg text-foreground/70">
            Junte-se às marcas que escolhem comunicar com relevância.
          </p>
          <p className="text-lg text-foreground">
            Exiba sua marca com{" "}
            <strong>destaque nos melhores pontos OOH e DOOH.</strong>
          </p>
        </div>

        {/* Single rotating sponsor card */}
        <div className="flex justify-center mt-10">
          <div className="relative w-[500px] h-[160px] flex items-center justify-center">
            <img src={moldeLp} alt="Frame" className="absolute inset-0 w-full h-full object-contain" />
            {clients.map((client, i) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="absolute max-h-[60px] max-w-[200px] object-contain transition-opacity duration-700 ease-in-out z-10"
                style={{
                  opacity: i === current ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
