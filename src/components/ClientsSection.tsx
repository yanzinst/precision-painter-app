const clientNames = [
  "Cipasa", "Todimo", "PLAENGE", "AURORA", "Jeep", "Unimed",
  "Colégio Positivo", "BrasilSul", "SICOOB", "ZEISS", "Jurema", "HAVAN",
  "HS Consórcios", "Pamplona", "bw8", "Claro", "Evangélico", "Sicredi",
  "Anjos", "Mercedes-Benz", "PUCPR", "ambev", "O Boticário", "Muffato",
  "Budweiser", "TOYOTA", "Viação Garcia", "GWM",
];

const ClientsSection = () => {
  return (
    <section
      id="clientes"
      className="py-20 relative overflow-hidden"
    >
      {/* Light background with orange side accents */}
      <div className="absolute inset-0 bg-surface-light" />
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-primary rounded-r-[3rem]" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-primary rounded-l-[3rem]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-4">
            Eles já confiam na Intermidia para estar sempre em evidência.
          </h2>
          <p className="text-lg text-surface-light-foreground/70">
            Junte-se às marcas que escolhem comunicar com relevância.
          </p>
          <p className="text-lg text-surface-light-foreground">
            Exiba sua marca com{" "}
            <strong>destaque nos melhores pontos OOH e DOOH.</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {clientNames.map((name, i) => (
            <div
              key={i}
              className="bg-surface-light border border-border/20 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-[120px]"
            >
              <span className="text-sm font-semibold text-surface-light-foreground/80">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
