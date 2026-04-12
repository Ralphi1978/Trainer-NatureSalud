import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1) || "inicio";

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-muted/40">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Error 404
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            Página no encontrada
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          La ruta <span className="font-medium text-foreground">/{pageName}</span>{" "}
          no existe en esta web.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
