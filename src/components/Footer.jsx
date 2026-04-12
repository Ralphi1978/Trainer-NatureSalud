import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h3 className="font-heading text-3xl font-light text-background mb-4">
              Lola Montes
            </h3>
            <p className="text-sm leading-relaxed text-background/60">
              Un proyecto de evolucion consciente
              <br />
              Sesiones presenciales y online.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest uppercase text-background/40 mb-6">
              Contacto
            </h4>
            <a
              href="mailto:lolacoldwater@hotmail.com"
              className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Mail className="w-4 h-4" />
              lolacoldwater@hotmail.com
            </a>
            <a
              href="tel:+34625183735"
              className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Phone className="w-4 h-4" />
              +34 625 183 735
            </a>
            <div className="flex items-start gap-3 text-sm text-background/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                Rambla Nova, 42
                <br />
                Mollet del Valles 08100
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs tracking-widest uppercase text-background/40 mb-6">
              Navegación
            </h4>
            {[
              { label: "Sobre mí", path: "/sobre-mi" },
              { label: "¿Cómo trabajo?", path: "/filosofia" },
              { label: "Psicoterapia", path: "/psicoterapia" },
              { label: "Cursos y talleres", path: "/talleres" },
              { label: "Contacto", path: "/contacto" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Lola Montes. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
