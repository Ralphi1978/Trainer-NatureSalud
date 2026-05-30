import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import comoTrabajoHeroImg from "../assets/optimized/como-trabajo-hero.webp";

const focusAreas = [
  "Lo que sientes",
  "Lo que estás viviendo",
  "Lo que te pasa en el cuerpo",
  "La comprensión de todo ello",
];

const testimonials = [
  {
    text: "Por primera vez entendí lo que me estaba pasando y he podido aplicarlo en mi día a día.",
    author: "Ana · Proceso terapéutico",
  },
  {
    text: "Un espacio muy cuidado, cercano y profundo. Me he sentido acompañada en todo momento.",
    author: "María · Proceso grupal",
  },
];

export default function Filosofia() {
  useEffect(() => {
    document.title = "¿Cómo trabajo? | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={comoTrabajoHeroImg}
        title="Un acompañamiento para entender lo que te pasa y empezar a cambiarlo"
        subtitle="Trabajo contigo desde una mirada integradora que engloba mente, emoción y cuerpo, para que lo que te ocurre tenga sentido y puedas vivirlo de otra manera."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="font-heading text-2xl italic text-foreground/80">
                No se trata solo de aliviar lo que sientes, sino de acompañarte
                a entender lo que te pasa.
              </p>
              <p>
                En el proceso vamos a ir directamente a lo que estás viviendo,
                para poder comprenderlo y darte herramientas que te ayuden a
                generar cambios. No necesitas saber por dónde empezar, lo
                veremos juntas.
              </p>
              <p>
                Acompaño desde la escucha y el respeto, creando un espacio donde
                puedas expresarte sin juicio. Poco a poco, irás entendiendo
                aquello que hoy te frena y te impide avanzar en tu vida.
              </p>
              <p>
                Integro una visión completa de la persona, trabajando sobre:
              </p>
              <ul className="grid gap-3 border-y border-border/80 py-6 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Para que puedas llevarlo a la práctica e integrarlo en tu día a
                día.
              </p>
              <p>
                Cada proceso es diferente. Me adapto a tu momento, a tu forma de
                sentir y a lo que realmente necesitas trabajar ahora. La idea es
                que puedas atravesar tus dificultades con mayor comprensión,
                claridad y acompañamiento.
              </p>
              <p>
                Este enfoque también se vive en grupo, a través de talleres
                donde puedes profundizar en tu proceso acompañada de otras
                personas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 0.08}>
              <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm">
                <p className="font-heading text-xl italic text-foreground/80 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="mt-5 text-sm font-medium text-foreground/70">
                  {testimonial.author}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
              ¿Te acompaño?
            </h2>
            <p className="text-background/60 mb-8">
              Un acompañamiento consciente, cercano e integrador
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
            >
              Hablemos
            </Link>
            <div className="mt-5">
              <Link
                to="/talleres"
                className="inline-flex items-center px-8 py-3.5 border border-background/20 text-background/80 rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:border-background/50 hover:text-background"
              >
                Ver talleres
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
