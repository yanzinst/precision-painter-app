import serviceMonitor from "@/assets/service-monitor.jpg";
import servicePainel from "@/assets/service-painel.jpg";
import serviceVideowall from "@/assets/service-videowall.jpg";
import serviceElevador from "@/assets/service-elevador.jpg";
import serviceTela from "@/assets/service-tela.jpg";

const services = [
{
  image: serviceElevador,
  title: "MONITOR VERTICAL",
  location: "Elevadores",
  flow: "FLUXO DE 20.000 PESSOAS/MÊS"
},
{
  image: servicePainel,
  title: "PAINEL LED\nTRIPLA FACE",
  location: "Av. Harry Prochet",
  flow: "FLUXO DE 80.000 CARROS/MÊS"
},
{
  image: serviceVideowall,
  title: "VÍDEO WALL",
  location: "Restaurante O Casarão – Av Maringá",
  flow: "FLUXO DE 33.000 PESSOAS/MÊS"
},
{
  image: serviceTela,
  title: "TELA VERTICAL",
  location: "Restaurantes, Padarias, Mercados e Conveniência",
  flow: "FLUXO DE 33.000 PESSOAS/MÊS"
},
{
  image: serviceMonitor,
  title: "VÍDEO WALL",
  location: "Panetteria Palhano – Av Ayrton Senna",
  flow: "FLUXO DE 33.000 PESSOAS/MÊS"
}];


const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="relative py-20 overflow-hidden"
      style={{
        background:
        "linear-gradient(180deg, hsl(16, 30%, 12%) 0%, hsl(0, 0%, 10%) 100%)"
      }}>
      
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16 text-foreground">
          O TIMING <span className="font-black">PERFEITO</span>
        </h2>

        {/* Carousel-like cards */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4">
          {services.map((service, i) =>
          <div
            key={i}
            className="flex-shrink-0 w-72 md:w-80 snap-center rounded-2xl overflow-hidden bg-card shadow-2xl group hover:scale-[1.02] transition-transform duration-300">
            
              <div className="relative h-64 overflow-hidden border-0">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-cover" />
              
                {/* Heart icon */}
                <div className="absolute top-3 left-3 bg-primary/80 rounded-full p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
              <div className="bg-primary p-4">
                <h3 className="text-sm font-bold text-primary-foreground whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
              <div className="p-4 bg-card">
                <p className="text-xs text-foreground/80">
                  <strong className="text-foreground">Local:</strong> {service.location}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{service.flow}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesSection;