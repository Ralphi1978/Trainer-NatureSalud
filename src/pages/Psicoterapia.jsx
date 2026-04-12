import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import ContactInfo from "../components/ContactInfo";
import PageHero from "../components/PageHero";
import TestimonialCarousel from "../components/TestimonialCarousel";

const heroImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/9d44d020c_generated_e674a9c2.png";

const motivos = [
  "Crecimiento personal",
  "Ansiedad y estrés",
  "Depresión",
  "Terapia de pareja",
  "Procesos de duelo",
  "Procesos de cambio",
  "Gestión emocional",
  "Crisis",
  "Bloqueos",
];

export default function Psicoterapia() {
  return (
    <div>
      <PageHero image={heroImg} title="Psicoterapeuta en Barcelona" />

      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-8">
              ¿Qué te ofrece la psicoterapia?
            </h2>
            <div className="w-16 h-px bg-primary/40 mx-auto mb-10" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                La psicoterapia te ofrece un espacio de acompañamiento en un
                lugar de confianza y respeto. Es un espacio donde traer aquello
                que necesites explorar, o bien porque te preocupe, te angustie
                o te genere algún tipo de malestar, o bien porque sencillamente
                quieras un espacio para ti donde explorarte y conocerte más.
              </p>
              <p>
                Mejorarás la gestión de tu propia vida, adquiriendo mayor
                conciencia sobre ti y responsabilizándote de aquello que haces,
                piensas o sientes. Te empoderarás de tus propios recursos y
                aprenderás nuevas herramientas para encarar la vida de un modo
                más sano.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
              ¿Desde qué enfoque trabajo?
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-10" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Utilizo un enfoque integrativo, nutriéndome de visiones
                humanistas, gestálticas y sistémicas. Creo firmemente en el
                potencial de las personas y en la capacidad que tienen de
                encontrar sus propios recursos y tomar las riendas de su vida.
              </p>
              <p>
                El proceso siempre va a ir enfocado al logro de los objetivos
                que se establezcan entre el paciente y el psicoterapeuta. La
                terapia individual consiste en sesiones de aproximadamente una
                hora de duración, donde se trabaja con aquello que tú traes a
                consulta.
              </p>
            </div>
            <Link
              to="/filosofia"
              className="inline-block mt-8 text-sm font-medium text-primary hover:underline underline-offset-4 tracking-wide uppercase"
            >
              ¿Cómo lo llevo a cabo?
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
              ¿Cuánto dura una psicoterapia?
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-10" />
            <p className="text-muted-foreground leading-relaxed">
              La duración de la psicoterapia es variable. No hay un número de
              sesiones preestablecidas. Depende de lo que desees trabajar, del
              logro de los objetivos establecidos, de si lo que traes a terapia
              es algo concreto y puntual o de si el propósito es el de un
              proceso de crecimiento personal. De cualquier modo, siempre serás
              libre de finalizar la psicoterapia cuando así lo desees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-12">
              Posibles motivos para iniciar psicoterapia
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {motivos.map((motivo, i) => (
              <AnimatedSection key={motivo} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{motivo}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-5xl font-light mb-4">
                ¿Te acompaño?
              </h2>
              <p className="text-background/60 mb-8">
                Si te interesa hacer psicoterapia en Barcelona y/o si tienes
                alguna duda, puedes ponerte en contacto conmigo. ¡Será un
                auténtico placer conocerte y acompañarte!
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
              >
                Pide una primera sesión
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-background/70">
                <ContactInfo />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
