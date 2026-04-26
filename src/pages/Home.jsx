import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Heart, User, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import homeHeroImg from "../assets/optimized/home-hero.webp";
import homeTalleresBlockImg from "../assets/optimized/home-talleres-block.webp";

const services = [
  {
    icon: User,
    title: "Lola Montes",
    description:
      "Un camino vivido con conciencia, sensibilidad y formación al servicio del acompañamiento personal.",
    link: "/sobre-mi",
    cta: "Conóceme más",
  },
  {
    icon: Globe,
    title: "Mi enfoque",
    description:
      "Un enfoque consciente e integrador para comprender lo que vives y transformar tu experiencia desde dentro.",
    link: "/filosofia",
    cta: "¿Cómo trabajo?",
  },
  {
    icon: Heart,
    title: "Terapias individuales",
    description:
      "Un acompañamiento terapéutico adaptado a ti, para vivir con más claridad, equilibrio y conciencia.",
    link: "/psicoterapia",
    cta: "¿Cómo te puedo ayudar?",
  },
  {
    icon: Users,
    title: "Talleres",
    description:
      "Talleres vivenciales para profundizar en el autoconocimiento y avanzar con más conciencia, claridad y sentido.",
    link: "/talleres",
    cta: "Consúltalos",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Lola Montes | Evolución consciente";
  }, []);

  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={homeHeroImg}
          alt="Espacio terapéutico sereno"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-4"
          >
            Acompañamiento terapéutico y evolución consciente
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground max-w-2xl"
          >
            Un camino de conciencia y transformación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Te acompaño en un proceso de autoconocimiento y transformación para
            vivir con más claridad, conciencia y bienestar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Hablemos
            </Link>
            <Link
              to="/talleres"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground/20 text-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Ver talleres
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-sm font-medium text-primary hover:underline underline-offset-4 tracking-wide uppercase"
                  >
                    {service.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
              Opiniones
            </h2>
          </AnimatedSection>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2">
                <img
                  src={homeTalleresBlockImg}
                  alt="Programa de talleres"
                  className="rounded-2xl shadow-2xl shadow-foreground/5 w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <p className="text-xs tracking-widest uppercase text-primary mb-4">
                  Programa de talleres
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
                  Talleres en Evolución Consciente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Frecuencia:</strong> un taller cada 15 días
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Programa:</strong> completo de 6 talleres
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Un recorrido grupal de aprendizaje y transformación para
                  profundizar en el autoconocimiento, comprender lo que vives y
                  avanzar con más conciencia, claridad y sentido.
                </p>
                <Link
                  to="/talleres"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Ver programa completo
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
              ¿Te acompaño?
            </h2>
            <p className="text-background/60 text-base mb-4">
              Acompañamiento individual y espacios de transformación
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-lg"
              >
                Hablemos
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=34625183735"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 border border-background/20 text-background rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:border-background/50"
              >
                Escríbeme por WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
