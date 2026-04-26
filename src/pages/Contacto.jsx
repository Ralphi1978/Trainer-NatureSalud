import { useEffect } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import contactoHeroImg from "../assets/optimized/contacto-hero.webp";

const contactCards = [
  {
    title: "WhatsApp",
    subtitle: "Escríbeme",
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send?phone=34625183735",
    external: true,
  },
  {
    title: "Hablemos",
    subtitle: "+34 625 183 735",
    icon: Phone,
    href: "tel:+34625183735",
  },
  {
    title: "Email",
    subtitle: "lolaautoconocimiento\n@gmail.com",
    icon: Mail,
    href: "mailto:lolaautoconocimiento@gmail.com",
  },
  {
    title: "Consulta",
    subtitle: "Rambla Nova, 42\nVer ubicación",
    icon: MapPin,
    href: "https://maps.google.com/?q=Rambla+Nova,+42,+Mollet+del+Vall%C3%A8s+08100",
    external: true,
  },
];

export default function Contacto() {
  useEffect(() => {
    document.title = "Contacto | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero image={contactoHeroImg} title="Contacto" />

      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="font-heading text-2xl italic text-foreground/80">
              Si sientes que este espacio es para ti, estaré encantada de
              acompañarte
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <AnimatedSection key={card.title} delay={index * 0.06}>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="group flex h-full min-h-[190px] flex-col rounded-[2rem] border border-[#ddcfbf] bg-[linear-gradient(180deg,#fffaf2_0%,#fffdf8_100%)] px-7 py-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#c7b39c] hover:shadow-[0_18px_40px_rgba(120,91,60,0.10)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#f3e7d7] border border-[#e5d4bf] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#ead8c4]">
                        <Icon className="w-5 h-5 text-[#8e745c]" />
                      </div>
                      <p className="text-[11px] tracking-[0.28em] uppercase text-[#9b866f] mt-1">
                        {card.title}
                      </p>
                    </div>
                    <div className="mt-6 flex-1 flex items-start">
                      <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line break-words">
                        {card.subtitle}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-14">
            <a
              href="https://api.whatsapp.com/send?phone=34625183735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-[#9d8168] text-white rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg hover:bg-[#8d725b]"
            >
              Hablemos
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
