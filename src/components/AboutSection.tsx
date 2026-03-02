import aboutImg from "@/assets/about-tshirt.jpg";

const AboutSection = () => {
  return (
    <section
      id="quem-somos"
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${aboutImg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/85 leading-relaxed">
              A <strong className="text-foreground">Intermidia</strong> é especialista em
              comunicação fora de casa, também conhecida como Out of Home (OOH) e
              Digital Out of Home (DOOH), atuando no mercado{" "}
              <strong className="text-foreground">desde 2007</strong>. Nossa missão é
              transformar os espaços da cidade em grandes oportunidades para marcas se
              conectarem com as pessoas, no momento certo e no lugar certo.
            </p>

            <p className="text-lg text-foreground/85 leading-relaxed">
              Acreditamos que a propaganda evoluiu.
              <br />
              Hoje, comunicar é estar presente onde as pessoas realmente estão —{" "}
              <span className="text-primary font-semibold italic">
                em momentos de atenção e decisão.
              </span>
            </p>

            <p className="text-lg text-foreground/85 leading-relaxed">
              Por isso, entregamos soluções de mídia{" "}
              <strong className="text-foreground">OOH e DOOH</strong> com alto impacto
              visual e posicionamento estratégico, em locais que fazem parte da rotina
              do seu público:
              <br />
              <strong className="text-foreground">
                restaurantes, elevadores comerciais e residenciais, shoppings centers e
                grandes painéis de LED nas ruas e avenidas mais movimentadas.
              </strong>
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mt-8">
              Com criatividade, tecnologia e foco em resultados, fazemos sua mensagem
              ir além do óbvio.
            </h3>
          </div>

          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Equipe Intermidia"
              className="rounded-2xl shadow-2xl max-h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
