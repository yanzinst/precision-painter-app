import { Phone, Instagram, Globe } from "lucide-react";
import contactVideo from "@/assets/contact-video.mp4";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none mb-8">Siga - nos nas redes sociais.</h2>

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

          {/* Right side - Vertical Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16', maxHeight: '520px' }}>
              <video
                src={contactVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;