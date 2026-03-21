import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Raja Creative Studios Logo" className="w-20 h-20" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/919676379958?text=Hello!%20I%27m%20interested%20in%20your%20photography%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body font-semibold px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:brightness-110 transition-all"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/919676379958?text=Hello!%20I%27m%20interested%20in%20your%20photography%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center text-sm font-body font-semibold px-5 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
