import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      
      <StatsSection />
      <ClientsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Intermidia Digital OOH. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            redeintermidia.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
