import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import sobreMiHeroImg from "../assets/optimized/sobre-mi-hero.webp";
import sobreMiPortraitImg from "../assets/optimized/sobre-mi-portrait.webp";

const tools = [
  "La alimentación, como base del bienestar",
  "La fitoterapia y la auriculoterapia, para acompañar el equilibrio del cuerpo",
  "El autoconocimiento, para entender lo que nos pasa y por qué lo vivimos",
];

const training = [
  "Medicina tradicional china, fitoterapia y auriculoterapia",
  "Nutrición y alimentación integrativa",
  "Psicoterapia psicoanalítica aplicada",
  "Máster para Terapeutas en Evolución Consciente",
];

function BulletList({ items }) {
  return (
    <ul className="space-y-4 border-y border-border/80 py-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SobreMi() {
  useEffect(() => {
    document.title = "Sobre mí | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={sobreMiHeroImg}
        title="Sobre mí"
        subtitle="Una mirada integradora para acompañarte a comprender lo que te pasa y empezar a sentirte mejor."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <AnimatedSection>
              <img
                src={sobreMiPortraitImg}
                alt="Lola Montes"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl shadow-foreground/10"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <h2 className="font-heading text-4xl font-light text-foreground md:text-5xl">
                Hola, soy Lola
              </h2>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
                <p className="font-heading text-2xl italic text-foreground/80">
                  Acompaño a personas que quieren entender lo que les pasa y
                  empezar a sentirse mejor, tanto a nivel físico como
                  emocional.
                </p>
                <p>
                  Desde temprana edad sentía la necesidad de entender y me
                  cuestionaba lo que me pasaba. Esa búsqueda me llevó a recorrer
                  diferentes caminos, desde el trabajo emocional hasta el
                  cuidado del cuerpo, descubriendo distintas herramientas que
                  me ayudaron a comprender que todo está conectado.
                </p>
                <p>
                  Con el tiempo fui integrando todas esas herramientas, que hoy
                  forman parte de mi trabajo:
                </p>
                <BulletList items={tools} />
                <p>
                  Porque muchas veces lo que sentimos no es solo físico, ni solo
                  mental o emocional, sino una combinación de todo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-light text-foreground md:text-4xl">
              Una forma integradora de acompañarte
            </h2>
            <div className="mt-4 h-px w-16 bg-primary/40" />
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                Por eso mi forma de acompañar es integradora. Trabajo contigo
                teniendo en cuenta lo que te pasa en el cuerpo, lo que sientes y
                lo que estás viviendo, para poder entenderlo en conjunto y
                ayudarte a encontrar una forma de estar mejor.
              </p>
              <p>
                Siempre desde un espacio cercano, respetuoso y adaptado a ti y a
                tu momento.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-light text-foreground md:text-4xl">
              Mi recorrido incluye formación en
            </h2>
            <div className="mt-4 h-px w-16 bg-primary/40" />
            <div className="mt-8 leading-relaxed text-muted-foreground">
              <BulletList items={training} />
            </div>
            <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                Hoy acompaño a personas que quieren mejorar su bienestar,
                entender lo que les pasa y empezar a cuidarse de una forma más
                consciente.
              </p>
              <p>
                Ya sea a través de la alimentación, el cuerpo o lo que están
                viviendo, siempre hay un punto desde el que empezar.
              </p>
              <p className="font-heading text-2xl italic text-foreground/80">
                Porque yo también he pasado por momentos de no entender lo que
                me pasaba.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-foreground py-16 text-center text-background">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-light md:text-4xl">
              ¿Te acompaño?
            </h2>
            <p className="mb-8 mt-4 text-background/60">
              Un espacio cercano, respetuoso y adaptado a tu momento
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-lg"
            >
              Hablemos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
