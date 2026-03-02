import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Onde estamos", href: "#onde-estamos" },
  { label: "Nossos clientes", href: "#clientes" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 rounded-sm bg-primary" />
              <div className="w-2 h-2 rounded-sm bg-primary" />
              <div className="w-2 h-2 rounded-sm bg-primary" />
              <div className="w-2 h-2 rounded-sm bg-primary" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Intermi<span className="text-primary">dia</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-dark/98 backdrop-blur-md border-t border-border pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3 text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            Fale conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
