import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import ayudarHeroImg from "../assets/optimized/ayudar-hero.webp";

export default function Psicoterapia() {
  useEffect(() => {
    document.title = "¿Cómo te puedo ayudar? | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={ayudarHeroImg}
        title="¿Cómo te puedo ayudar?"
        subtitle="Terapias individuales y acompañamiento adaptado a tu momento vital"
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Llevo más de 20 años acompañando a cientos de personas en su
                proceso de sanación a todos los niveles, tanto físicos como
                mentales y emocionales.
              </p>
              <p className="font-heading text-2xl italic text-foreground/80">
                Terapias individuales · Un acompañamiento adaptado a lo que
                necesitas en cada momento
              </p>
              <p>
                Serán sesiones individuales adaptadas a cada persona,
                combinando diferentes enfoques según la necesidad. Un
                acompañamiento desde un lugar de confianza y respeto, creando un
                espacio donde poder explorar todo aquello que necesitemos. Estas
                sesiones pueden realizarse tanto de forma presencial como
                online, adaptándose a tu situación y momento vital.
              </p>
              <p>
                La terapia en Evolución Consciente consiste en un acompañamiento
                en el proceso de autosanación de la persona que quiere realizar
                transformaciones en su vida.
              </p>
              <p>
                Está fundamentada en los principios donde nos sanamos cuando
                comprendemos. Comprender abre un espacio interno sanador que
                facilita descubrir quién soy yo y por qué me pasa lo que me
                pasa.
              </p>
              <p>
                Este proceso puede integrarse con herramientas como la
                fitoterapia aplicada, el asesoramiento en alimentación y
                nutrición o la auriculoterapia, siempre en función de lo que
                necesites.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
              Nutrición y alimentación consciente
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-10" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                La alimentación es una parte fundamental de nuestro bienestar.
                En este espacio puedo acompañarte a encontrar una forma de
                alimentarte más adecuada a tu cuerpo y a tu momento vital,
                introduciendo cambios progresivos y conscientes que te ayuden a
                mejorar tu estado de salud.
              </p>
              <p>
                No se trata solo de qué comes, sino de cómo te cuidas, cómo te
                escuchas y cómo habitas tu cuerpo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-8">
              Terapeuta en medicina tradicional china y fitoterapia
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-10" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Como terapeuta, también puedo acompañarte a través de la
                fitoterapia y la auriculoterapia, dos herramientas naturales que
                ayudan a equilibrar el organismo y a mejorar el estado de salud
                de forma integral.
              </p>
              <p>
                Estas terapias permiten trabajar sobre el cuerpo desde un
                enfoque respetuoso y adaptado, apoyando procesos físicos,
                emocionales y energéticos, siempre en función de lo que
                necesites en cada momento.
              </p>
              <p>
                Todas estas herramientas están disponibles para poder crear los
                cambios y transformaciones necesarias a todos los niveles.
              </p>
              <p>
                Y a través de mis servicios recuperarás tus propios recursos y
                aprenderás a tener nuevas herramientas para encarar la vida de
                un modo más sano.
              </p>
            </div>
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
              Hablemos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
