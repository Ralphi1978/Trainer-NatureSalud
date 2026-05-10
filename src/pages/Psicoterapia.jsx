import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  ArrowRight,
  HeartHandshake,
  Leaf,
  Users,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import ayudarHeroImg from "../assets/optimized/ayudar-hero.webp";

const quickLinks = [
  {
    icon: Apple,
    title: "Para empezar por lo básico",
    subtitle: "Nutrición",
    href: "#nutricion",
  },
  {
    icon: Leaf,
    title: "Para trabajar el cuerpo",
    subtitle: "Terapias",
    href: "#terapias",
  },
  {
    icon: HeartHandshake,
    title: "Para entender lo que te pasa",
    subtitle: "Individual",
    href: "#individual",
  },
  {
    icon: Users,
    title: "Para profundizar",
    subtitle: "Talleres",
    href: "#talleres-grupo",
  },
];

function SectionIntro({ number, title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
        {number}. {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg italic text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

export default function Psicoterapia() {
  useEffect(() => {
    document.title = "¿Cómo te puedo ayudar? | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={ayudarHeroImg}
        title="¿Cómo te puedo ayudar?"
        subtitle="Distintas formas de acompañarte según lo que necesites ahora mismo"
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                Si sientes que algo no está bien, que hay malestar físico o
                emocional y no sabes por dónde empezar, aquí puedes encontrar
                diferentes formas de empezar a sentirte mejor.
              </p>
              <p>
                Cada persona está en un momento diferente. Por eso, he creado
                distintas formas de acompañarte, según lo que necesites ahora
                mismo.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                ¿No sabes por dónde empezar? Hablemos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection key={item.title} delay={index * 0.06}>
                  <a
                    href={item.href}
                    className="group flex h-full rounded-[1.75rem] border border-[#e4d8c9] bg-[#fffdf8] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbba6] hover:shadow-[0_20px_40px_rgba(40,32,24,0.05)]"
                  >
                    <div>
                      <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.title}
                      </p>
                      <p className="mt-2 font-heading text-2xl font-light text-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section id="nutricion" className="border-t border-border/70 py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <SectionIntro
              number="1"
              title="Nutrición y alimentación"
              subtitle="Nutrición y alimentación consciente"
            />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                La forma en la que te alimentas influye directamente en cómo te
                sientes.
              </p>
              <p>
                Si quieres empezar a cuidarte desde lo más básico, aquí podemos
                trabajar juntas para encontrar una alimentación más adecuada a
                tu cuerpo y a tu momento vital.
              </p>
              <p>
                A través de dietas personalizadas, empezarás a sentirte menos
                inflamada, con más energía y mayor equilibrio.
              </p>
              <p>
                No se trata solo de qué comes, sino de cómo te cuidas y cómo
                empiezas a sentirte mejor en tu día a día.
              </p>
            </div>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4"
            >
              Más información / Reservar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section id="terapias" className="border-t border-border/70 py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <SectionIntro
              number="2"
              title="Terapias naturales"
              subtitle="Medicina tradicional china, fitoterapia y auriculoterapia"
            />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Si sientes que tu cuerpo está desajustado, con molestias o
                falta de energía, estas herramientas pueden ayudarte.
              </p>
              <p>
                A través de técnicas naturales, trabajamos sobre el cuerpo para
                que poco a poco recupere el equilibrio y puedas empezar a
                sentirte mejor.
              </p>
              <p>
                Es una forma suave y respetuosa de acompañar tu bienestar.
              </p>
              <p>
                Muchas veces el cuerpo es el primero en mostrar que algo no
                está bien.
              </p>
            </div>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4"
            >
              Más información / Reservar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section
        id="individual"
        className="border-t border-border/70 bg-muted/40 py-20 lg:py-24"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <SectionIntro
              number="3"
              title="Terapia individual"
              subtitle="Acompañamiento terapéutico personalizado"
            />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Si hay algo en tu vida que no entiendes, si sientes ansiedad,
                confusión o malestar y no sabes de dónde viene, este espacio es
                para ti.
              </p>
              <p>
                En las sesiones vamos a ir a eso que te está pasando, para
                comprenderlo y empezar a transformarlo.
              </p>
              <p>
                Sin forzar, sin tapar lo que sientes, sino entendiendo lo que
                hay detrás.
              </p>
              <p>
                Es un acompañamiento cercano, respetuoso y adaptado a ti.
              </p>
            </div>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4"
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section id="talleres-grupo" className="border-t border-border/70 py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <SectionIntro
              number="4"
              title="Talleres en grupo"
              subtitle="Talleres de autoconocimiento"
            />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Un espacio grupal donde trabajar en profundidad lo que te pasa,
                acompañada de otras mujeres que están en un proceso similar.
              </p>
              <p>
                A diferencia de la terapia individual, aquí seguimos un
                recorrido paso a paso, que te permite entenderte mejor y avanzar
                de forma más consciente en tu proceso.
              </p>
              <p>
                Si sientes que quieres implicarte en un cambio más profundo,
                este puede ser el siguiente paso.
              </p>
            </div>
            <Link
              to="/talleres"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline underline-offset-4"
            >
              Ver talleres
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-border/70 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
              No importa en qué punto estés.
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Lo importante es empezar.
            </p>
            <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground">
              Puedes hacerlo desde el cuerpo, desde el acompañamiento
              individual o desde un proceso más profundo de autoconocimiento.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center lg:px-10">
          <AnimatedSection>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/72 md:text-xl">
              Si sientes que es tu momento de empezar, aquí puedes dar el
              primer paso.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
