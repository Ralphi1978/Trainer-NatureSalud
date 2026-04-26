import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import sobreMiHeroImg from "../assets/optimized/sobre-mi-hero.webp";
import sobreMiPortraitImg from "../assets/optimized/sobre-mi-portrait.webp";

const trayectoriaItems = [
  {
    title: "Máster para Terapeutas en Evolución Consciente",
    description:
      "Título otorgado por Paloma Cabadas · Creadora del programa Evolución Consciente · 2025-2026",
  },
  {
    title: "Formación en psicoterapia psicoanalítica aplicada",
    description: "E.E.P.A. · Barcelona · 2009-2014 · duración de 5 años",
  },
  {
    title: "Medicina tradicional china",
    description:
      "Escuela de Medicina Tradicional Oriental Neijing · Pozo Amargo (Cuenca, España) · duración de 3 años",
  },
  {
    title: "Nutrición y alimentación integrativa",
    description:
      "Centro Integral de Nuevas Tecnologías (INTEGRAL) · ENFES · España · duración de 2 años",
  },
];

export default function SobreMi() {
  useEffect(() => {
    document.title = "Sobre mí | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={sobreMiHeroImg}
        title="Sobre mí"
        subtitle="Terapeuta | Acompañamiento terapéutico y evolución consciente | Mollet del Vallès"
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
                Trayectoria
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <ul className="space-y-6">
                {trayectoriaItems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-3" />
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={sobreMiPortraitImg}
                alt="Lola Montes - Terapeuta en evolución consciente"
                className="rounded-2xl shadow-2xl shadow-foreground/10 w-full aspect-[3/4] object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
              Personal
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-8" />
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
              <p>
                Un camino de conciencia cobra sentido cuando lo caminamos
                despiertos y conscientes de quiénes somos. Mi trabajo nace de
                una búsqueda profunda por comprender al ser humano en todas sus
                dimensiones. Desde temprana edad sentía la inquietud de saber
                quién era y qué hacíamos aquí. Me hacía preguntas y siempre
                quería encontrar respuestas.
              </p>
              <p>
                Por mi sensibilidad, mi mundo personal y profesional han ido
                siempre de la mano, buscando un sentido a mi propia vida. Este
                último año ha sido muy importante y revelador tras finalizar el
                máster de Terapeutas en Evolución Consciente, lo que ha supuesto
                un antes y un después para consolidar todo el conocimiento que
                he ido integrando a lo largo del tiempo.
              </p>
              <p>
                Más allá de todo lo aprendido, lo que define mi trabajo es la
                presencia, la cercanía y la capacidad de acompañar a las
                personas en lo que están viviendo, desde una mirada consciente y
                profunda.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
              ¿Te acompaño?
            </h2>
            <p className="text-background/60 mb-8">
              Un espacio de escucha, conciencia y acompañamiento personal
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
            >
              Hablemos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
