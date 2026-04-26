import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          WhatsApp
        </h4>
        <a
          href="https://api.whatsapp.com/send?phone=34625183735"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Escríbeme por WhatsApp</span>
        </a>
      </div>
      <div>
        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          Hablemos
        </h4>
        <a
          href="tel:+34625183735"
          className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>+34 625 183 735</span>
        </a>
      </div>
      <div>
        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          Correo
        </h4>
        <a
          href="mailto:lolaautoconocimiento@gmail.com"
          className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>lolaautoconocimiento@gmail.com</span>
        </a>
      </div>
      <div>
        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          Consulta
        </h4>
        <div className="flex items-start gap-3 text-foreground">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>
            Rambla Nova, 42
            <br />
            Mollet del Vallès 08100
          </span>
        </div>
      </div>
    </div>
  );
}
