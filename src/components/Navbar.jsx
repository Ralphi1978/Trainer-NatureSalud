import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre mí", path: "/sobre-mi" },
  { label: "¿Cómo trabajo?", path: "/filosofia" },
  { label: "¿Cómo te puedo ayudar?", path: "/psicoterapia" },
  { label: "Talleres", path: "/talleres" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="font-heading text-2xl lg:text-3xl font-light tracking-wide text-foreground"
          >
            Lola Montes
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative pb-2 text-sm font-body font-normal tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-primary transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 animate-breathe-in">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block rounded-full px-3 py-2 text-sm font-body tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
