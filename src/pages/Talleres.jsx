import { Link } from "react-router-dom";
import { Calendar, Globe, Lightbulb, MapPin, Sun, User } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";

const heroImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/482d5f001_generated_659cae22.png";

const features = [
  {
    icon: Sun,
    title: "De carácter vivencial",
    desc: "A través de la propia experiencia, de diferentes propuestas y dinámicas, el grupo integra en la propia experiencia el contenido teórico.",
  },
  {
    icon: User,
    title: "Orientados al autoconocimiento",
    desc: "El foco siempre estará puesto en el trabajo con uno mismo y la toma de conciencia.",
  },
  {
    icon: Globe,
    title: "Integradores",
    desc: "Se nutren de la integración de diferentes enfoques (humanista, sistémico...), teorías y experiencia de vida.",
  },
  {
    icon: Lightbulb,
    title: "Creativos",
    desc: "Vivir en el presente nos regala la posibilidad de ser creativos. La creatividad se combina con la teoría y la vivencia.",
  },
];

export default function Talleres() {
  return (
    <div>
      <PageHero
        image={heroImg}
        title="Cursos y talleres"
        subtitle="Elige el que más se ajuste a tus necesidades, inscríbete y... ¡a crecer!"
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-6 h-6 text-primary/60" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed text-center">
              Son muchos los beneficios que ofrece un grupo, ya sean de
              carácter técnico y profesional (adquisición de nuevos
              conocimientos y aprendizaje de técnicas específicas) como de
              carácter personal (experiencia propia, pertenencia al grupo, toma
              de conciencia, crecimiento personal...). Por todo ello, considero
              imprescindible poder ofrecer espacios grupales donde aprender y
              crecer como profesionales y, sobre todo, como personas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground text-center mb-12">
              Próximos cursos y talleres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="p-8 lg:p-12 rounded-2xl border border-border bg-card shadow-lg shadow-foreground/5">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-6">
                Taller de autoestima: Con buenos ojos (3ª edición)
              </h3>
              <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>30/05/2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Barcelona</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Un taller que pretende acercarte a ti mismo/a para mostrarte
                cómo cultivar el buen amor hacia ti. La tercera edición de un
                espacio donde trabajar la autoestima de una forma vivencial,
                integradora y creativa.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Reserva tu plaza
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
              ¿Quieres estar al día?
            </h2>
            <p className="text-background/60 mb-8">
              Si quieres recibir la información directamente en tu correo, no
              dudes en contactarme. ¡No te perderás ni un taller!
            </p>
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
