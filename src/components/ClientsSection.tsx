import { useState, useEffect } from "react";
import clientBoticarioBacklight from "@/assets/client-boticario-backlight.png";
import clientMercedes from "@/assets/client-mercedes.png";
import clientUnimed from "@/assets/client-unimed.png";
import clientAmbev from "@/assets/client-ambev.png";
import clientJeep from "@/assets/client-jeep.png";
import clientHavan from "@/assets/client-havan.png";

const clients = [
  { name: "O Boticário", logo: clientBoticarioBacklight },
  { name: "Mercedes-Benz", logo: clientMercedes },
  { name: "Unimed", logo: clientUnimed },
  { name: "Ambev", logo: clientAmbev },
  { name: "Jeep", logo: clientJeep },
  { name: "Havan", logo: clientHavan },
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
    <section id="clientes" className="py-20 mt-20 relative overflow-hidden">
      {/* Dark background matching stats section style */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-2">
            Eles já confiam na Intermidia para estar sempre em evidência.
          </h2>
          <p className="text-lg text-foreground/70">Junte-se às marcas que escolhem comunicar com relevância.</p>
          <p className="text-lg text-foreground">
            Exiba sua marca com <strong>destaque nos melhores pontos OOH e DOOH.</strong>
          </p>
        </div>

        {/* Single rotating sponsor card */}
        <div className="flex justify-center mt-10">
          <div className="w-[500px] h-[200px] rounded-xl shadow-lg overflow-hidden relative">
            {clients.map((client, i) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
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
