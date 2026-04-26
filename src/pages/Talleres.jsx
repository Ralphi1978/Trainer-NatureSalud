import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import talleresHeroImg from "../assets/optimized/talleres-hero.webp";

const talleres = [
  {
    title: "1. ¿Quién soy yo?",
    paragraphs: [
      "Este primer taller abre la pregunta fundamental del proceso de autoconocimiento: ¿Quién soy realmente?",
      "Exploraremos qué es la conciencia y cómo se configura nuestra experiencia interna, comprendiendo qué ocurre cuando nos desconectamos de partes de nosotros mismos.",
      "Abordaremos los estados disociados, cómo se forman y cómo influyen en nuestra manera de percibir, sentir y relacionarnos con la vida.",
      "Un espacio para empezar a mirarte con mayor claridad y abrir la puerta a un camino real de autoconocimiento.",
    ],
    meta: "Conciencia · Identidad · Estados disociados",
  },
  {
    title: "2. La energía de amar",
    paragraphs: [
      "En este taller exploramos una de las fuerzas más transformadoras del ser humano: la energía de amar.",
      "Comprenderemos cómo esta energía tiene la capacidad de integrar nuestras experiencias internas, restaurar la conexión con nosotros mismos y aportar coherencia a lo que sentimos, pensamos y vivimos.",
      "Amar no es solo una emoción, sino una fuerza organizadora de la conciencia que nos permite realinearnos con nuestra historia y abrirnos a una vivencia más plena.",
      "Un espacio para conectar con el amor como base del proceso de sanación y transformación personal.",
    ],
    meta: "Amor · Conciencia · Integración",
  },
  {
    title: "3. El miedo",
    paragraphs: [
      "En este taller nos adentramos en una de las emociones fundamentales en la construcción de nuestra experiencia: el miedo.",
      "Exploraremos cómo se origina el miedo y de qué manera se instala en nuestra conciencia, condicionando nuestras decisiones, nuestra forma de sentir y nuestra manera de relacionarnos con la vida.",
      "Comprenderemos cómo el miedo puede dar lugar a mecanismos de defensa, bloqueos emocionales y patrones repetitivos que sostienen parte de nuestro sufrimiento.",
      "Desde la comprensión consciente, abrimos un espacio para poder reconocerlo, integrarlo y transformarlo, recuperando una mayor libertad interna.",
    ],
    meta: "Miedo · Conciencia · Transformación",
  },
  {
    title: "4. ¿Conoces tu sensibilidad?",
    paragraphs: [
      "En este taller nos acercamos a una de las capacidades más profundas del ser humano: la sensibilidad.",
      "Exploraremos qué significa realmente ser sensible y cómo esta capacidad influye en nuestra forma de percibir, sentir y relacionarnos con la vida.",
      "Muchas veces la sensibilidad ha sido vivida como una carga o algo difícil de sostener. Aquí aprenderemos a comprenderla desde la conciencia y a reconocerla como una herramienta de conexión interna.",
      "Un espacio para descubrir hacia dónde te conduce tu sensibilidad y cómo puede convertirse en una guía para vivir con mayor coherencia, profundidad y autenticidad.",
    ],
    meta: "Sensibilidad · Conciencia · Guía interior",
  },
  {
    title: "5. Personalidad sustituta",
    paragraphs: [
      "En este taller profundizamos en uno de los aspectos más importantes del proceso de autoconocimiento: la comprensión de la personalidad sustituta.",
      "Desde el enfoque del Programa de Evolución Consciente (PEC), exploraremos cómo, a lo largo de la vida, vamos construyendo estructuras internas para adaptarnos al dolor y a las experiencias difíciles.",
      "Comprenderemos el concepto de trauma nuclear de la conciencia y cómo este da lugar a una forma de ser que nos protege, pero que también nos aleja de lo que realmente somos.",
      "Este taller abre la posibilidad de reconocer esos patrones, tomar conciencia de ellos y empezar a recuperar el contacto con nuestra esencia más profunda.",
    ],
    meta: "Personalidad · Trauma nuclear · Conciencia",
  },
  {
    title: "6. Proyecto de vida",
    paragraphs: [
      "Este último taller integra todo el recorrido y nos lleva a una pregunta esencial: ¿Cómo quiero vivir mi vida desde lo que realmente soy?",
      "Desde el enfoque del Programa de Evolución Consciente (PEC), el proyecto de vida no se construye desde la exigencia o las expectativas externas, sino desde la comprensión profunda de uno mismo.",
      "Revisaremos cómo el miedo, la personalidad sustituta y la historia personal han condicionado nuestras decisiones, abriendo un espacio para elegir con mayor claridad y libertad.",
      "Integraremos lo aprendido para alinear tu sensibilidad, tus recursos y tu conciencia, dando forma a un camino más auténtico, coherente y con sentido.",
      "Este espacio también te invita a comprometerte contigo mismo, a reconocer qué es verdaderamente importante para ti y a comenzar a dar pasos reales hacia una vida más consciente.",
      "Un espacio de cierre donde lo comprendido se convierte en dirección y en una nueva forma de habitar la vida.",
    ],
    meta: "Propósito · Conciencia · Dirección",
  },
];

export default function Talleres() {
  useEffect(() => {
    document.title = "Talleres | Lola Montes";
  }, []);

  return (
    <div>
      <PageHero
        image={talleresHeroImg}
        title="Talleres"
        subtitle="Talleres en Evolución Consciente · Espacios de conocimiento y transformación"
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Talleres en Evolución Consciente basados en la obra de Paloma
                Cabadas y en el PEC (Programa Evolución Consciente). Estos
                talleres están diseñados para el conocimiento esencial de la
                autoterapia, donde el proceso parte de una base clara:
                conocerse para sanarse.
              </p>
              <p>
                A través de este trabajo se abre un conocimiento profundo
                acompañado de prácticas que nos permiten percibir nuestra propia
                salud y también la de las personas que nos rodean, tanto en la
                familia como en nuestro entorno.
              </p>
              <p>
                Estos cursos terapéuticos se fundamentan en el principio que
                revela que nos sanamos cuando comprendemos y cuando hacemos el
                trabajo de descubrir quiénes somos.
              </p>
              <p>
                Están basados en una metodología que nos lleva al conocimiento
                de quién soy, al origen de los miedos, integrando prácticas
                energéticas terapéuticas que permiten llevar este conocimiento
                al cuerpo y a la vida.
              </p>
              <p>
                Es un trabajo que cuida y educa especialmente nuestro mundo
                sensible, utilizando la práctica energética como una herramienta
                integrada para el conocimiento personal.
              </p>
              <p>
                Estos talleres nacen de la necesidad, en mi propio camino de
                vida, de compartir todo aquello que me ha llevado a encontrar un
                sentido y a poder vivir con mayor alegría y dicha.
              </p>
              <p>
                Un espacio para reconectar con tu ser auténtico, apoyarte en la
                grandeza de tus talentos y capacidades, educar tu sensibilidad y
                aprender a disfrutar de lo que eres.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {talleres.map((taller, index) => (
              <AnimatedSection key={taller.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-[#dccfbc] bg-[#fffdf8] p-7 shadow-[0_12px_32px_rgba(15,23,42,0.07)]">
                  <h2 className="font-heading text-2xl md:text-[1.75rem] font-medium text-foreground mb-6">
                    {taller.title}
                  </h2>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    {taller.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-muted-foreground/80">
                    {taller.meta}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="rounded-2xl border border-[#dccfbc] bg-[#fffdf8] p-6 md:p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
              <div className="space-y-4 text-foreground">
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Frecuencia:</span> Un taller
                  cada 15 días
                </p>
                <p className="text-lg md:text-xl">
                  <span className="font-semibold">Precio total:</span>{" "}
                  <span className="font-body text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                    180€
                  </span>{" "}
                  <span className="text-base md:text-lg text-muted-foreground">
                    (programa completo de 6 talleres)
                  </span>
                </p>
              </div>
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
              Si quieres reservar plaza o recibir más información, puedes
              escribirme y te acompaño en el proceso.
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
