import { Phone, Instagram, Globe, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none mb-8">Nos siga nas redes sociais.

              <br />
              ZAÇÃO
            </h2>

            <div className="mb-8">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-1">
                R. Alm. Barroso, 459
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground">
                Nova, Londrina – PR
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold tracking-widest text-foreground/60 uppercase">
                Entre em contato:
              </p>

              <a
                href="https://wa.me/5543999922013"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">(43) 9992-2013</span>
              </a>

              <a
                href="https://instagram.com/intermidiadigitalooh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Instagram size={18} className="text-primary-foreground" />
                </div>
                <span className="text-lg">intermidiadigitalooh</span>
              </a>

              <a
                href="https://www.redeintermidia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Globe size={18} className="text-primary-foreground" />
                </div>
                <span className="text-lg">www.redeintermidia.com/</span>
              </a>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5!2d-51.165!3d-23.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE4JzU0LjAiUyA1McKwMDknNTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Intermidia"
                className="w-full" />
              
            </div>
            {/* Pin decoration */}
            <div className="absolute -bottom-6 -right-6 w-20 h-24">
              <MapPin size={80} className="text-primary drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;