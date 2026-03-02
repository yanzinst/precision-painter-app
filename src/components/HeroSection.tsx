import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-2xl">
          {/* Divider line */}
          <div className="w-full h-px bg-foreground/20 mb-10" />

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Somos a <strong className="text-foreground">Intermidia</strong>. Criamos espaços
            publicitários de alto valor ao posicionar sua marca em locais{" "}
            <strong className="text-foreground">estratégicos do cotidiano.</strong>
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Sua marca em{" "}
            <br />
            <span className="text-primary font-black">total</span> evidência!
          </h1>

          <a
            href="https://wa.me/5543999922013"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg transition-all text-lg"
          >
            43 99992-2013
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
