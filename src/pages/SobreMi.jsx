import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";

const heroImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/c35f2d563_generated_77bff7ad.png";
const portraitImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/f158a0ba4_generated_d1fc3561.png";

const credentials = [
  "Máster de Terapeutas en Evolución Consciente",
  "Un proyecto en evolución consciente",
  "Programa Evolución Consciente de Paloma Cabadas",
  ];

export default function SobreMi() {
  return (
    <div>
      <PageHero
        image={heroImg}
        title="Lola Montes"
        subtitle="Terapeuta | Proyecto de Evolucion Conciente | Mollet del Valles"
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
                Trayectoria
              </h2>
              <div className="w-16 h-px bg-primary/40 mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                { //Colegiada nº 19.161 (Colegio Oficial de Psicología de Cataluña,
                //COPC). Licenciada en Psicología por la Universidad Ramon Llull
                //- FPCEE Blanquerna. Reconocida como Psicóloga General
                //Sanitaria. Terapeuta Gestalt. Máster en Cooperación al
                //Desarrollo. Postgrado en Psicopatología desde la Teoría de
                // Campo. Formada en Terapia y asesoramiento con muñecos.
                 }   
              </p>
              <ul className="space-y-3">
                {credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{credential}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <img
                src={portraitImg}
                alt="Lola Montes - Terapeuta en evolucion consciente"
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
                Inquieta de espíritu. Curiosa e introspectiva. Amante de la
                naturaleza. Interesada en toda expresión de vida, mi atención
                sobre todo se ha centrado en la persona y en las relaciones
                humanas.
              </p>
              <p>
                Esto me llevó a estudiar Psicología y a iniciar un viaje de
                retorno hacia mí misma. Un viaje de crecimiento personal en el
                que ya llevo embarcada unos cuantos años y que es mi principal
                fuente de conocimiento y sabiduría.
              </p>
              <p>
                Consciente de que este es un recorrido del que seguir
                nutriéndome por mucho tiempo, hoy me decido a compartir contigo
                algo de todo lo aprendido y a acompañarte en tu viaje.
              </p>
              <p className="font-heading text-xl italic text-foreground">
                Siempre con amor, respeto y proximidad.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <blockquote className="font-heading text-2xl md:text-4xl font-light italic text-foreground leading-relaxed">
              "Conócete. Acéptate. Supérate."
            </blockquote>
            <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
              - Agustín de Hipona
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
            >
              Contacto
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
