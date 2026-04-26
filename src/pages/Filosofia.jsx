import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import comoTrabajoHeroImg from "../assets/optimized/como-trabajo-hero.webp";

const testimonials = [
  {
    text: "He sentido un cambio profundo en mi forma de vivir y entender lo que me ocurre. Me llevo herramientas reales para mi día a día.",
    author: "Participante · Curso terapéutico",
  },
  {
    text: "Un espacio muy cuidado, profundo y cercano. Me he sentido acompañada en todo momento.",
    author: "Participante · Proceso grupal",
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
        title="¿Cómo trabajo?"
        subtitle="Un enfoque consciente e integrador para comprender lo que vives y transformar tu experiencia desde dentro."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="font-heading text-2xl italic text-foreground/80">
                Una manera de acompañar que une cuerpo, emoción y conciencia
              </p>
              <p>
                Trabajo desde una mirada integradora que entiende a la persona
                en todas sus dimensiones. El proceso terapéutico no se centra
                solo en aliviar un síntoma, sino en comprender qué lo sostiene y
                qué necesita transformarse.
              </p>
              <p>
                Acompaño desde la escucha, la presencia y el respeto, creando un
                espacio donde puedas observar lo que vives con mayor claridad y
                reconectar con tus propios recursos.
              </p>
              <p>
                Integro cuerpo, emoción, conciencia y comprensión para que lo
                que vas descubriendo no se quede solo en una idea, sino que
                pueda traducirse en cambios reales en tu vida diaria.
              </p>
              <p>
                Cada proceso se adapta a tu momento vital, a tu sensibilidad y a
                aquello que necesitas transitar. La intención es que puedas
                comprenderte mejor, recuperar equilibrio y avanzar con más
                conciencia.
              </p>
              <p>
                También existen espacios grupales donde este enfoque se vive de
                forma compartida a través de talleres y procesos de
                autoconocimiento.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
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
