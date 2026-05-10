import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import homeHeroImg from "../assets/optimized/home-hero.webp";
import homeTalleresBlockImg from "../assets/optimized/home-talleres-block.webp";

const pains = [
  "Sientes ansiedad o angustia y no sabes realmente por qué.",
  "Tu cabeza no para y te cuesta salir de los mismos pensamientos.",
  "Te sientes atrapada en situaciones o relaciones que te hacen sufrir.",
  "Te cuesta tomar decisiones y dudas constantemente de ti misma.",
  "Sabes que necesitas cambiar algo en tu vida, pero no sabes por dónde empezar.",
];

const benefits = [
  "Sentirte más en calma contigo misma.",
  "Dejar de vivir en bucle con tus pensamientos.",
  "Comprender lo que hay detrás de tu sufrimiento.",
  "Relacionarte contigo desde un lugar más sano.",
  "Empezar a tomar decisiones con más claridad y seguridad.",
];

export default function Home() {
  useEffect(() => {
    document.title = "Lola Montes | Evolución consciente";
  }, []);

  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={homeHeroImg}
          alt="Espacio luminoso y sereno"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,249,244,0.96)_0%,rgba(252,249,244,0.88)_38%,rgba(252,249,244,0.40)_68%,rgba(252,249,244,0.16)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl font-heading text-5xl font-light leading-[0.95] text-foreground md:text-7xl lg:text-8xl"
            >
              Empieza a entender lo que te pasa y aprende a vivir lo que
              sientes de una forma diferente
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Talleres prácticos para comprender por qué te sientes así, salir
              del sufrimiento que te mantiene atrapada y empezar a cambiar tu
              vida.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Quiero entender lo que me pasa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <AnimatedSection className="rounded-[2rem] border border-[#e4d8c9] bg-[#fffdf8] px-8 py-10 shadow-[0_20px_60px_rgba(40,32,24,0.05)] md:px-12 md:py-12">
            <h2 className="font-heading text-3xl font-light text-foreground md:text-4xl">
              Puede que te pase algo de esto...
            </h2>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-light leading-relaxed text-foreground md:text-5xl">
              Si te reconoces en esto, no te pasa nada raro.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Simplemente hay cosas dentro de ti que todavía no has podido
              comprender.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.24em] text-primary">
                Beneficios
              </p>
              <h2 className="mt-4 font-heading text-3xl font-light text-foreground md:text-4xl">
                A través de estos talleres podrás
              </h2>
              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                      <CircleCheckBig className="h-4 w-4" />
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <img
                src={homeTalleresBlockImg}
                alt="Espacio de autoconocimiento y transformación"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_rgba(30,24,19,0.10)]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p className="text-foreground">Hola, soy Lola.</p>
              <p>Durante muchos años, yo también me sentí así.</p>
              <p>
                Había momentos de ansiedad, de confusión, de no entender por
                qué me pasaba lo que me pasaba. Sentía muchas cosas por dentro,
                pero no sabía cómo darles sentido.
              </p>
              <p>
                Buscaba respuestas. Probaba diferentes caminos, leía,
                investigaba... pero sentía que no terminaba de encontrar algo
                que realmente me ayudara a comprenderme de verdad.
              </p>
              <p>
                Toda esta búsqueda me llevó a encontrar las herramientas que
                hoy utilizo en mi propio proceso de autoconocimiento.
              </p>
              <div className="rounded-[1.75rem] border border-[#e0d4c4] bg-background px-6 py-6 shadow-[0_18px_40px_rgba(40,32,24,0.04)]">
                <p className="text-foreground">
                  Con el tiempo entendí algo que lo cambió todo:
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <p>No se trata solo de gestionar lo que te pasa.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <p>
                      Sino de comprender realmente de dónde viene y comprenderte
                      de verdad.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Cuando empecé a entender lo que realmente me pasaba por dentro,
                todo empezó a encajar y dejé de sentirme perdida.
              </p>
              <p>Por fin pude tomar las riendas de mi vida.</p>
              <p>Hoy acompaño a otras mujeres en ese mismo camino.</p>
              <p>
                He creado estos talleres como un espacio práctico y cercano,
                donde puedas entender lo que te sucede y empezar a generar
                cambios reales en tu vida.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-light leading-relaxed text-foreground md:text-5xl">
              Lo que te pasa tiene un sentido, aunque todavía no lo entiendas
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Cuando empiezas a comprenderlo, puedes empezar a transformarlo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <AnimatedSection>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/72 md:text-xl">
              Si has llegado hasta aquí, es porque una parte de ti ya está
              buscando entender lo que te pasa.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Quiero empezar mi proceso
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
