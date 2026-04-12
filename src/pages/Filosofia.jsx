import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";

const heroImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/42d72cdd9_generated_f2054040.png";

const sections = [
  {
    title: "¿Cuál es mi enfoque? ¿Dónde pongo mi atención?",
    content:
      "En el todo. Concibo al ser humano como un todo. Un todo que es mucho más que la suma de sus partes. Desde una visión holística e integradora, trabajo con aquello que se va manifestando en el presente, teniendo en cuenta cuerpo, emoción y cognición, dándole espacio a cada una de estas partes y siendo consciente de que se dan todas a la vez en el conjunto de la experiencia.",
  },
  {
    title: "¿Cuál es mi objetivo?",
    content:
      "Mi objetivo es acompañar al paciente en su propio proceso, integrando sus partes no reconocidas, poniendo luz a lo inconsciente y reforzando su autoapoyo. Si bien el objetivo final será aumentar la calidad de vida de la persona, se hace necesario un trabajo en el que la persona será el autor y protagonista, fomentando así la responsabilidad de cada uno frente a su propia vida.",
  },
  {
    title: "¿Cómo lo llevo a cabo?",
    content:
      "A través del trabajo en el presente, en el cómo se manifiesta el conflicto en el aquí y ahora. Se trabaja con aquello que nos atasca, nos bloquea, nos limita o nos hace sufrir, para encontrar otras alternativas al problema. Se busca un espacio de creación en el que el paciente pueda probar cosas nuevas y romper con viejos patrones.",
  },
];

export default function Filosofia() {
  return (
    <div>
      <PageHero image={heroImg} title="Filosofía" />

      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-20">
          {sections.map((section) => (
            <AnimatedSection key={section.title}>
              <h2 className="font-heading text-2xl md:text-4xl font-light text-foreground mb-6">
                {section.title}
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </AnimatedSection>
          ))}

          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed">
              Espero que con esta pequeña introducción puedas hacerte una
              primera idea de quién soy y qué es aquello que te puedo ofrecer.
              Ahora te invito a que trasciendas esa idea y experimentes el
              propio proceso.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-8" />
            <p className="font-heading text-xl md:text-2xl font-light italic text-foreground/80 leading-relaxed">
              "El trabajo que hice con Silvia me ayudó muchísimo no solo en el
              momento en el que lo hice, sino también después, a través de las
              herramientas que aprendí a usar gracias a ella. Es una gran
              profesional y una persona muy empática y cercana."
            </p>
            <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
              - Cristina B.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
              ¿Te acompaño?
            </h2>
            <p className="text-background/60 mb-8">
              Sesiones presenciales y online
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
            >
              Pide una primera visita
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
